import Axios from 'axios'
import { baseUrl } from '../constant/projectSetting'

const axios = Axios.create({})
// Axios Interceptors Configuration
axios.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json'
    config.headers['Accept'] = 'application/json'
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

export const callApi = async ({ method = 'get', url, data, options }) => {
  try {
    console.log('callApi', baseUrl, url, data)
    // const auth = JSON.parse(localStorage.getItem('auth'));
    let headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    // if (auth) {
    //   const { user, token } = auth;
    //   headers = { ...headers, Authorization: `Bearer ${token}` };
    // }
    if (options && options.headers) {
      headers = { ...headers, ...options.headers }
    }
    const response = await axios({
      method,
      url,
      baseURL: baseUrl,
      data,
      headers: headers,
    })
      .then((response) => {
        return response
      })
      .catch((err) => {
        console.log(err)
        return err
      })
    return response
  } catch (err) {
    console.log(err)
    return err
  }
}
