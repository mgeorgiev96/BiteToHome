import React from 'react'
import {Link} from 'react-router-dom'

function MenuNavigation() {
    return (
        <div className='navbarMenu'>
            <img className='logo_image' src={'./static/react/images/logo.png'}></img>
            <ul className='navbar_menu'>
                <li><Link to='/'>Home</Link></li>
            </ul>
        </div>
    )
}

export default MenuNavigation;
