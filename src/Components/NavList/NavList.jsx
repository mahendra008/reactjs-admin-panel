import { useState } from 'react'
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
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AutoModeOutlinedIcon from '@mui/icons-material/AutoModeOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';


const NavList = () => {

    const [ expandMenu, setExpandMenu ] = useState({ home: false, home1: false, services: false, utilities: false, accounts: false })

    const menuAction = (item) => {
        let menu = { ...expandMenu };
        menu[item] = !menu[item];
        setExpandMenu({...menu});
    }

    return (
        <div className='navlist'>
            <NavLink activeClassName="active" to="/">
                <div className="logo">
                    <img src={Logo} alt="JIO" />
                    <h2>CNAAP</h2>
                </div>
            </NavLink>
            <div className="links">
                <div className="title" onClick={() =>{menuAction('home')}}>
                    <div className='titleItems'>
                        <HomeWorkOutlinedIcon sx={{ fontSize: 20 }} />
                        <p>Home</p>
                    </div>
                    {(expandMenu.home) ? <KeyboardArrowLeftIcon className='arrowIcon' /> : <KeyboardArrowDownOutlinedIcon className='arrowIcon' />}
                </div>
                <ul className={(expandMenu.home) ? 'show' : 'hide'}>
                    <NavLink activeClassName="active" to="/">
                        <li><DashboardOutlinedIcon className='icons'/> Dashbaord</li>
                    </NavLink>
                    <NavLink activeClassName="active" to="/users">
                        <li><TableViewOutlinedIcon className='icons' /> Data Tables</li>
                    </NavLink>
                    <NavLink activeClassName="active" to="/widgets">
                        <li><WidgetsOutlinedIcon className='icons' /> Widgets</li>
                    </NavLink>
                </ul>    
                    <div className="title" onClick={() =>{menuAction('home1')}}>
                    <div className='titleItems'>
                        <Inventory2OutlinedIcon sx={{ fontSize: 20 }} />
                        <p>Inventory</p>
                    </div>
                    {(expandMenu.home1) ? <KeyboardArrowLeftIcon className='arrowIcon' /> : <KeyboardArrowDownOutlinedIcon className='arrowIcon' />}
                    </div>
                <ul className={(expandMenu.home1) ? 'show' : 'hide'}>
                    <NavLink activeClassName="active" to="/healthcheck">
                        <li><HealthAndSafetyOutlinedIcon className='icons' /> Health-Check</li>
                    </NavLink>
                </ul>
                <div className="title" onClick={() =>{menuAction('services')}}>
                    <div className='titleItems'>
                        <InfoOutlinedIcon sx={{ fontSize: 20 }} />
                        <p>Services</p>
                    </div>
                    {(expandMenu.services) ? <KeyboardArrowLeftIcon className='arrowIcon' /> : <KeyboardArrowDownOutlinedIcon className='arrowIcon' />}
                </div>
                <ul className={(expandMenu.services) ? 'show' : 'hide'}>
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
                <div className="title" onClick={() =>{menuAction('utilities')}}>
                    <div className='titleItems'>
                        <div className='titleItems'>
                            <AutoModeOutlinedIcon sx={{ fontSize: 20 }} />
                            <p>Utilities</p>
                        </div>
                    </div>
                    {(expandMenu.utilities) ? <KeyboardArrowLeftIcon className='arrowIcon' /> : <KeyboardArrowDownOutlinedIcon className='arrowIcon' />}
                </div>
                <ul className={(expandMenu.utilities) ? 'show' : 'hide'}>
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
                <div className="title" onClick={() =>{menuAction('accounts')}}>
                        <div className='titleItems'>
                            <ManageAccountsOutlinedIcon sx={{ fontSize: 20 }} />
                            <p>Accounts</p>
                        </div>
                    {(expandMenu.accounts) ? <KeyboardArrowLeftIcon className='arrowIcon' /> : <KeyboardArrowDownOutlinedIcon className='arrowIcon' />}
                </div>
                <ul className={(expandMenu.accounts) ? 'show' : 'hide'}>
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