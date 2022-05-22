import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { getCurrentSongAction } from './store/actionCreators'

import { PlayerBarWrapper, Control, PlayInfo, Operator } from './style'
import { Slider } from 'antd'

import { getSizeImage, formatMinuteSecond, getPlaySong } from '@/utils/format'

const PlayerBar = memo(() => {
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChangingProgress, setIsChangingProgress] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const { currentSong } = useSelector((state) => {
    return {
      currentSong: state.getIn(['playerBar', 'currentSong'])
    }
  }, shallowEqual)
  const dispatch = useDispatch()

  const audioRef = useRef()
  useEffect(() => {
    dispatch(getCurrentSongAction(1359818052))
  }, [dispatch])

  const picUrl = (currentSong.al && currentSong.al.picUrl) || ''
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手'
  const duration = currentSong.dt || 0
  const showCurrentTime = formatMinuteSecond(currentTime)
  const showDuration = formatMinuteSecond(duration)

  const playMusic = () => {
    if (!isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
    setIsPlaying(!isPlaying)
  }
  const timeUpdate = (e) => {
    setCurrentTime(e.target.currentTime * 1000)
    if (!isChangingProgress) {
      setProgress((currentTime / duration) * 100)
    }
  }
  const sliderChange = useCallback((value) => {
    setIsChangingProgress(true)
    setProgress(value)
  }, [])
  const sliderAfterChange = useCallback(
    (value) => {
      audioRef.current.currentTime = ((value / 100) * duration) / 1000
      setCurrentTime((value / 100) * duration)
      setIsChangingProgress(false)
    },
    [duration]
  )

  return (
    <PlayerBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="btn prev sprite_player"></button>
          <button
            className="btn play sprite_player"
            onClick={() => playMusic()}
          ></button>
          <button className="btn next sprite_player"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="#">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <a className="song-name" href="">
                {currentSong.name}
              </a>
              <a className="singer-name" href="">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider
                defaultValue={0}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="btn favor sprite_player"></button>
            <button className="btn share sprite_player"></button>
          </div>
          <div className="right sprite_player">
            <button className="btn volume sprite_player"></button>
            <button className="btn loop sprite_player"></button>
            <button className="btn playlist sprite_player"></button>
          </div>
        </Operator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={timeUpdate}
        src={getPlaySong(currentSong.id)}
      />
    </PlayerBarWrapper>
  )
})

PlayerBar.displayName = 'PlayerBar'

export default PlayerBar
