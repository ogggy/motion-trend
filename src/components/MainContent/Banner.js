import React from 'react'
import './Banner.css'
import LiveVideo from './LiveVideo'
import TutorialVideo from './TutorialVideo'


const Banner = () => {
  return (
    <div className='banner'>
      <div className='tutorial-content'>
        <span className='tutorial-label'>
          TUTORIAL
        </span>
        <br/>
        <span className='tutorial-description'>
          Let's look at 7 ways
          to use motion trend
          more effectively
          in the first tutorial.
        </span>
        <br/>
        <button className='watch-button'>
          <span>
          watch now
          </span>
        </button>
      </div>
    
      <LiveVideo />

      <div className='tutorial-video-list'>
        <TutorialVideo />
        <TutorialVideo />
        <TutorialVideo />
      </div>

    </div>
  )
}

export default Banner