import axios from 'axios'
import { BASE_URL_POST, BASE_URL_TAG, BASE_URL_USER  }  from '@/feature/constants'

export const apiPost = axios.create({
  baseURL: BASE_URL_POST,
})

apiPost.interceptors.response.use(
  (res) => res.data,
  (error) => Promise.reject(error)
)


export const apiTag = axios.create({
  baseURL: BASE_URL_TAG,
})

apiTag.interceptors.response.use(
  (res) => res.data,
  (error) => Promise.reject(error)
)

export const apiUser = axios.create({
  baseURL: BASE_URL_USER,

})

apiUser.interceptors.response.use(
  (res) => res.data,
  (error) => Promise.reject(error)
)
