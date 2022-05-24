const exp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export default function parseLyric(lyric) {
  const lineStringArr = lyric.split('\n')
  const lyricArr = []
  for (let item of lineStringArr) {
    if (item) {
      const res = exp.exec(item)
      if (!res) continue
      const time1 = res[1] * 60 * 1000
      const time2 = res[2] * 1000
      const time3 = res[3].length === 3 ? res[3] * 1 : res[3] * 10
      const time = time1 + time2 + time3
      const content = item.replace(exp, '').trim()
      const itemObj = { time, content }
      lyricArr.push(itemObj)
    }
  }
  return lyricArr
}
