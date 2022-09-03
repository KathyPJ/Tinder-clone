import React from 'react';
import './Header.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';



function Header() {
  return (
    <div className='header'>

      <IconButton>
        <AccountCircleIcon fontSize='large' className='header__icon' />
      </IconButton>
      {/* <InstagramIcon fontSize='large' className='header__icon' /> */}

      <img className='header__logo' src={require('./images/Tinder_logo_PNG21.png')} alt='' />
      <IconButton>
        <ForumIcon fontSize='large' className='header__icon' />
      </IconButton>
    </div>
  )
}

export default Header