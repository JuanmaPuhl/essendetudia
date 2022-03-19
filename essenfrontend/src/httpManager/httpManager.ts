import axios from "axios"

const baseUrl = "http://localhost:1337"

declare type OptionalParameters = {
  headers?: { [key: string]: string }
  body?: any
}

export const get = (
  endpoint: string,
  optionalParameters: OptionalParameters,
) => {
  const token = process.env.REACT_APP_STRAPI_TOKEN
  console.log("token", token)
  return axios.get(`${baseUrl}${endpoint}`, {
    headers: { Authorization: "bearer " + token },
  })
}
