import { HttpMethod } from "types"

export async function baseService<T>(path: string, method?:HttpMethod, body?: Object, headers?: Object ):Promise<T>{
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  }
  const response = await fetch(path, options)
  if (response.ok) return response.json()
  throw response
}