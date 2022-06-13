import React from 'react'
import Banner from './Banner'
import './MainContent.css'
import MoreVideos from './MoreVideos'
import Recommend from './Recommend'
import VideoList from './VideoList'

const MainContent = ({ setModalOpen }) => {
  return (
    <div className='main-content'>
        <Recommend />
        <VideoList setModalOpen={setModalOpen}/>
        <Banner />
        <MoreVideos />
    </div>
  )
}

export default MainContent