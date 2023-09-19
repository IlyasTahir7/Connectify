import React from 'react'
import "./Profile.css"
import Topbar from '../../Components/TopBar/Topbar'
import Sidebar from '../../Components/SideBar/Sidebar'
import Rightbar from '../../Components/RightBar/Rightbar'
import Feed from '../../Components/Feed/Feed'
export default function Profile() {
  return (
   <>
    <Topbar/>
  <div className="profile">
    <Sidebar/>
<div className="profileright">
<div className="profilerighttop">
  <div className="profilecontainer">
    <img src="/Assets/post/9.jpeg" alt="" className="profilecoverimg" />
    <img src="/Assets/person/6.jpeg" alt="" className="profileuserimg" />
  </div>
  <div className="profileinfo">
    <h6 className="profileusername">Safak Mark</h6>
    <div className="profileuserdesc">Hello! My Friends</div>
  </div>
</div>
<div className="profilerightbottom">
<Feed/>
    <Rightbar profile/>
</div>

    </div>
  </div>
   </>
  )
}
