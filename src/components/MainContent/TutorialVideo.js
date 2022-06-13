import React from 'react'
import  './TutorialVideo.css'

const TutorialVideo = () => {
  return (
    <div className='tutorial-video'>
        <img
            className='tutorial-video-img'
            src={require('../../assets/img/tutorial-img/tutorial-img-2.png')}
        />
        <span className='tutorial-label-2'>Tutorial</span>
        <span className='tutorial-description-2'>
            A tutorial video with Motion Trend. Let's Learn
            Motion Trends.
        </span>

        <img 
            className='like-icon-2'
            src={require('../../assets/icon/like-icon/like-icon.png')}
        />
        <span className='like-number-2'>18</span>
        <img 
            className='view-icon-2'
            src={require('../../assets/icon/view-icon/view-icon.png')}
        />
        <span className='view-number-2'>19</span>
    </div>
  )
}

export default TutorialVideo