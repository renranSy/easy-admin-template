import React from 'react'
import { Button, Result } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
  const navigate = useNavigate()
  return (
    <>
      <Result
        status="404"
        title="抱歉，当前页面不存在..."
        subTitle="请检查您输入的网址是否正确，或点击下面的按钮返回首页"
        extra={
          <Button shape="round" type="primary" onClick={() => navigate('/')} icon={<ArrowLeftOutlined />}>
            返回首页
          </Button>
        }
      />
    </>
  )
}

export default Error404
