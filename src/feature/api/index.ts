import axios from 'axios'
import { API_BASE_URL } from '@/feature/constants'

export const api = axios.create({
  baseURL: API_BASE_URL
})

api.interceptors.response.use(
  (res) => res.data,
  (error) => Promise.reject(error)
)
