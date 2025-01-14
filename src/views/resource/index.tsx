import React from 'react'
import { Avatar, Card, Col, List, Row } from 'antd'
import { communityList, componentLibraryList, projectList, teamList } from '@/views/resource/data'

export const Resource = () => {
  const goTo = (url: string) => {
    window.open(url)
  }

  return (
    <>
      <Row gutter={16} wrap={false}>
        <Col flex={1} span={16}>
          <Card title="React 组件库 ✨">
            <Row gutter={[16, 16]}>
              {componentLibraryList.map((item, index) => (
                <Col key={index} style={{ width: '25%' }}>
                  <Card
                    onClick={() => goTo(item.link)}
                    hoverable
                    size="small"
                    type="inner"
                    title={item.name}
                    extra={<img width="24" src={item.icon} alt="" />}>
                    <div
                      style={{
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        textOverflow: 'ellipsis',
                        fontSize: '12px'
                      }}>
                      {item.description}
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
          <Row gutter={8}>
            <Col style={{ width: '40%' }}>
              <Card title="技术社区 🍊" className="mt-2">
                <List
                  dataSource={communityList}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={item.link}>{item.name}</a>}
                        description={item.description}
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col style={{ width: '60%' }}>
              <Card title="技术团队 💪" className="mt-2">
                <List
                  grid={{ gutter: 8, column: 2 }}
                  dataSource={teamList}
                  renderItem={(item) => (
                    <List.Item>
                      <Card onClick={() => goTo(item.link)} hoverable size="small" className="bg-gray-1">
                        <div className="flex items-center">
                          <Avatar src={item.avatar} />
                          <span className="ml-2">{item.name}</span>
                        </div>
                      </Card>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col flex={1} span={8}>
          <Card title="开源项目推荐 ⭐">
            <List
              size="small"
              split
              dataSource={projectList}
              renderItem={(item) => (
                <List.Item onClick={() => goTo(item.link)} className="hover:bg-gray-1 cursor-pointer transition-all">
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={item.name}
                    description={item.description}
                  />
                </List.Item>
              )}></List>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Resource
