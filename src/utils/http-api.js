import axios from 'axios'

// this function is for tidy up the response from axios
const dataAdapter = axiosResponse => {
  const response = axiosResponse.response || axiosResponse
  return {
    status: response.status,
    body: response.data
  }
}

// We combine the axios future promise with callback function
const get = (url, success, fail) => {
  axios.get(url)
    .then(response => success(dataAdapter(response)))
    .catch(response => {
      fail(dataAdapter(response))
    })
}

const post = (url, success, fail, data) => {
  axios.post(url, data)
    .then(response => success(dataAdapter(response)))
    .catch(response => fail(dataAdapter(response)))
}

const put = (url, success, fail, data) => {
  axios.put(url, data)
    .then(response => success(dataAdapter(response)))
    .catch(response => fail(dataAdapter(response)))
}

const del = (url, success, fail) => {
  axios.delete(url)
    .then(response => success(dataAdapter(response)))
    .catch(response => fail(dataAdapter(response)))
}

export default {
  get,
  post,
  put,
  del
}
