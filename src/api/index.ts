import { request } from '@/utils/request/axios'

/** 登录 */
export const login = (data: API.LoginParam) => {
  return request<API.LoginResponse>('/admin/login', {
    method: 'post',
    data
  })
}

/** 获取管理员信息 */
export const getUserInfo = () => {
  return request('/admin/get', {
    method: 'get'
  })
}

/** 获取工作台数据 */
export const getWorkbench = () => {
  return request<API.WorkBenchData>('/getWorkbench', {
    method: 'get'
  })
}

/** 获取资源推荐数据 */
export const getResource = () => {
  return request<API.Resource>('/getResource', {
    method: 'get'
  })
}
