import React from 'react'
import { Button, Result } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const Error500 = () => {
  const navigate = useNavigate()
  return (
    <>
      <Result
        status="403"
        title="抱歉，您没有权限访问该页面..."
        subTitle="请联系管理员，或点击下面按钮返回首页"
        extra={
          <Button shape="round" type="primary" onClick={() => navigate('/')} icon={<ArrowLeftOutlined />}>
            返回首页
          </Button>
        }
      />
    </>
  )
}

export default Error500
