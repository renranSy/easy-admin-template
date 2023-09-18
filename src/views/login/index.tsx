import React, { createRef } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { App, Button, Input, InputRef } from 'antd'
import { useNavigate } from 'react-router-dom'
import { login } from '@/api'
import cache from '@/utils/cache'

const Login = () => {
  const { message } = App.useApp()

  const usernameRef = createRef<InputRef>()
  const passwordRef = createRef<InputRef>()

  const navigate = useNavigate()
  const handleLogin = async () => {
    console.log(usernameRef.current!.input!.value)
    console.log(passwordRef.current!.input!.value)
    const username = usernameRef.current!.input!.value
    const password = passwordRef.current!.input!.value

    if (username.trim() === '') {
      message.warning('请输入用户名')
      return
    }

    if (password.trim() === '') {
      message.warning('请输入密码')
      return
    }

    const resp = await login({
      username,
      password
    })
    if (resp.code === 200) {
      message.success('登录成功')
      cache.set('token', resp.data.token)
      navigate('/')
    } else {
      message.error(resp.message)
    }
  }

  return (
    <div
      style={{
        backgroundImage: 'url(/src/assets/images/login_bg.png)',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative'
      }}>
      <div
        className="flex shadow-lg border-rd"
        style={{
          height: '360px',
          margin: 'auto',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)'
        }}>
        <div
          className="md:block hidden"
          style={{
            width: '400px',
            height: '100%',
            position: 'relative',
            backgroundColor: '#ade0ff'
          }}>
          <img
            style={{
              position: 'absolute',
              left: '50%',
              bottom: '20px',
              transform: 'translate(-50%)',
              width: '80%',
              height: 'auto'
            }}
            src="/src/assets/images/login_person.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center" style={{ width: '400px' }}>
          <div className="text-center font-bold" style={{ fontSize: '28px' }}>
            Easy Admin
          </div>
          <div className="mt-8 px-4">
            <div className="mb-2 w-full">
              <Input ref={usernameRef} placeholder="用户名为：admin" prefix={<UserOutlined />} />
            </div>
            <div className="mb-2 w-full">
              <Input ref={passwordRef} placeholder="密码为：admin" prefix={<LockOutlined />} />
            </div>
            <Button onClick={() => handleLogin()} className="mt-4" type="primary" block>
              登录
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login