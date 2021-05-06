import httpApi from './utils/http-api'
import './api-mock/index'

// Start of API Mock Get

httpApi.get('/api/test-without-query-params',response => {
  console.log('success: ', response)
}, response => {
  console.log('Fail: ', response)
})

httpApi.get('/api/test-with-query-params?searchTerm=samsung',response => {
  console.log('success: ', response)
}, response => {
  console.log('Fail: ', response)
})

httpApi.get('/api/test-fail',response => {
  console.log('success: ', response)
}, response => {
  console.log('Fail: ', response)
})

// End of API Mock Get

// Start of API Mock Post

const requestParam = {
  username: 'username',
  password: '123'
}
httpApi.post('/api/test-with-request-params',response => {
  console.log('success: ', response)
}, response => {
  console.log('Fail: ', response)
}, requestParam)

httpApi.post('/api/test-with-request-params-and-query-params?searchTerm=samsung',response => {
  console.log('success: ', response)
}, response => {
  console.log('Fail: ', response)
}, requestParam)

// End of API Mock Post

const requestParamPut = {
  name: 'name edit',
  address: 'address edit'
}

httpApi.put('/api/test-with-request-params',response => {
  console.log('success: ', response)
}, response => {
  console.log('Fail: ', response)
}, requestParamPut)


httpApi.del('/api/test-delete',response => {
  console.log('success: ', response)
}, response => {
  console.log('Fail: ', response)
})





