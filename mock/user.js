const accessTokens = {
  admin: 'admin-accessToken',
  editor: 'editor-accessToken',
  test: 'test-accessToken'
}

export default [
  {
    url: '/api/data/get',
    type: 'get',
    response() {
      return {
        code: 200,
        msg: 'success',
        data: [
          {
            name: 'China',
            year: '2000',
            gdp: 1211346869605.24
          },
          {
            name: 'China',
            year: '2001',
            gdp: 1339395718865.3
          },
          {
            name: 'China',
            year: '2002',
            gdp: 1470550015081.55
          },
          {
            name: 'China',
            year: '2003',
            gdp: 1660287965662.68
          },
          {
            name: 'China',
            year: '2004',
            gdp: 1955347004963.27
          },
          {
            name: 'China',
            year: '2005',
            gdp: 2285965892360.54
          },
          {
            name: 'China',
            year: '2006',
            gdp: 2752131773355.16
          },
          {
            name: 'China',
            year: '2007',
            gdp: 3550342425238.25
          },
          {
            name: 'China',
            year: '2008',
            gdp: 4594306848763.08
          },
          {
            name: 'China',
            year: '2009',
            gdp: 5101702432883.45
          },
          {
            name: 'China',
            year: '2010',
            gdp: 6087164527421.24
          },
          {
            name: 'China',
            year: '2011',
            gdp: 7551500425597.77
          },
          {
            name: 'China',
            year: '2012',
            gdp: 8532230724141.76
          },
          {
            name: 'China',
            year: '2013',
            gdp: 9570405758739.79
          },
          {
            name: 'China',
            year: '2014',
            gdp: 10438529153237.6
          },
          {
            name: 'United States',
            year: '2000',
            gdp: 10252345464000
          },
          {
            name: 'United States',
            year: '2001',
            gdp: 10581821399000
          },
          {
            name: 'United States',
            year: '2002',
            gdp: 10936419054000
          },
          {
            name: 'United States',
            year: '2003',
            gdp: 11458243878000
          },
          {
            name: 'United States',
            year: '2004',
            gdp: 12213729147000
          },
          {
            name: 'United States',
            year: '2005',
            gdp: 13036640229000
          },
          {
            name: 'United States',
            year: '2006',
            gdp: 13814611414000
          },
          {
            name: 'United States',
            year: '2007',
            gdp: 14451858650000
          },
          {
            name: 'United States',
            year: '2008',
            gdp: 14712844084000
          },
          {
            name: 'United States',
            year: '2009',
            gdp: 14448933025000
          },
          {
            name: 'United States',
            year: '2010',
            gdp: 14992052727000
          },
          {
            name: 'United States',
            year: '2011',
            gdp: 15542581104000
          },
          {
            name: 'United States',
            year: '2012',
            gdp: 16197007349000
          },
          {
            name: 'United States',
            year: '2013',
            gdp: 16784849190000
          },
          {
            name: 'United States',
            year: '2014',
            gdp: 17521746534000
          },
          {
            name: 'United Kingdom',
            year: '2000',
            gdp: 1657816613708.58
          },
          {
            name: 'United Kingdom',
            year: '2001',
            gdp: 1640246149417.01
          },
          {
            name: 'United Kingdom',
            year: '2002',
            gdp: 1784473920863.31
          },
          {
            name: 'United Kingdom',
            year: '2003',
            gdp: 2053018775510.2
          },
          {
            name: 'United Kingdom',
            year: '2004',
            gdp: 2416931526913.22
          },
          {
            name: 'United Kingdom',
            year: '2005',
            gdp: 2538680000000
          },
          {
            name: 'United Kingdom',
            year: '2006',
            gdp: 2713749770009.2
          },
          {
            name: 'United Kingdom',
            year: '2007',
            gdp: 3100882352941.18
          },
          {
            name: 'United Kingdom',
            year: '2008',
            gdp: 2922667279411.76
          },
          {
            name: 'United Kingdom',
            year: '2009',
            gdp: 2410909799034.12
          },
          {
            name: 'United Kingdom',
            year: '2010',
            gdp: 2475244321361.11
          },
          {
            name: 'United Kingdom',
            year: '2011',
            gdp: 2659310054646.23
          },
          {
            name: 'United Kingdom',
            year: '2012',
            gdp: 2704887678386.72
          },
          {
            name: 'United Kingdom',
            year: '2013',
            gdp: 2786022872706.81
          },
          {
            name: 'United Kingdom',
            year: '2014',
            gdp: 3063803240208.01
          },
          {
            name: 'Russian',
            year: '2000',
            gdp: 259710142196.94
          },
          {
            name: 'Russian',
            year: '2001',
            gdp: 306602070620.5
          },
          {
            name: 'Russian',
            year: '2002',
            gdp: 345470494417.86
          },
          {
            name: 'Russian',
            year: '2003',
            gdp: 430347770731.79
          },
          {
            name: 'Russian',
            year: '2004',
            gdp: 591016690742.8
          },
          {
            name: 'Russian',
            year: '2005',
            gdp: 764017107992.39
          },
          {
            name: 'Russian',
            year: '2006',
            gdp: 989930542278.7
          },
          {
            name: 'Russian',
            year: '2007',
            gdp: 1299705764823.62
          },
          {
            name: 'Russian',
            year: '2008',
            gdp: 1660846387624.78
          },
          {
            name: 'Russian',
            year: '2009',
            gdp: 1222644282201.86
          },
          {
            name: 'Russian',
            year: '2010',
            gdp: 1524917468442.01
          },
          {
            name: 'Russian',
            year: '2011',
            gdp: 2051661732059.78
          },
          {
            name: 'Russian',
            year: '2012',
            gdp: 2210256976945.38
          },
          {
            name: 'Russian',
            year: '2013',
            gdp: 2297128039058.21
          },
          {
            name: 'Russian',
            year: '2014',
            gdp: 2059984158438.46
          },
          {
            name: 'Japan',
            year: '2000',
            gdp: 4887519660744.86
          },
          {
            name: 'Japan',
            year: '2001',
            gdp: 4303544259842.72
          },
          {
            name: 'Japan',
            year: '2002',
            gdp: 4115116279069.77
          },
          {
            name: 'Japan',
            year: '2003',
            gdp: 4445658071221.86
          },
          {
            name: 'Japan',
            year: '2004',
            gdp: 4815148854362.11
          },
          {
            name: 'Japan',
            year: '2005',
            gdp: 4755410630912.14
          },
          {
            name: 'Japan',
            year: '2006',
            gdp: 4530377224970.4
          },
          {
            name: 'Japan',
            year: '2007',
            gdp: 4515264514430.57
          },
          {
            name: 'Japan',
            year: '2008',
            gdp: 5037908465114.48
          },
          {
            name: 'Japan',
            year: '2009',
            gdp: 5231382674593.7
          },
          {
            name: 'Japan',
            year: '2010',
            gdp: 5700098114744.41
          },
          {
            name: 'Japan',
            year: '2011',
            gdp: 6157459594823.72
          },
          {
            name: 'Japan',
            year: '2012',
            gdp: 6203213121334.12
          },
          {
            name: 'Japan',
            year: '2013',
            gdp: 5155717056270.83
          },
          {
            name: 'Japan',
            year: '2014',
            gdp: 4850413536037.84
          }
        ]
      }
    }
  },
  {
    url: '/api/publicKey',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: 'success',
        data: {
          mockServer: true,
          publicKey:
            'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBT2vr+dhZElF73FJ6xiP181txKWUSNLPQQlid6DUJhGAOZblluafIdLmnUyKE8mMHhT3R+Ib3ssZcJku6Hn72yHYj/qPkCGFv0eFo7G+GJfDIUeDyalBN0QsuiE/XzPHJBuJDfRArOiWvH0BXOv5kpeXSXM8yTt5Na1jAYSiQ/wIDAQAB'
        }
      }
    }
  },
  {
    url: '/api/login',
    method: 'post',
    response: (config) => {
      const { username } = config.body
      const accessToken = accessTokens[username]
      if (!accessToken) {
        return {
          code: 500,
          msg: '帐户或密码不正确。'
        }
      }
      return {
        code: 200,
        msg: 'success',
        data: {
          accessToken
        }
      }
    }
  },
  {
    url: '/api/register',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: '模拟注册成功'
      }
    }
  },
  {
    url: '/api/userInfo',
    type: 'get',
    response(config) {
      const { accessToken } = config.body
      let permissions = ['admin']
      let username = 'admin'
      if (accessToken === 'admin-accessToken') {
        permissions = ['admin']
        username = 'admin'
      }
      if (accessToken === 'editor-accessToken') {
        permissions = ['editor']
        username = 'editor'
      }
      if (accessToken === 'test-accessToken') {
        permissions = ['admin', 'editor']
        username = 'test'
      }
      return {
        code: 200,
        msg: 'success',
        data: {
          permissions,
          username,
          'avatar|1': [
            'https://i.gtimg.cn/club/item/face/img/2/15922_100.gif',
            'https://i.gtimg.cn/club/item/face/img/8/15918_100.gif'
          ]
        }
      }
    }
  },
  {
    url: '/api/logout',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: 'success'
      }
    }
  }
]
