import React from 'react'
import { Link } from "react-router-dom"

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
        <Link to="/">
            <div className="logo">
                <img src={Logo} alt="JIO" />
                <h2>CNAAP</h2>
            </div>
        </Link>
        <div className="links">
            <div className="title">
                <p>Home</p>
                <KeyboardArrowDownOutlinedIcon className='arrowIcon' />
            </div>
            <ul>
                <Link to="/">
                    <li><DashboardOutlinedIcon className='icons'/> Dashbaord</li>
                </Link>
                <Link to="/users">
                    <li><TableViewOutlinedIcon className='icons' /> Data Tables</li>
                </Link>
                <Link to="/">
                    <li><WidgetsOutlinedIcon className='icons' /> Widgets</li>
                </Link>
                <div className="title">
                <p>Home 1</p>
                    <KeyboardArrowDownOutlinedIcon className='arrowIcon' />
                </div>
                <ul>
                    
                    <Link to="/">
                        <li><HealthAndSafetyOutlinedIcon className='icons' /> Health-Check</li>
                    </Link>
                </ul>
            </ul>
            <div className="title">
                <p>Services</p>
                <KeyboardArrowDownOutlinedIcon className='arrowIcon' />
            </div>
            <ul>
                <Link to="/users">
                    <li><AccountCircleOutlinedIcon className='icons' /> Users</li>
                </Link>
                <Link to="/">
                    <li><PlaylistAddCheckOutlinedIcon className='icons' /> Logs</li>
                </Link>
                <Link to="/">
                    <li><SettingsSuggestOutlinedIcon className='icons' /> Settings</li>
                </Link>
            </ul>
            <div className="title">
                <p>Utilities</p>
                <KeyboardArrowDownOutlinedIcon className='arrowIcon' />
            </div>
            <ul>
                <Link to="/">
                    <li><DashboardOutlinedIcon className='icons'/> Dashbaord</li>
                </Link>
                <Link to="/users">
                    <li><TableViewOutlinedIcon className='icons' /> Data Tables</li>
                </Link>
                <Link to="/users">
                    <li><WidgetsOutlinedIcon className='icons' /> Widgets</li>
                </Link>
                <Link to="/">
                    <li><HealthAndSafetyOutlinedIcon className='icons' /> Health-Check</li>
                </Link>
            </ul>
            <div className="title">
                <p>Accounts</p>
                <KeyboardArrowDownOutlinedIcon className='arrowIcon' />
            </div>
            <ul>
                <Link to="/users">
                    <li><AccountCircleOutlinedIcon className='icons' /> Users</li>
                </Link>
                <Link to="/">
                    <li><PlaylistAddCheckOutlinedIcon className='icons' /> Logs</li>
                </Link>
                <Link to="/">
                    <li><SettingsSuggestOutlinedIcon className='icons' /> Settings</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default NavList