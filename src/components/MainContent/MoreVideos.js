import React from 'react'
import './MoreVideos.css'
import VideoItem from './VideoItem'

const MoreVideos = () => {
  return (
    <div className='more-videos'>
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
    </div>
  )
}

export default MoreVideos