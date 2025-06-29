import axios, { AxiosInstance } from 'axios'

const COMMON_URL = 'http://localhost:3010/api'

const instance: AxiosInstance = axios.create({
  baseURL: COMMON_URL,
  timeout: 10000,
})

instance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export interface IListOps {
  url: string
  startNum: number
  pageSize: number
  params?: any
}

export const apiGet = ({ url, startNum, pageSize, params }: IListOps) => {
  return instance.get(`/${url}`, {
    params: {
      startNum,
      pageSize,
      ...params,
    },
  })
}
