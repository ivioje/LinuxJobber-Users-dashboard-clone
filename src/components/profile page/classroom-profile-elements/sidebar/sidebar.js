import React from 'react';
import me from '../../../../static/assets/me.jpg';
import './sidebar.css';
import {
  CameraAltOutlined,
  PersonOutline,
  ChevronRightOutlined,
  SchoolOutlined,
  Check,
  LogoutOutlined
} from '@mui/icons-material';
import Questions1 from '../element1';

const Sidebar = () => {
  return (
    <main>
      <div className='profile_container'>
        <div className='img'>
          <img src={me} alt='Rhoda' />
          <div className='img_icon'><CameraAltOutlined className='img_icon-i' /></div>
        </div>
        <p className='username'>Eboreime Rhoda</p>

        <div className='links'>
          <div className='profile_link'>
            <span><PersonOutline /></span>
            <p>Profile</p>
            <i><ChevronRightOutlined /></i>
          </div>
          <div className='courses_link'>
            <span><SchoolOutlined /></span>
            <p>Courses</p>
            <i><ChevronRightOutlined /></i>
          </div>
          <div className='attendance_link'>
            <span><Check /></span>
            <p>Attendance</p>
            <i><ChevronRightOutlined /></i>
          </div>
          <div className='logout'>
            <i><LogoutOutlined /></i>
            <p>Logout</p>
          </div>
        </div>
      </div>

      <Questions1 />
    </main>
  )
}

export default Sidebar