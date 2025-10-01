import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { AxiosRequestConfig } from 'axios'

const configToAxios: AxiosRequestConfig = {
  baseURL: 'http://127.0.0.1:8001/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 10000, //10s
}

const api: AxiosInstance = axios.create(configToAxios)

export default api
