import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import cache from '@/utils/cache'
import config from '@/config/net.config'

const { baseURL } = config

export const AxiosInstance = axios.create({
  baseURL: baseURL
})

export const request = <T>(url: string, config: AxiosRequestConfig): Promise<API.Response<T>> => {
  return new Promise((resolve, reject) => {
    AxiosInstance.request({
      url,
      headers: {
        Authorization: cache.get('token') || ''
      },
      ...(config || {})
    })
      .then((response: AxiosResponse<API.Response<T>>) => {
        resolve(response.data)
      })
      .catch((error: AxiosError<API.Response<T>>) => {
        if (error.response !== undefined) {
          resolve(error.response.data)
        }
        reject(error)
      })
  })
}

export const http = {
  get: <T>(url: string, params?: any, config?: AxiosRequestConfig) => {
    return request<T>(url, { method: 'get', params, ...(config || {}) })
  },
  post: <T = null>(url: string, data: any, config?: AxiosRequestConfig) => {
    return request<T>(url, { method: 'post', data, ...(config || {}) })
  },
  put: <T = null>(url: string, id: number, data: any, config?: AxiosRequestConfig) => {
    return request<T>(`${url}/${id}`, { method: `put`, data, ...(config || {}) })
  },
  delete: <T = null>(url: string, id: number, config?: AxiosRequestConfig) => {
    return request<T>(`${url}/${id}`, { method: `delete`, ...(config || {}) })
  }
}
