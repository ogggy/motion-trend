import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='group'>
          <img
              src={require('../../assets/img/logo-img/logo-icon.png')}
              className='logo-icon'
          />
          <a className='group-item' href='#'>Discover</a>
          <a className='group-item' href='#'>Job</a>
        </div>
        <div className='group'>
          <input
            type={'text'}
            className='textfield'
            placeholder='Search for motion trend......'
          />
        </div>
        <div className='group'>
          <img
            className='group-item search-icon'
            src={require('../../assets/icon/search-icon/white-search-icon.png')}
          />
          <a className='group-item' href='#'>Login</a>
          <a className='group-item' href='#'>Sign Up</a>
        </div>
        
    </div>
  )
}

export default Header