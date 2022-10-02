import React from 'react'
import CreateProfile from '../create-profile'
import Sidebar from '../sidebar/sidebar'
import './Home.css'

const Home = () => {
  return (
    <div className='home_layout'>
        <Sidebar />
        <CreateProfile />
    </div>
  )
}

export default Home