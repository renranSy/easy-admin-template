import React, { useState } from 'react'
import { getData } from '@/api'
import useAsync from '../../hooks/useAsync'
import { Line, LineConfig } from '@ant-design/plots'
import { Avatar, Card, Col, Descriptions, DescriptionsProps, List, Row, Timeline } from 'antd'
import { AccountBookFilled, MessageFilled, ShoppingCartOutlined, UsergroupAddOutlined } from '@ant-design/icons'

const Home = () => {
  const [data, setData] = useState<{ year: string; gdp: string; name: string }[]>([])

  useAsync(async () => {
    const resp = await getData()
    setData(resp.data)
  }, [])

  const config: LineConfig = {
    data,
    autoFit: true,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    yAxis: {
      label: {
        formatter: (v) => `${(Number(v) / 10e8).toFixed(1)} B`
      }
    },
    legend: {
      position: 'top'
    },
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000
      }
    }
  }

  const infoList = [
    {
      name: '新用户',
      data: '2,546',
      icon: <UsergroupAddOutlined style={{ fontSize: '48px', color: '#40c9c6' }} />
    },
    {
      name: '消息',
      data: '1,354',
      icon: <MessageFilled style={{ fontSize: '48px', color: '#36a3f7' }} />
    },
    {
      name: '流水',
      data: '324,124',
      icon: <AccountBookFilled style={{ fontSize: '48px', color: '#f4516c' }} />
    },
    {
      name: '购物',
      data: '21,513',
      icon: <ShoppingCartOutlined style={{ fontSize: '48px', color: '#34bfa3' }} />
    }
  ]

  const updateLog = [
    {
      children: '😥 代码虐我千百遍，我待代码如初恋',
      color: 'green'
    },
    {
      children: '🧐 这是蓝色的，我要是没猜错的话',
      color: 'blue'
    },
    {
      children: '🐛 这里有一个虫子',
      color: 'red'
    },
    {
      children: '🚀 Easy admin template被建立了',
      color: 'gray'
    }
  ]

  const commentList = [
    {
      name: '荏苒',
      description: '我热爱代码✨，但我更爱我的女朋友❤。'
    },
    {
      name: '荏苒',
      description: '我要赚好多💰，然后养我的女朋友🍊。'
    },
    {
      name: '荏苒',
      description: '加油💪！加油！！！'
    },
    {
      name: '荏苒',
      description: '希望以后不要秃头☹。'
    }
  ]

  const descriptions: DescriptionsProps['items'] = [
    {
      key: '1',
      label: '网名',
      children: '荏苒、',
      labelStyle: { width: '80px' }
    },
    {
      key: '2',
      label: '邮箱',
      children: <a href="mailto:2480901422@qq.com">2480901422@qq.com</a>,
      labelStyle: { width: '80px' }
    },
    {
      key: '3',
      label: 'Github',
      children: (
        <a href="https://github.com/renranSy" target="_blank" rel="noreferrer">
          https://github.com/renranSy
        </a>
      ),
      labelStyle: { width: '80px' }
    },
    {
      key: '4',
      label: '自我介绍',
      children: '渴望成为大牛的大学练习生。',
      labelStyle: { width: '80px'}
    }
  ]
  return (
    <>
      <List
        grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 2, xl: 4 }}
        dataSource={infoList}
        renderItem={(item) => (
          <List.Item>
            <Card hoverable>
              <div className="flex w-full justify-around items-center">
                <div>{item.icon}</div>
                <div>
                  <div className="font-bold text-gray-4" style={{ fontSize: '16px' }}>
                    {item.name}
                  </div>
                  <div className="font-bold text-gray-6" style={{ fontSize: '24px' }}>
                    {item.data}
                  </div>
                </div>
              </div>
            </Card>
          </List.Item>
        )}
      />
      <div className="bg-white p-3 box-border w-full">
        <Line {...config} />
      </div>
      <Row className="mt-4" gutter={16}>
        <Col xl={{ span: 8 }} sm={{ span: 24 }} xs={{ span: 24 }}>
          <Card title="更新日志 📕">
            <Timeline className="mt-5" items={updateLog} />
          </Card>
        </Col>
        <Col xl={{ span: 8 }} sm={{ span: 24 }} xs={{ span: 24 }}>
          <Card title="评论 🙈">
            <List
              dataSource={commentList}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                    title={<a href="https://ant.design">{item.name}</a>}
                    description={<span className="text-black">{item.description}</span>}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xl={{ span: 8 }} sm={{ span: 24 }} xs={{ span: 24 }}>
          <Card title="关于我 😊">
            <Descriptions className="pt-3" column={1} items={descriptions} />
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Home
