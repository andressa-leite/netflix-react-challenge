import './Nav.css'
import { useState, useEffect } from 'react';

function Nav() {
  const [show, handleShow] = useState(false)

  const transitionNavbar = () => {
    if(window.scrollY > 100) {
      handleShow(true)
    } else { 
      handleShow(false)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className="nav_contets">
            <img 
                className='nav_logo'
                src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
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