import request from '@/network/request'

// 轮播图
export const getBanner = (type = 0) => {
  return request({
    url: '/banner',
    params: {
      type
    }
  })
}
