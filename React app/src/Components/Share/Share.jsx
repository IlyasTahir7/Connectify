import React from 'react'
import "./Share.css"
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CollectionsIcon from '@mui/icons-material/Collections';
export default function Share() {
  return (
   <>
<div className="share">
    <div className="sharecontainer">
        <div className="sharebox">
        <div className="sharetop">
            <img src="/Assets/person/1.jpeg" alt="" className="sharepersonimg" />
            <input placeholder="What's in your mind Safak?"  className="shareinput" />
        </div>
        <hr className="sharehr" />
        <div className="sharebottom">
            <ul className="shareoptions">
                <div className="shareicontext"><li className="shareoption">
<CollectionsIcon className='shareoptionicon' htmlColor='tomato'/>
<span className="shareoptiontext">Photos/Videos</span>
                </li></div>
                <div className="shareicontext">   <li className="shareoption">
<LabelIcon className='shareoptionicon' htmlColor='blue'/>
<span className="shareoptiontext">Tag</span>
                </li></div>
                <div className="shareicontext">  <li className="shareoption">
<LocationOnIcon className='shareoptionicon' htmlColor='green'/>
<span className="shareoptiontext">Location</span>
                </li></div>
                <div className="shareicontext">  <li className="shareoption">
<EmojiEmotionsIcon className='shareoptionicon' htmlColor='goldenrod'/>
<span className="shareoptiontext">Feelings</span>
                </li></div>
            </ul>
            <button className="sharebutton">Share</button>
        </div>
    </div>
    </div>
</div>
   </>
  )
}
