import React from 'react'
import "./CloseFriends.css"
export default function CloseFriends(user) {
  return (
<>
<li className="sidebarfrienditem">
            <img className='sidebarfriendimg' src={user.profilePicture} alt='Friend'/>
            <span className="sidebarfriendtext">{user.username}</span>
        </li>
</>
  )
}
