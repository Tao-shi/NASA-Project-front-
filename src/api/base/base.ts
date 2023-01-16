import { httpNoAuth } from ".."
import { usersignInPayload, usersignUpPayload } from "./base-interface"

export const signup = (data: usersignUpPayload) => {
  return httpNoAuth.post('/signup', data)
}

export const signin = (data: usersignInPayload) => {
  return httpNoAuth.post('/signin', data)
}
