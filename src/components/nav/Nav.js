import React from 'react';
import logo from '../../static/assets/logo.png';
import { ChevronRightOutlined } from '@mui/icons-material';
import './nav.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <p className='classroom_prof'>Classroom Profile</p>
            <div className='icon'>
                <p>Go to classroom </p>
                <ChevronRightOutlined />
            </div>
        </nav>
    )
}

export default Navbar