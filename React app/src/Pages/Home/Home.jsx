import React from 'react'
import Topbar from '../../Components/TopBar/Topbar'
import Sidebar from '../../Components/SideBar/Sidebar'
import Rightbar from '../../Components/RightBar/Rightbar'
import Feed from '../../Components/Feed/Feed'
import "./Home.css"
export default function Home() {
  return (
  <>
  <Topbar/>
  <div className="homecontainer">
    <Sidebar/>
    <Feed/>
    <Rightbar/>
    
  </div>
  </>
  )
}
