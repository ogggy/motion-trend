import React from 'react'
import './Recommend.css'

const Recommend = () => {
  return (
    <div className='recommend'>

            <div className='left-recommend'>
                <span className='left-item'>
                    Motion trend pick
                </span>
                
                <span className='left-item'>
                    Latest
                </span>
                <span className='left-item'>
                    Recommended
                </span>
            </div>

            <div className='right-recommend'>
                <span className='right-item'>
                    Selection criteria
                </span>
            </div>            
    </div>
  )
}

export default Recommend