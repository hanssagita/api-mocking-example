export default [
  {
    url: '/api/test-without-query-params',
    method: 'GET',
    code: 200,
    queryParams: {},
    response: {
      data: 'Mock comes from Get Method without query params'
    }
  },
  {
    url: '/api/test-with-query-params',
    method: 'GET',
    code: 200,
    queryParams: {
      searchTerm: 'samsung'
    },
    response: {
      data: 'Mock comes from Get Method with query params'
    }
  },
  {
    url: '/api/test-fail',
    method: 'GET',
    code: 400,
    queryParams: {},
    response: {
      data: 'Mock comes from Get Method with fail handler'
    }
  },
  {
    url: '/api/test-with-request-params',
    method: 'POST',
    code: 200,
    params: {
      username: 'username',
      password: '123'
    },
    response: {
      data: 'Mock comes from Post Method with request params'
    }
  },
  {
    url: '/api/test-with-request-params-and-query-params',
    method: 'POST',
    code: 200,
    queryParams: {
      searchTerm: 'samsung'
    },
    params: {
      username: 'username',
      password: '123'
    },
    response: {
      data: 'Mock comes from Post Method with request params and query params'
    }
  },
  {
    url: '/api/test-with-request-params',
    method: 'PUT',
    code: 200,
    params: {
      name: 'name edit',
      address: 'address edit'
    },
    response: {
      data: 'Mock comes from PUT Method with request params'
    }
  },
  {
    url: '/api/test-delete',
    method: 'DELETE',
    code: 200,
    response: {
      data: 'Mock comes from DELETE Method'
    }
  }
]
