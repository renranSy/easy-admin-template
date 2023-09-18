import { request } from '@/utils/request/axios'

/** 登录 */
export const login = (data: { username: string; password: string }) => {
  return request<{ token: string }>('/admin/login', {
    method: 'post',
    data
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
