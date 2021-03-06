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
  filters?: any
}
const api = axios.create({ baseURL: `${REACT_APP_STRAPI_BASE_URL}/api` })
api.interceptors.request.use((config: AxiosRequestConfig) => {
  return new Promise((resolve) => {
    config.headers = {
      ...config.headers,
      "access-control-allow-origin": "*",
      Authorization: `Bearer ${REACT_APP_STRAPI_TOKEN}`,
    }
    resolve(config)
  })
})
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log("error", error)
  },
)

const fetchSpecifiedFields = (fields: string[], endpoint: string) => {
  const fieldsToShow = qs.stringify(
    {
      fields,
    },
    {
      encodeValuesOnly: true,
    },
  )
  console.log("fieldsToShow", fieldsToShow)
  return appendToEndpoint(endpoint, fieldsToShow)
}

const paginateResults = ({
  pagination,
  endpoint,
}: {
  pagination: { page: number; pageSize: number }
  endpoint: string
}) => {
  const pages = qs.stringify(
    {
      pagination,
    },
    {
      encodeValuesOnly: true,
    },
  )
  return appendToEndpoint(endpoint, pages)
}

const appendToEndpoint = (endpoint: string, data: string) => {
  endpoint.indexOf("?") === -1
    ? (endpoint += `?${data}`)
    : (endpoint += `&${data}`)
  return endpoint
}

export const get = (
  endpoint: string,
  optionalParameters?: OptionalParameters,
) => {
  if (optionalParameters?.fieldsToFetch) {
    endpoint = fetchSpecifiedFields(optionalParameters.fieldsToFetch, endpoint)
  }
  if (optionalParameters?.pagination) {
    endpoint = paginateResults({
      pagination: optionalParameters.pagination,
      endpoint,
    })
  }
  if (optionalParameters?.filters) {
    endpoint = appendToEndpoint(
      endpoint,
      qs.stringify(optionalParameters.filters, {
        encodeValuesOnly: true,
      }),
    )
  }
  return api.get(endpoint)
}

export const getImageUrl = (imageUrl?: string) => {
  if (!imageUrl) return ""
  if (imageUrl.indexOf("https://") === -1)
    return `${REACT_APP_STRAPI_BASE_URL}${imageUrl}`
  return imageUrl
}
