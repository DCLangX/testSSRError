import request from '@/utils/request'
export async function testApi3 () {
  return request({
    url: '/test/3',
    method: 'get'
  })
}
