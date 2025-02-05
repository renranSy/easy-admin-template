import alloyteam from '@/assets/logo/alloyteam.ico'
import douyin from '@/assets/logo/douyin.ico'
import taoxi from '@/assets/logo/taoxi.png'
import fex from '@/assets/logo/fex.ico'
import youzan from '@/assets/logo/youzan.ico'
import elm from '@/assets/logo/elm.jpg'

import antdLogo from '@/assets/logo/antd-logo.svg'
import materialUi from '@/assets/logo/material-ui.svg'
import arcoLogo from '@/assets/logo/arco-logo.svg'
import reactVant from '@/assets/logo/react-vant.svg'
import zarm from '@/assets/logo/zarm.svg'
import semiLogo from '@/assets/logo/semi-logo.png'
import nextUi from '@/assets/logo/next-ui.png'
import reactBootstrap from '@/assets/logo/react-bootstrap.svg'

import github from '@/assets/logo/github.svg'
import arcoAdmin from '@/assets/logo/react.svg'
import codeRoadmap from '@/assets/logo/yupi.png'
import awesomeReact from '@/assets/logo/awesome-react.jpg'
import outils from '@/assets/logo/outils.jpg'
import linuxTutorial from '@/assets/logo/linux-tutorial.png'

import cainiao from '@/assets/logo/cainiao.ico'
import stackoverflow from '@/assets/logo/stackoverflow.svg'
import juejin from '@/assets/logo/juejin.png'
import linuxDo from '@/assets/logo/linux-do.png'
import sifou from '@/assets/logo/sifou.png'
import csdn from '@/assets/logo/csdn.png'

export const teamList = [
  { name: '腾讯Web前端团队', link: 'http://www.alloyteam.com/', avatar: alloyteam },
  { name: '抖音前端技术团队', link: 'https://douyinfe.com/', avatar: douyin },
  { name: '淘系前端团队', link: 'https://fed.taobao.org/', avatar: taoxi },
  { name: '百度Web前端研发部', link: 'https://fex.baidu.com/', avatar: fex },
  { name: '有赞技术团队', link: 'https://tech.youzan.com/tag/front-end/', avatar: youzan },
  { name: '饿了吗前端', link: 'https://zhuanlan.zhihu.com/ElemeFE', avatar: elm }
]

export const componentLibraryList = [
  {
    name: 'Ant Design',
    icon: antdLogo,
    description: 'antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。',
    link: 'https://ant-design.antgroup.com/index-cn'
  },
  {
    name: 'Material-UI',
    icon: materialUi,
    description: 'Material-UI是一组实现了谷歌Material Design设计原则的React组件集合。',
    link: 'https://mui.com/'
  },
  {
    name: 'Arco Design',
    icon: arcoLogo,
    description: '字节跳动出品的企业级设计系统，组件好看优雅，有React版本和Vue版本。',
    link: 'https://arco.design/'
  },
  {
    name: 'React Vant',
    icon: reactVant,
    description: '有赞前端团队开源的移动端组件库，性能极佳，质量高，覆盖移动端主流场景。',
    link: 'https://react-vant.3lang.dev/'
  },
  {
    name: 'Zarm',
    icon: zarm,
    description: 'Zarm 是众安科技基于 React 研发的一款适用于企业级的移动端 UI 组件库。',
    link: 'https://zarm.design/#/'
  },
  {
    name: 'Semi-UI',
    icon: semiLogo,
    description: '由抖音前端与 UED 团队维护，易于定制的现代化设计系统。',
    link: 'https://semi.design/zh-CN/'
  },
  { name: 'NextUI', icon: nextUi, description: '漂亮、快速、现代的 React UI 库。', link: 'https://nextui.org/' },
  {
    name: 'React Bootstrap',
    icon: reactBootstrap,
    description: 'React-Bootstrap 是模仿Bootstrap 风格的React 组件库。',
    link: 'https://react-bootstrap.netlify.app/'
  }
]

export const projectList = [
  { name: 'Github', description: '世界最大的开源社区', avatar: github, link: 'https://github.com/' },
  {
    name: 'Arco admin template',
    description: '一个免费开源的中后台模板',
    avatar: arcoAdmin,
    link: 'https://github.com/hu-snail/arco-admin-template#arco-admin-template'
  },
  {
    name: 'code-roadmap',
    description: '原创编程学习路线',
    avatar: codeRoadmap,
    link: 'https://github.com/liyupi/code-roadmap'
  },
  {
    name: 'awesome-react',
    description: '有关 React 生态系统的精彩内容的集合',
    avatar: awesomeReact,
    link: 'https://github.com/enaqx/awesome-react'
  },
  { name: 'outils', description: '前端业务代码工具库', avatar: outils, link: 'https://github.com/proYang/outils' },
  {
    name: 'linux-tutorial',
    description: '📚 linux-tutorial 是一个 Linux 教程',
    avatar: linuxTutorial,
    link: 'https://github.com/dunwu/linux-tutorial'
  }
]

export const communityList = [
  { avatar: cainiao, name: '菜鸟教程', description: '学的不仅是技术，更是梦想！', link: 'https://www.runoob.com/' },
  {
    avatar: stackoverflow,
    name: 'StackOverflow',
    description: '全球最大的技术社区。',
    link: 'https://stackoverflow.com/'
  },
  { avatar: juejin, name: '掘金', description: '帮助开发者成长的社区。', link: 'https://juejin.cn/' },
  { avatar: linuxDo, name: 'LINUX DO', description: '新的理想型社区。', link: 'https://linux.do/' },
  { avatar: sifou, name: 'SF思否', description: '中国领先的开发者技术社区。', link: 'https://segmentfault.com/' },
  { avatar: csdn, name: 'CSDN', description: '精华与糟粕并存。', link: 'https://www.csdn.net/' }
]
