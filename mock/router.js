const data = [
  {
    path: '/dashboard',
    key: 'dashboard',
    children: [
      {
        path: 'workplace',
        key: 'workplace'
      },
      {
        path: 'resource',
        key: 'resource'
      }
    ]
  },
  {
    path: '/comp',
    name: '组件库',
    children: [
      {
        path: 'btn',
        name: '按钮组件'
      },
      {
        path: 'form',
        name: '表单组件'
      },
      {
        path: 'locale',
        name: '国际化'
      },
      {
        path: 'echarts',
        name: '图表组件'
      }
    ]
  },
  {
    path: '/multi',
    name: '多级菜单',
    children: [
      {
        path: 'one',
        name: '一级菜单'
      },
      {
        path: 'two',
        name: '二级菜单',
        children: [
          {
            path: 'page-one',
            name: '2-1菜单'
          },
          {
            path: 'page-two',
            name: '2-2菜单'
          }
        ]
      }
    ]
  },
  {
    path: '/error',
    name: '错误页面',
    children: [
      {
        path: '404',
        name: '404页面'
      },
      {
        path: '500',
        name: '500页面'
      }
    ]
  }
];
export default [
  {
    url: '/api/menu/navigate',
    type: 'post',
    response() {
      return {
        code: 200, msg: 'success', data: data
      };
    }
  }
];
