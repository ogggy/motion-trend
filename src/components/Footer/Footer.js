import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer1'>
            <div className='left'>
                <span className='contact'>
                    Contact
                </span>
                <span className='email'>
                    motiontrend@test.com
                </span>
            </div>
            <div className='right'>
                <span className='copyright'>
                    @Motiontrend. All rights reserved.
                </span>
                <img 
                    className='social-icon'
                    src={require('../../assets/icon/instagram-icon/sns-icon-1.png')}
                />
                <img 
                    className='social-icon'
                    src={require('../../assets/icon/fb-icon/sns-icon-2.png')}
                />
                <img 
                    className='social-icon'
                    src={require('../../assets/icon/youtube-icon/sns-icon-3.png')}
                />
            </div>
        </div>

        <div className='footer2'>
            <div className='left'>
                <span>
                    Introduction
                </span>
                <span>
                    Terms of service
                </span>
                <span>
                    Language
                </span>
                <img
                    className='dropdown'
                    src={require('../../assets/icon/dropdown-icon/language-down-arrow-icon.png')}
                />
                <span>Customer Service</span>
            </div>
            <div className='right'>
                <img 
                    className='footer-logo'
                    src={require('../../assets/icon/logo-icon-footer/black-logo-icon.png')}
                />
            </div>
        </div>
    </div>
  )
}

export default Footer