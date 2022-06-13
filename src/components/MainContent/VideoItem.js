import React from 'react'
import './VideoItem.css'
import '../modal/Modal'
import Modal from '../modal/Modal';

const VideoItem = ({ setModalOpen }) => {

    return (
    <div 
        className='video-item'
        onClick={() => {
            setModalOpen(true)
        }}
    >
        <div className='video-content'>
            <img
                src={require('../../assets/img/ref-img/ref-img-1/ref-img-1.png')}
                className='video-img'
            />
            <img className='tz-icon'
                src={require('../../assets/icon/label-tz/label-tz.png')}
            />
            <span className='video-description'>
            This is the space that
            contains the video......
            </span>
            <span className='video-length'>
                02:33
            </span>
        </div>

        <div className='user-info'>
            <img
                className='user-img'
                src={require('../../assets/img/profile-img/profile-img-1/profile-img-1.png')}
            />
            <span className='user-name'>
                Kim Aeyong
            </span>
            <img 
                className='like-icon'
                src={require('../../assets/icon/like-icon/like-icon.png')}
            />
            <span className='like-number'>
                18
            </span>
            <img 
                className='view-icon'
                src={require('../../assets/icon/view-icon/view-icon.png')}
            />
            <span className='view-number'>
                18
            </span>
        </div>
        
    </div>

  )
}

export default VideoItem