import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./TopBar.css"
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
export default function Topbar() {
  return (
 <>

<div className="outer-container">
      <div className="inner-container left">Connectify</div>
      <div className="inner-container center">

        <div className='search'>
<SearchOutlinedIcon className='icon'/>
          <input type='search' placeholder='Serach for Friends ,Events ,Groups'/>
        </div>
 
      </div>
      <div className="inner-container right">
      <span><a href="http://">HomePage</a></span>
        <span><a href="http://">Timeline</a></span> 
        <div className="topbaricons">
          <span className="topbariconitems "><PersonIcon/>
          <span className="badge">99+</span>
          </span>
          <span className="topbariconitems "><MessageIcon/>
          <span className="badge">99+</span>
          </span>
          <span className="topbariconitems "><NotificationsActiveIcon/>
          <span className="badge">99+</span>
          </span>
        </div>
          <img src="/Assets/person/1.jpeg " alt="Dp" className="topbarimg" />


      </div>
    </div>
 </>
  )
}
