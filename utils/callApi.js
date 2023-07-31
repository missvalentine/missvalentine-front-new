import Axios from 'axios'
import { baseUrl } from '../constant/projectSetting'
import reduxStore from '../redux/store'

const axios = Axios.create({})

const myReduxStore = reduxStore()
const { store } = myReduxStore
store.subscribe(getAuthToken)

function getAuthToken() {
  let token = store.getState().authState?.authToken
  axios.defaults.headers.common['Authorization'] = token
}

// Axios Interceptors Configuration
axios.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json'
    config.headers['Accept'] = 'application/json'

    const token = store.getState()?.authState?.authToken
    console.log('[callApi]token', token)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
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
    console.log('Authorization callApi :', options?.headers?.Authorization)
    let headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }

    if (options && options.headers) {
      headers = { ...headers, ...options.headers }
    }
    console.log('[Function Call]', method, url, baseUrl, data, headers)

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
    console.log('[Function Call | Error]', err)
    return err
  }
}
