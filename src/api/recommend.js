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

// 热门推荐
export const getHotRecommend = (limit = 30) => {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

// 新碟上架
export const getNewAlbum = ({
  limit = 50,
  offset = 0,
  area = 'ALL',
  type = 'new',
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1
}) => {
  return request({
    url: '/top/album',
    params: {
      limit,
      offset,
      area,
      type,
      year,
      month
    }
  })
}

// 榜单
export const getPlayListDetail = (id) => {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
