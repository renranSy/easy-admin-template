import { request } from '@/utils/request/axios'

/** 登录 */
export const login = (data: FormData) => {
  return request<{ token: string }>('/admin/login', {
    method: 'post',
    data
  })
}
/** 获取数据 */
export const getData = () => {
  return request<{ year: string; gdp: string; name: string }[]>('/data/get', {
    method: 'get'
  })
}
