import { useState } from 'react';

import "./Header.scss"

import MenuIcon from '@mui/icons-material/Menu';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';

import Avatar from "../../Assets/Images/Avatar/user.png";

import SiteList from './SiteList'

const Main = () => {

  const [ showSiteList, setShowSiteList ] = useState(false);
  
  const toggleSiteList = () => {
    setShowSiteList(!showSiteList);
  }
  
  const hideSiteList = () => {
    setShowSiteList(false);
  }

  return (
    <header>
      <div className="headLeft">
        <MenuIcon className="icons"/>
      </div>
      <div className="headRight">
        <div className="icoItems">
          <DarkModeOutlinedIcon className="icons moon" />
        </div>
        <div className="icoItems">
          <NotificationsNoneOutlinedIcon className="icons bell" />
          <div className="count">9</div>
        </div>
        <div className="icoItems">
          <ChatBubbleOutlineOutlinedIcon className="icons msg" />
          <div className="count">10</div>
        </div>
        <div className="icoItems" onClick={toggleSiteList}>
          <AppsOutlinedIcon className="icons fs-large sites" />
          {showSiteList && <SiteList hideSiteList={hideSiteList} />}
        </div>
        <img src={Avatar} alt="JIO" />
      </div>
    </header>
  )
}

export default Main