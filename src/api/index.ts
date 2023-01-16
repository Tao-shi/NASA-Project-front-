import axios from "axios";
import { REACT_APP_BASE_URL } from "../utils/appdetails";
// import dayjs from "dayjs";
// import { store } from '../core/store'
// import jwt_decode from "jwt-decode";
// import { loginUser } from "../core/actions/useractions/useractions";
import { handleUnAuthorized } from "./requesterror";

// export const REACT_APP_BASE_URL = "https://staging-api.frontedge.io/api/core/v1"


/**
 * Axios instance with auth
 */
export const http = axios.create({
  baseURL: REACT_APP_BASE_URL,
  // timeout: 5000,
  // headers: {
  //   "Content-type": "application/json",
  //   "Access-Control-Allow-Origin": "*"
  // }
})

/**
 * Axios instance without auth
 */
export const httpNoAuth = axios.create({
  baseURL: REACT_APP_BASE_URL,
  // timeout: 5000,
  // headers: {
  //   "Content-type": "application/json",
  //   "Access-Control-Allow-Origin": "*"
  // }
})

/**
 * Set token headers
 * @param token string
 */
export const setAuthToken = (token: string | null) => {
  if (token !== null) {
    http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete http.defaults.headers.common["Authorization"]
  }
}


/**
 * Handle Authrizatin failed
 */
http.interceptors.response.use(undefined, (error: { response: undefined; }) => {
  if (error.response === undefined) {
    handleUnAuthorized()
  }

  return Promise.reject(error)
})