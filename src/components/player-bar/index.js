import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import {
  changeSequenceAction,
  getCurrentSongAction,
  changeCurrentSongAndIndex,
  changeCurrentLyricIndex
} from './store/actionCreators'

import { PlayerBarWrapper, Control, PlayInfo, Operator } from './style'
import { Slider } from 'antd'

import { getSizeImage, formatMinuteSecond, getPlaySong } from '@/utils/format'

const PlayerBar = memo(() => {
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChangingProgress, setIsChangingProgress] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const { currentSong, sequence, playList, lyricList, currentLyricIndex } =
    useSelector((state) => {
      return {
        currentSong: state.getIn(['playerBar', 'currentSong']),
        sequence: state.getIn(['playerBar', 'sequence']),
        playList: state.getIn(['playerBar', 'playList']),
        lyricList: state.getIn(['playerBar', 'lyricList']),
        currentLyricIndex: state.getIn(['playerBar', 'currentLyricIndex'])
      }
    }, shallowEqual)
  const dispatch = useDispatch()

  const audioRef = useRef()
  useEffect(() => {
    dispatch(getCurrentSongAction(1418131335))
  }, [dispatch])
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true)
      })
      .catch(() => {
        setIsPlaying(false)
      })
  }, [currentSong])

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
    const currentTime = e.target.currentTime * 1000
    setCurrentTime(currentTime)
    if (!isChangingProgress) {
      setProgress((currentTime / duration) * 100)
    }

    let currentLyricIndex = 0
    for (let i = 0; i < lyricList.length; i++) {
      const item = lyricList[i]
      if (item.time > currentTime) {
        currentLyricIndex = i - 1
        if (currentLyricIndex < 0) {
          currentLyricIndex = 0
        }
        break
      }
    }
    dispatch(changeCurrentLyricIndex(currentLyricIndex))
  }
  const changeSequence = () => {
    let nextSequence = sequence + 1
    if (nextSequence > 2) {
      nextSequence = 0
    }
    dispatch(changeSequenceAction(nextSequence))
  }
  const changeMusic = (isNext) => {
    if (playList.length > 1) {
      dispatch(changeCurrentSongAndIndex(isNext))
    } else {
      sliderAfterChange(0)
    }
  }
  const onEnded = () => {
    if (playList.length < 2) {
      setIsPlaying(false)
      setCurrentTime(0)
      setProgress(0)
    }
    switch (sequence) {
      case 2:
        audioRef.current.play()
        break
      default:
        dispatch(changeCurrentSongAndIndex(1))
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

      if (!isPlaying) {
        playMusic()
      }
    },
    [duration, isPlaying, playMusic]
  )

  return (
    <PlayerBarWrapper className="sprite_player">
      <div className="lyric">
        <h1>
          {lyricList[currentLyricIndex] && lyricList[currentLyricIndex].content}
        </h1>
      </div>
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button
            className="btn prev sprite_player"
            onClick={() => changeMusic(0)}
          ></button>
          <button
            className="btn play sprite_player"
            onClick={() => playMusic()}
          ></button>
          <button
            className="btn next sprite_player"
            onClick={() => changeMusic(1)}
          ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to={'/song?' + currentSong.id}>
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
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
        <Operator sequence={sequence}>
          <div className="left">
            <button className="btn favor sprite_player"></button>
            <button className="btn share sprite_player"></button>
          </div>
          <div className="right sprite_player">
            <button className="btn volume sprite_player"></button>
            <button
              className="btn loop sprite_player"
              onClick={() => changeSequence()}
            ></button>
            <button className="btn playlist sprite_player"></button>
            <span>{playList.length}</span>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={onEnded} />
    </PlayerBarWrapper>
  )
})

PlayerBar.displayName = 'PlayerBar'

export default PlayerBar
