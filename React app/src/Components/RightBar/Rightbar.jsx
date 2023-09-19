import React from "react";
import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../Online/Online";
export default function Rightbar({profile}) {
  const HomeRightbar=()=>{
    return(
      <>
       <div className="rightbarbirthdaycontainer">
            <img
              className="rightbarbirthdayimg"
              src="/Assets/gift.png"
              alt="birthday"
            />
            <span className="rightbarbirthdaytext">
              <b>Elon Musk</b> and <b>3 other friend</b> have <b>Birthday</b>{" "}
              today
            </span>
          </div>
          <div className="rightbarad">
            <img className="rightbaradimg" src="/Assets/ad.png" alt="AD" />
          </div>
          <div className="rightbarfriend">
            <div className="rightbartitle">
              <b>Online Friends</b>
            </div>
            <ul className="rightbarfriendlist">
            <ul className="rightbarfriendlist">
  {Users.map((user) => ( // Change 'u' to 'user'
    <Online key={user.id} {...user} /> // Spread the 'user' object
  ))}
</ul>
            </ul>
          </div>
      </>
    )
  }
  const ProfileRightbar=()=>{
    return (
 <>
 <div className="profileuserrightbarinfo">
 <h3 className="profilerightbartitle">User Information</h3>
 <div className="profilerightbarcontianer">
  <div className="profilerightuserinfo">
    <span className="profileusertext1">City:</span>
    <span className="profileusertext2">New York</span>
  </div>
  <div className="profilerightuserinfo">
    <span className="profileusertext1">From:</span>
    <span className="profileusertext2">Madrid</span>
  </div>
  <div className="profilerightuserinfo">
    <span className="profileusertext1">Relationship:</span>
    <span className="profileusertext2">Single</span>
  </div>
 </div>
 </div>
 <div className="profilerightbarclosefriends">
<h3 className="profilerightbartitlefriend">Close Friends</h3>
<div className="profilerightbarclosefriendcontainer">
  <div className="profilerightbarclosefriend">
  <img src="/Assets/person/1.jpeg" alt="" className="profilerightbarclosefriendimg" />
  <span className="profilerightbarclosefriendname">Janell Shrum</span>
</div>
<div className="profilerightbarclosefriend">
  <img src="/Assets/person/2.jpeg" alt="" className="profilerightbarclosefriendimg" />
  <span className="profilerightbarclosefriendname">Alex Durden</span>
</div>

<div className="profilerightbarclosefriend">
  <img src="/Assets/person/3.jpeg" alt="" className="profilerightbarclosefriendimg" />
  <span className="profilerightbarclosefriendname">Dora Hawks</span>
</div>

<div className="profilerightbarclosefriend">
  <img src="/Assets/person/4.jpeg" alt="" className="profilerightbarclosefriendimg" />
  <span className="profilerightbarclosefriendname">Thomas Hold
</span>
</div>

<div className="profilerightbarclosefriend">
  <img src="/Assets/person/5.jpeg" alt="" className="profilerightbarclosefriendimg" />
  <span className="profilerightbarclosefriendname">Shirley Beauch</span>
</div>

<div className="profilerightbarclosefriend">
  <img src="/Assets/person/6.jpeg" alt="" className="profilerightbarclosefriendimg" />
  <span className="profilerightbarclosefriendname">Travis Benne</span>
</div>

</div>
</div>

 </>
    )
    
  }
  return (
    <>
      <div className="rightbar">
        <div className="rightbarcontianer">
        {profile? <ProfileRightbar/> :<HomeRightbar/> }
        </div>
      </div>
    </>
  );
}
