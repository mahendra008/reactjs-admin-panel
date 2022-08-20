import React from 'react'
import './NavList.scss'
import Logo from '../../Assets/Images/jio_logo.png';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import TableViewOutlinedIcon from '@mui/icons-material/TableViewOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


const NavList = () => {
  return (
    <div className='navlist'>
        <div className="logo">
            <img src={Logo} alt="JIO" />
            <h2>CNAAP</h2>
        </div>
        <div className="links">
            <div className="title">
                <p>Home</p>
                <KeyboardArrowDownOutlinedIcon className='arrowIcon' />
            </div>
            <ul>
                <li><DashboardOutlinedIcon className='icons'/> Dashbaord</li>
                <li><TableViewOutlinedIcon className='icons' /> Data Tables</li>
                <li><WidgetsOutlinedIcon className='icons' /> Widgets</li>
                <div className="title">
                <p>Home 1</p>
                    <KeyboardArrowDownOutlinedIcon className='arrowIcon' />
                </div>
                <ul>
                    <li><HealthAndSafetyOutlinedIcon className='icons' /> Health-Check</li>
                </ul>
            </ul>
            <div className="title">
                <p>Services</p>
                <KeyboardArrowDownOutlinedIcon className='arrowIcon' />
            </div>
            <ul>
                <li><AccountCircleOutlinedIcon className='icons' /> Users</li>
                <li><PlaylistAddCheckOutlinedIcon className='icons' /> Logs</li>
                <li><SettingsSuggestOutlinedIcon className='icons' /> Settings</li>
            </ul>
            <div className="title">
                <p>Utilities</p>
                <KeyboardArrowDownOutlinedIcon className='arrowIcon' />
            </div>
            <ul>
                <li><DashboardOutlinedIcon className='icons'/> Dashbaord</li>
                <li><TableViewOutlinedIcon className='icons' /> Data Tables</li>
                <li><WidgetsOutlinedIcon className='icons' /> Widgets</li>
                <li><HealthAndSafetyOutlinedIcon className='icons' /> Health-Check</li>
            </ul>
            <div className="title">
                <p>Accounts</p>
                <KeyboardArrowDownOutlinedIcon className='arrowIcon' />
            </div>
            <ul>
                <li><AccountCircleOutlinedIcon className='icons' /> Users</li>
                <li><PlaylistAddCheckOutlinedIcon className='icons' /> Logs</li>
                <li><SettingsSuggestOutlinedIcon className='icons' /> Settings</li>
            </ul>
        </div>
    </div>
  )
}

export default NavList