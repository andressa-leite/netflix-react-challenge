import React from 'react';
import './Nav.css'

function Nav() {
  return (
    <div className='nav'>
        <div className="nav_contets">
            <img 
                className='nav_logo'
                src='https://psfonttk.com/wp-content/uploads/2020/09/netflix-logo.png'
                alt='' 
            />
            <img 
                className='nav_avatar'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
            />
            <h1>This is the Nav</h1>
        </div>
    </div>
  )
}

export default Nav;