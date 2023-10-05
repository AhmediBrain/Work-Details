import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuItem } from './MenuItem'

function Dropdown() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => {
        setClick(!click);
    }

  return (
    <div>
        <ul onClick={handleClick} className={click ? 'my-drop-menu clicked' : 'my-drop-menu'}>
            {MenuItem.map ((item, index) => {
                return (
                    <li key={index}>
                        <Link 
                        className={item.cName} 
                        to={item.path} 
                        onClick={() => setClick(false)}>{item.title}</Link>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Dropdown