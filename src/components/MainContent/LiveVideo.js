import React from 'react'
import './LiveVideo.css'

const LiveVideo = () => {
  return (
    <div className='live-video'>
        <img 
            className='live-video-img'
            src={require('../../assets/img/tutorial-img/tutorial-img-1.png')}
        />
        <img 
            className='live-icon'
            src={require('../../assets/icon/live-icon/live-box.png')}
        />
        <img 
            className='play-icon'
            src={require('../../assets/icon/play-icon/play-icon.png')}
        />
        <span className='live-video-length'>
            02:33
        </span>
    </div>
  )
}

export default LiveVideo