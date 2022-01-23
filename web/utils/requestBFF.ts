// http.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const service = axios.create({
  baseURL: '/bff',
  // baseURL: '/',
  withCredentials: false,
  timeout: 6000
})

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  async (error) => {
    console.log(error)
    return await Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  async (response: AxiosResponse) => {
    return await Promise.resolve(response)
  },
  async (error) => {
    console.error('响应拦截器发生错误')
    return await Promise.reject(error)
  }
)

export default service
