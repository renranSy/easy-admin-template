export default [
  {
    url: '/api/admin/login',
    type: 'post',
    response(config) {
      const { username, password } = config.body
      if (username !== 'admin') {
        return {
          code: 500,
          data: null,
          message: '用户不存在'
        }
      }
      if (password !== 'admin') {
        return {
          code: 500,
          data: null,
          message: '密码错误'
        }
      }
      return {
        code: 200,
        data: {
          token:
            'eyJ0eXAiOiJKV1QiLCJhAbDciJIUzI1NiJ9.eyJuYmYiOjE2OTU3NDUYYDSsImV4cCI6MTY5NTc0NTc4NiwiaWF0IjoxNjk1NzQ1Nzg2LCJ1c2VybmFtZSI6IjIxMTExMjEyMjAifQ.lJI_CabcpDDvr8b_LbitKUkF7b8UHGknTvifx1RcDUC',
          userInfo: {
            username: '荏苒',
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80',
            role: 'admin'
          }
        },
        message: '登陆成功'
      }
    }
  }
]
