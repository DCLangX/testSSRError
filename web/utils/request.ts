// http.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Notify } from 'vant'

const service = axios.create({
  baseURL: '/api',
  // baseURL: '/',
  // 是否跨站点访问控制请求
  withCredentials: false,
  timeout: 6000
})

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 获取token，并将其添加至请求头中
    const token = ''
    if (token) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unnecessary-type-assertion
      config.headers!.Authorization! = token
    }
    return config
  },
  async (error) => {
    // 错误抛到业务代码
    console.log(error) // for debug
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
    Notify({ type: 'danger', message: '错误' })
    console.dir(error)
    return await Promise.reject(error)
  }
)

export default service
