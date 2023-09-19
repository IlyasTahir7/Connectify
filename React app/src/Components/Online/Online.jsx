import React from 'react'
import "./Online.css"
export default function Online(user) {
  return (
    <>
                  <li className="rightbarfrienditem">
                <div className="rightbaronlinefriend">
                  <img src={user.profilePicture} alt="Friend" className="rightbaronlinefriendimg" />
                  <span className="rightbaronlinetag"></span>
                  <span className="rightbaronlinefriendtext">{user.username}</span>
                </div>
              </li>
    </>
  )
}
