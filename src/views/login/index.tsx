import React, { createRef, useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { App, Button, Input, InputRef } from 'antd'
import { useNavigate } from 'react-router-dom'
import cache from '@/utils/cache'
import { useDispatch } from 'react-redux'
import { userLogin } from '@/store/user'
import useAsync from '@/hooks/useAsync'
import api from '@/api'
import useI18n from '@/hooks/useI18n'

const Login = () => {
  const { message } = App.useApp()
  const { t } = useI18n()

  const dispatch = useDispatch()

  const usernameRef = createRef<InputRef>()
  const passwordRef = createRef<InputRef>()
  const [loading, setLoading] = useState<boolean>(false)

  const navigate = useNavigate()
  const handleLogin = async () => {
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

    setLoading(true)
    const resp = await api.login({
      username,
      password
    })
    setLoading(false)
    if (resp.code === 200) {
      message.success('登录成功')
      cache.set('token', resp.data.token)
      dispatch(userLogin(resp.data.userInfo))
      navigate('/')
    } else {
      message.error(resp.message)
    }
  }

  useAsync(async () => {
    const resp = await api.getUserInfo()
    if (resp.code == 200) {
      dispatch(userLogin(resp.data))
      navigate('/')
      message.warning('请勿重复登录！')
    }
  })

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
            {t('login.title')}
          </div>
          <div className="mt-8 px-4">
            <div className="mb-2 w-full">
              <Input ref={usernameRef} placeholder={t('login.placeholder.username')} prefix={<UserOutlined />} />
            </div>
            <div className="mb-2 w-full">
              <Input.Password
                ref={passwordRef}
                placeholder={t('login.placeholder.password')}
                prefix={<LockOutlined />}
                onKeyDown={async (event) => {
                  if (event.key === 'Enter') {
                    await handleLogin()
                  }
                }}
              />
            </div>
            <Button
              loading={loading}
              disabled={loading}
              onClick={() => handleLogin()}
              className="mt-4"
              type="primary"
              block>
              {t('login.btnText')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
