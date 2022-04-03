import axios, { AxiosRequestConfig } from "axios"
import qs from "qs"

const { REACT_APP_STRAPI_BASE_URL, REACT_APP_STRAPI_TOKEN } = process.env

declare type OptionalParameters = {
  headers?: { [key: string]: string }
  body?: { [key: string]: unknown }
  fieldsToFetch?: string[]
  pagination?: {
    page: number
    pageSize: number
  }
}
const api = axios.create({ baseURL: `${REACT_APP_STRAPI_BASE_URL}/api` })
api.interceptors.request.use((config: AxiosRequestConfig) => {
  return new Promise((resolve) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${REACT_APP_STRAPI_TOKEN}`,
    }
    resolve(config)
  })
})

const fetchSpecifiedFields = (fields: string[], endpoint: string) => {
  const fieldsToShow = qs.stringify(
    {
      fields: fields,
    },
    {
      encodeValuesOnly: true,
    },
  )
  endpoint.indexOf("?") === -1
    ? (endpoint += `?${fieldsToShow}`)
    : (endpoint += `&${fieldsToShow}`)
  return endpoint
}

export const get = (
  endpoint: string,
  optionalParameters?: OptionalParameters,
) => {
  if (optionalParameters?.fieldsToFetch) {
    endpoint = fetchSpecifiedFields(optionalParameters.fieldsToFetch, endpoint)
  }
  return api.get(endpoint)
}

export const getImageUrl = (imageUrl: string) => {
  return `${REACT_APP_STRAPI_BASE_URL}${imageUrl}`
}
