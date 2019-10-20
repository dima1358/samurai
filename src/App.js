import React from 'react'
import g from './General.module.css'
import './App.css'
import Header from './Header/Header.js'
import Profile from './Profile/Profile.js'
import Sidebar from './Sidebar/Sidebar.js'


function App() {
  return (
    <div>
      <Header />
      <div className='wrap'>
        <Sidebar />
        <Profile />
      </div>
    </div>
  )
}

export default App
