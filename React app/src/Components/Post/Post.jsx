import React, { useState } from 'react'
import "./Post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummyData"
export default function Post({post}) {
  const [like, setlike] = useState(post.like)
  const [isliked, setisliked] = useState(false)
  const likeHandler=()=>{
    setlike(isliked?like-1:like+1)
    setisliked(!isliked)
  }
  return (
    <>
    <div className="post">
        <div className="postcontainer">
            <div className="posttop">
               <div className="posttopleft">
<img src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" className="topleftuserimg" />
<span className="topleftusername">{Users.filter(u=>u.id===post.userId)[0].username}</span>
<span className="toplefttime">{post.date}</span>
               </div>
               <div className="posttopright">
<MoreVertIcon/>
               </div>
            </div>
            <div className="postcenter">
                <div className="postcenterimgdesc">{post.desc}</div>
<img src={post.photo} alt="" className="postcenterimg" />
            </div>
            <div className="postbottom">
<div className="postbottomleft">
<img src="/Assets/like.png" alt="" className="postlikebutton" onClick={likeHandler} />
<img src="/Assets/heart.png" alt="" className="postlikebutton" onClick={likeHandler} />
<span className="postlikecounter">{like} People like it</span>
</div>
<div className="postbottomright">
<span className="postcomments">{post.comment} Comments</span>
</div>
            </div>
        </div>
    </div>
    </>
  )
}
