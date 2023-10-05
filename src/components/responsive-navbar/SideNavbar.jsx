import React, { useState } from 'react'
//import portfolio from '../images/portfolio.png'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown';
//import "./main.css"
 

function SideNavbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }

  const closeMobileMenu = () => {
    setClick(false);
  }

  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  }

  const onMouseLeave = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  }

  return (
    <nav>
        <div>
          {/* <img className='port-img' style={{width: '55px', height: '55px'}} src={portfolio} alt="logo"></img> */}
        </div>
        <div className='my-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas FaBars'}></i>
        </div>
        <ul className={click ? 'my-nav-menu active' : 'my-nav-menu'}>         
            <li>
              <Link to='/' className='my-nav-links' 
              onClick={closeMobileMenu}> My Home </Link>
            </li>
            <li>
              <Link to='/profile' className='my-nav-links' 
              onClick={closeMobileMenu}> My Profile </Link>
            </li>
            <li onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave}>
              <Link to='/projects' className='my-nav-links' 
              onClick={closeMobileMenu}> My Projects <i className='fas fa-caret-down'></i> </Link>
              {dropdown && (<Dropdown></Dropdown>)}
            </li>
            <li>
              <Link to='/contact' className='my-nav-links' 
              onClick={closeMobileMenu}> My Contact </Link>
            </li>
        </ul>
    </nav>
  )
}

export default SideNavbar