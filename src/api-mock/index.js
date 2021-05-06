import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

// Import all of your API Mock modules files
import routes from './modules/routes'
// Example: import otherRoutes from './modules/other-routes'

// Combine all of your API Mock Modules here
const apiRoutes = [
  ...routes,
  // Example: ...otherRoutes
]

// List name Axios Mock Adapter methods
const methodsMap = {
  GET: 'onGet', // Mock any GET request
  POST: 'onPost', // Mock any POST request
  PUT: 'onPut', // Mock any PUT request
  DELETE: 'onAny' // Mock onAny can be use for DELETE or PATCH request
}


// Generate Query Params from object we define in routes file
// Example Has queryParams value
// Input: { itemPerPage: 10, page: 2, searchTerm: 'samsung' }
// Output: ?itemPerPage=10&page=2&searchTerm=samsung
// Example hasn't queryParams
// Input: null || {} || undefined
// Output: ''
const generateQueryParams = (queryParams) => {
  const queryParamsString = [];
  for (const key in queryParams) {
    if (queryParams.hasOwnProperty(key)) {
      queryParamsString.push(encodeURIComponent(key) +
        "=" + encodeURIComponent(queryParams[key]));
    }
  }
  return queryParamsString.length > 0 ?
    '?' + queryParamsString.join("&") : ''
}

// Axios Mock Adapter let us to delay all the response
// Our default delay response is 0 (None), but if you want to delay it you can change it
const delayResponse = 0 // In millisecond
// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios, { delayResponse })
// It's usually used for test loading state or develop the skeleton template

// Loop all the apiRoutes we define and creating all mock API
apiRoutes.forEach(route => {
  let queryParams = ''
  if (route.queryParams) {
    queryParams = generateQueryParams(route.queryParams)
  }
  mock[methodsMap[route.method]](
    `${route.url}${queryParams}`,
    {...route.params})
    .reply(route.code, route.response)
})

// You can check di console.log in your browser,
// To make sure API Mock created successfully your application
console.log('success creating mock')





