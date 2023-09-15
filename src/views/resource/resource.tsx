import React from 'react'
import { Avatar, Card, Col, List, Row } from 'antd'

export const Resource = () => {
  const goTo = (url: string) => {
    window.open(url)
  }
  const teamList = [
    {
      name: '腾讯Web前端团队',
      link: 'http://www.alloyteam.com/',
      avatar: '/src/assets/logo/alloyteam.ico'
    },
    {
      name: '抖音前端技术团队',
      link: 'https://douyinfe.com/',
      avatar: '/src/assets/logo/douyin.ico'
    },
    {
      name: '淘系前端团队',
      link: 'https://fed.taobao.org/',
      avatar: '/src/assets/logo/taoxi.png'
    },
    {
      name: '百度Web前端研发部',
      link: 'https://fex.baidu.com/',
      avatar: '/src/assets/logo/fex.ico'
    },
    {
      name: '有赞技术团队',
      link: 'https://tech.youzan.com/tag/front-end/',
      avatar: '/src/assets/logo/youzan.ico'
    },
    {
      name: '饿了吗前端',
      link: 'https://zhuanlan.zhihu.com/ElemeFE',
      avatar: '/src/assets/logo/elm.jpg'
    }
  ]

  const projectList = [
    {
      name: 'Github',
      description: '世界最大的开源社区',
      avatar: '/src/assets/logo/github.svg',
      link: 'https://github.com/'
    },
    {
      name: 'Arco admin template',
      description: '一个免费开源的中后台模板',
      avatar: '/src/assets/logo/react.svg',
      link: 'https://github.com/hu-snail/arco-admin-template#arco-admin-template'
    },
    {
      name: 'code-roadmap',
      description:
        '原创编程学习路线，包括全面的知识点、免费资源、面试题、学习建议、项目，适用于所有学习编程、求职的同学',
      avatar: '/src/assets/logo/yupi.png',
      link: 'https://github.com/liyupi/code-roadmap'
    },
    {
      name: 'awesome-react',
      description: '有关 React 生态系统的精彩内容的集合',
      avatar: '/src/assets/logo/awesome-react.jpg',
      link: 'https://github.com/enaqx/awesome-react'
    },
    {
      name: 'outils',
      description: '前端业务代码工具库',
      avatar: '/src/assets/logo/outils.jpg',
      link: 'https://github.com/proYang/outils'
    },
    {
      name: 'linux-tutorial',
      description: '📚 linux-tutorial 是一个 Linux 教程',
      avatar: '/src/assets/logo/linux-tutorial.png',
      link: 'https://github.com/dunwu/linux-tutorial'
    }
  ]
  return (
    <>
      <Row gutter={16} wrap={false}>
        <Col flex={1} span={16}>
          <Card title="React 组件库 ✨">
            <Row gutter={[16, 16]}>
              <Col style={{ width: '25%' }}>
                <Card
                  onClick={() => goTo('https://ant-design.antgroup.com/index-cn')}
                  hoverable
                  size="small"
                  type="inner"
                  title="Ant Design"
                  extra={<img width="24" src="/src/assets/logo/antd-logo.svg" alt="" />}>
                  <div
                    style={{
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      textOverflow: 'ellipsis',
                      fontSize: '12px'
                    }}>
                    antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。
                  </div>
                </Card>
              </Col>
              <Col style={{ width: '25%' }}>
                <Card
                  onClick={() => goTo('https://mui.com/')}
                  hoverable
                  size="small"
                  type="inner"
                  title="Material-UI"
                  extra={<img width="22" src="/src/assets/logo/material-ui.svg" alt="" />}>
                  <div
                    style={{
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      textOverflow: 'ellipsis',
                      fontSize: '12px'
                    }}>
                    Material-UI是一组实现了谷歌Material
                    Design设计原则的React组件集合，江湖传言使用Material-UI可以使我们的页面颜色更鲜艳，动画效果更突出。
                  </div>
                </Card>
              </Col>
              <Col style={{ width: '25%' }}>
                <Card
                  onClick={() => goTo('https://arco.design/')}
                  hoverable
                  size="small"
                  type="inner"
                  title="Arco Design"
                  extra={<img width="30" src="/src/assets/logo/arco-logo.svg" alt="" />}>
                  <div
                    style={{
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      textOverflow: 'ellipsis',
                      fontSize: '12px'
                    }}>
                    字节跳动出品的企业级设计系统，组件好看优雅，有React版本和Vue版本。
                  </div>
                </Card>
              </Col>
              <Col style={{ width: '25%' }}>
                <Card
                  onClick={() => goTo('https://react-vant.3lang.dev/')}
                  hoverable
                  size="small"
                  type="inner"
                  title="React Vant"
                  extra={<img width="24" height="24" src="/src/assets/logo/react-vant.svg" alt="" />}>
                  <div
                    style={{
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      textOverflow: 'ellipsis',
                      fontSize: '12px'
                    }}>
                    有赞前端团队开源的移动端组件库，性能极佳，质量高，覆盖移动端主流场景
                  </div>
                </Card>
              </Col>
              <Col style={{ width: '25%' }}>
                <Card
                  onClick={() => goTo('https://zarm.design/#/')}
                  hoverable
                  size="small"
                  type="inner"
                  title="Zarm"
                  extra={<img width="24" src="/src/assets/logo/zarm.svg" alt="" />}>
                  <div
                    style={{
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      textOverflow: 'ellipsis',
                      fontSize: '12px'
                    }}>
                    Zarm 是众安科技基于 React 研发的一款适用于企业级的移动端 UI 组件库，致力于做有温度的组件库。
                  </div>
                </Card>
              </Col>
              <Col style={{ width: '25%' }}>
                <Card
                  onClick={() => goTo('https://semi.design/zh-CN/')}
                  hoverable
                  size="small"
                  type="inner"
                  title="Semi-UI"
                  extra={<img width="24" src="/src/assets/logo/semi-logo.png" alt="" />}>
                  <div
                    style={{
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      textOverflow: 'ellipsis',
                      fontSize: '12px'
                    }}>
                    由抖音前端与 UED 团队维护，易于定制的现代化设计系统，帮助设计师与开发者打造高质量产品。
                  </div>
                </Card>
              </Col>
              <Col style={{ width: '25%' }}>
                <Card
                  onClick={() => goTo('https://nextui.org/')}
                  hoverable
                  size="small"
                  type="inner"
                  title="NextUI"
                  extra={<img width="24" src="/src/assets/logo/next-ui.png" alt="" />}>
                  <div
                    style={{
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      textOverflow: 'ellipsis',
                      fontSize: '12px'
                    }}>
                    漂亮、快速、现代的 React UI 库。Make beautiful websites regardless of your design experience.
                  </div>
                </Card>
              </Col>
              <Col style={{ width: '25%' }}>
                <Card
                  onClick={() => goTo('https://react-bootstrap.netlify.app/')}
                  hoverable
                  size="small"
                  type="inner"
                  title="React Bootstrap"
                  extra={<img width="24" src="/src/assets/logo/react-bootstrap.svg" alt="" />}>
                  <div
                    style={{
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      textOverflow: 'ellipsis',
                      fontSize: '12px'
                    }}>
                    React-Bootstrap 是模仿Bootstrap 风格的React 组件库。Star 数超过1.3
                    万，其简洁的设计风格在社区广受欢迎。
                  </div>
                </Card>
              </Col>
            </Row>
          </Card>
          <Row gutter={8}>
            <Col style={{ width: '40%' }}>
              <Card title="技术社区 🍊" className="mt-2">
                <List>
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src="/src/assets/logo/cainiao.ico" />}
                      title={<a href="https://www.runoob.com/">菜鸟教程</a>}
                      description="学的不仅是技术，更是梦想！"
                    />
                  </List.Item>
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src="/src/assets/logo/stackoverflow.svg" />}
                      title={<a href="https://stackoverflow.com/">StackOverflow</a>}
                      description="全球最大的技术社区。"
                    />
                  </List.Item>
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src="/src/assets/logo/juejin.png" />}
                      title={<a href="https://juejin.cn/">掘金</a>}
                      description="帮助开发者成长的社区。"
                    />
                  </List.Item>
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src="/src/assets/logo/oschina.ico" />}
                      title={<a href="https://www.oschina.net/">开源中国</a>}
                      description="目前国内最大的开源技术社区。"
                    />
                  </List.Item>
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src="/src/assets/logo/sifou.png" />}
                      title={<a href="https://segmentfault.com/">SF思否</a>}
                      description="中国领先的开发者技术社区。"
                    />
                  </List.Item>
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src="/src/assets/logo/csdn.png" />}
                      title={<a href="https://www.csdn.net/">CSDN</a>}
                      description="精华与糟粕并存。"
                    />
                  </List.Item>
                </List>
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
