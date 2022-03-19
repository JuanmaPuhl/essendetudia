import axios, { AxiosRequestConfig } from "axios"

const { REACT_APP_STRAPI_BASE_URL, REACT_APP_STRAPI_TOKEN } = process.env

declare type OptionalParameters = {
  headers?: { [key: string]: string }
  body?: any
}
export const api = axios.create({ baseURL: `${REACT_APP_STRAPI_BASE_URL}/api` })
api.interceptors.request.use((config: AxiosRequestConfig) => {
  return new Promise((resolve) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${REACT_APP_STRAPI_TOKEN}`,
    }
    resolve(config)
  })
})

export const get = (
  endpoint: string,
  optionalParameters?: OptionalParameters,
) => {
  return api.get(endpoint)
}

export const getImageUrl = (imageUrl: string) => {
  return `${REACT_APP_STRAPI_BASE_URL}${imageUrl}`
}
