import React from 'react'
import { NavLink } from "react-router-dom"

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
        <NavLink activeClassName="active" to="/">
            <div className="logo">
                <img src={Logo} alt="JIO" />
                <h2>CNAAP</h2>
            </div>
        </NavLink>
        <div className="links">
            <div className="title">
                <p>Home</p>
                <KeyboardArrowDownOutlinedIcon className='arrowIcon' />
            </div>
            <ul>
                <NavLink activeClassName="active" to="/">
                    <li><DashboardOutlinedIcon className='icons'/> Dashbaord</li>
                </NavLink>
                <NavLink activeClassName="active" to="/users">
                    <li><TableViewOutlinedIcon className='icons' /> Data Tables</li>
                </NavLink>
                <NavLink activeClassName="active" to="/widgets">
                    <li><WidgetsOutlinedIcon className='icons' /> Widgets</li>
                </NavLink>
                <div className="title">
                <p>Home 1</p>
                    <KeyboardArrowDownOutlinedIcon className='arrowIcon' />
                </div>
                <ul>
                    
                    <NavLink activeClassName="active" to="/healthcheck">
                        <li><HealthAndSafetyOutlinedIcon className='icons' /> Health-Check</li>
                    </NavLink>
                </ul>
            </ul>
            <div className="title">
                <p>Services</p>
                <KeyboardArrowDownOutlinedIcon className='arrowIcon' />
            </div>
            <ul>
                <NavLink activeClassName="active" to="/users">
                    <li><AccountCircleOutlinedIcon className='icons' /> Users</li>
                </NavLink>
                <NavLink activeClassName="active" to="/logs">
                    <li><PlaylistAddCheckOutlinedIcon className='icons' /> Logs</li>
                </NavLink>
                <NavLink activeClassName="active" to="/settings">
                    <li><SettingsSuggestOutlinedIcon className='icons' /> Settings</li>
                </NavLink>
            </ul>
            <div className="title">
                <p>Utilities</p>
                <KeyboardArrowDownOutlinedIcon className='arrowIcon' />
            </div>
            <ul>
                <NavLink activeClassName="active" to="/dashboard1">
                    <li><DashboardOutlinedIcon className='icons'/> Dashbaord</li>
                </NavLink>
                <NavLink activeClassName="active" to="/users">
                    <li><TableViewOutlinedIcon className='icons' /> Data Tables</li>
                </NavLink>
                <NavLink activeClassName="active" to="/widget1">
                    <li><WidgetsOutlinedIcon className='icons' /> Widgets</li>
                </NavLink>
                <NavLink activeClassName="active" to="/healthcheck1">
                    <li><HealthAndSafetyOutlinedIcon className='icons' /> Health-Check</li>
                </NavLink>
            </ul>
            <div className="title">
                <p>Accounts</p>
                <KeyboardArrowDownOutlinedIcon className='arrowIcon' />
            </div>
            <ul>
                <NavLink activeClassName="active" to="/users">
                    <li><AccountCircleOutlinedIcon className='icons' /> Users</li>
                </NavLink>
                <NavLink activeClassName="active" to="/logs1">
                    <li><PlaylistAddCheckOutlinedIcon className='icons' /> Logs</li>
                </NavLink>
                <NavLink activeClassName="active" to="/settings1">
                    <li><SettingsSuggestOutlinedIcon className='icons' /> Settings</li>
                </NavLink>
            </ul>
        </div>
    </div>
  )
}

export default NavList