import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import cache from '@/utils/cache'
import config from '@/config/net.config'

const { baseURL } = config

export const AxiosInstance = axios.create({
  baseURL: baseURL
})

export const request = <T = any>(url: string, config: AxiosRequestConfig): Promise<API.Response<T>> => {
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
