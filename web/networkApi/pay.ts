import requestBFF from '@/utils/requestBFF'
import request from '@/utils/request'
export async function testApi1 () {
  return requestBFF({
    url: '/test/1',
    method: 'get'
  })
}

export async function testApi2 () {
  return request({
    url: '/test/2',
    method: 'get'
  })
}
