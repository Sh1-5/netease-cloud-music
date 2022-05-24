import request from '@/network/request'

// 歌曲详情
export const getSongDetail = (ids) => {
  return request({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

// 歌词
export const getLyric = (id) => {
  return request({
    url: 'lyric',
    params: {
      id
    }
  })
}
