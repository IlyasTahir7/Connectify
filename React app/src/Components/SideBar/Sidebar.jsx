import React from 'react'
import "./Sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import CloseFriends from '../CloseFriends/CloseFriends';
import {Users} from "../../dummyData"
export default function Sidebar() {
  return (
  <>
<div className="sidebar">
    <div className="sidebarwrapper">
        <ul className="sidebarlist">
            <li className="sidebarlistitem firstsidebaritem">
<RssFeedIcon className='sidebarlisticon'/>
                <span className="sidebarlistitemtext">Feed</span>
            </li>
            <li className="sidebarlistitem">
<ChatIcon className='sidebarlisticon'/>
                <span className="sidebarlistitemtext">Chats</span>
            </li>
            <li className="sidebarlistitem">
<VideoLibraryIcon className='sidebarlisticon'/>
                <span className="sidebarlistitemtext">Videos</span>
            </li>
            <li className="sidebarlistitem">
<PeopleAltIcon className='sidebarlisticon'/>
                <span className="sidebarlistitemtext">Groups</span>
            </li>
            <li className="sidebarlistitem">
<BookmarksIcon className='sidebarlisticon'/>
                <span className="sidebarlistitemtext">Bookmarks</span>
            </li>
            <li className="sidebarlistitem">
<ContactSupportIcon className='sidebarlisticon'/>
                <span className="sidebarlistitemtext">Questions</span>
            </li>
            <li className="sidebarlistitem">
<WorkIcon className='sidebarlisticon'/>
                <span className="sidebarlistitemtext">Job</span>
            </li>
            <li className="sidebarlistitem">
<EventIcon className='sidebarlisticon'/>
                <span className="sidebarlistitemtext">Events</span>
            </li>
            <li className="sidebarlistitem">
<SchoolIcon className='sidebarlisticon'/>
                <span className="sidebarlistitemtext">Courses</span>
            </li>
        </ul>
        </div>
        <button className='sidebarbutton'>Show More</button>
        <hr className='sidebarhr' />
<div className="sidebarfriendwrapper">
    <ul className="sidebarfriendlist">

    {Users.map((user) => ( // Change 'u' to 'user'
    <CloseFriends key={user.id} {...user} /> // Spread the 'user' object
  ))}

    </ul>
</div>
   
</div>
  </>
  )
}
