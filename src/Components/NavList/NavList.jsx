import { useState } from 'react'
import { NavLink } from "react-router-dom"

import menu from "../../Config/menu"

import "./NavList.scss"
import Logo from "../../Assets/Images/jio_logo.png";


const NavList = () => {

    const [ expandMenu, setExpandMenu ] = useState({})
    let tempMenuState = {};

    const menuAction = (event, item) => {
        event.stopPropagation();
        let menu = { ...expandMenu };
        menu[item] = !menu[item];
        setExpandMenu({...menu});
    }

    let menuList = [];
    let menuItems = menu.items;
    
    const createTab = (items) => {
        let menuState = { ...tempMenuState };
        menuState[items.id] = false; 
        tempMenuState = {...menuState};
        return (
            <>
                <div className="title" onClick={(e) =>{menuAction(e, items.id)}}>
                    <div className='titleItems'>
                    <span className="material-symbols-sharp">{items.icon}</span>
                        <p>{items.title}</p>
                    </div>
                    {(expandMenu[items.id]) ? <span className='material-symbols-sharp'>keyboard_arrow_left</span> : <span className='material-symbols-sharp'>keyboard_arrow_down</span>}
                </div>
            </>
        );
    }

    const createUl = (list, id) => {
        let listItems = [];
        let items = []

        list.forEach((li) => {
            if(li.list === undefined){
                listItems.push(
                    <NavLink activeClassName="active" to={li.route}>
                        <li>
                            <span className="material-symbols-sharp">{li.icon}</span>
                            {li.title}
                        </li>
                    </NavLink>
                );
            }
            else{
                let div = createTab(li);
                listItems.push(div);

                let nestul = createUl(li.list, li.id);
                listItems.push(nestul);
            }

        })
        
        items.push(<ul className={(expandMenu[id]) ? 'show' : 'hide'} onClick={() =>{menuAction(id)}}>{listItems}</ul>);
        return items;
    }

    menuItems.forEach((item) => {
        if(item.list && item.list.length > 0){
            let div = createTab(item);
            menuList.push(div);
    
            let ul = createUl(item.list, item.id);
            menuList.push(ul);
        }
    });


    return (
        <div className='navlist'>
            <NavLink activeClassName="active" to="/">
                <div className="logo">
                    <img src={Logo} alt="JIO" />
                    <h2>CNAAP</h2>
                </div>
            </NavLink>
            <div className="links">{/*
                <div className="title" onClick={() =>{menuAction('home')}}>
                    <div className='titleItems'>
                    <span className="material-symbols-sharp">home_work</span>
                        <p>Home</p>
                    </div>
                    {(expandMenu.home) ? <span className='material-symbols-sharp'>keyboard_arrow_left</span> : <span className='material-symbols-sharp'>keyboard_arrow_down</span>}
                </div>
                <ul className={(expandMenu.home) ? 'show' : 'hide'}>
                    <NavLink activeClassName="active" to="/">
                        <li>
                            <span className="material-symbols-sharp">dashboard</span>
                            Dashbaord
                        </li>
                    </NavLink>
                    <NavLink activeClassName="active" to="/users">
                        <li>
                            <span className="material-symbols-sharp">format_list_bulleted</span>
                            Data Tables
                        </li>
                    </NavLink>
                    <NavLink activeClassName="active" to="/widgets">
                        <li>
                            <span className="material-symbols-sharp">widgets</span>
                            Widgets
                        </li>
                    </NavLink>
                </ul>
                    <div className="title" onClick={() =>{menuAction('home1')}}>
                    <div className='titleItems'>
                        <span className="material-symbols-sharp">inventory_2</span>
                        <p>Inventory</p>
                    </div>
                    {(expandMenu.home1) ? <span className='material-symbols-sharp'>keyboard_arrow_left</span> : <span className='material-symbols-sharp'>keyboard_arrow_down</span>}
                    </div>
                <ul className={(expandMenu.home1) ? 'show' : 'hide'}>
                    <NavLink activeClassName="active" to="/healthcheck">
                        <li>
                            <span className="material-symbols-sharp">health_and_safety</span>
                            Health-Check
                        </li>
                    </NavLink>
                </ul>
                <div className="title" onClick={() =>{menuAction('services')}}>
                    <div className='titleItems'>
                        <span className="material-symbols-sharp">info</span>
                        <p>Services</p>
                    </div>
                    {(expandMenu.services) ? <span className='material-symbols-sharp'>keyboard_arrow_left</span> : <span className='material-symbols-sharp'>keyboard_arrow_down</span>}
                </div>
                <ul className={(expandMenu.services) ? 'show' : 'hide'}>
                    <NavLink activeClassName="active" to="/users">
                        <li>
                            <span className="material-symbols-sharp">account_circle</span>
                            Users
                        </li>
                    </NavLink>
                    <NavLink activeClassName="active" to="/logs">
                        <li>
                            <span className="material-symbols-sharp">playlist_add_check</span>
                            Logs
                        </li>
                    </NavLink>
                    <NavLink activeClassName="active" to="/settings">
                        <li>
                            <span className="material-symbols-sharp">settings_suggest</span>
                            Settings
                        </li>
                    </NavLink>
                </ul>
                <div className="title" onClick={() =>{menuAction('utilities')}}>
                    <div className='titleItems'>
                        <div className='titleItems'>
                            <span className="material-symbols-sharp">crisis_alert</span>
                            <p>Utilities</p>
                        </div>
                    </div>
                    {(expandMenu.utilities) ? <span className='material-symbols-sharp'>keyboard_arrow_left</span> : <span className='material-symbols-sharp'>keyboard_arrow_down</span>}
                </div>
                <ul className={(expandMenu.utilities) ? 'show' : 'hide'}>
                    <NavLink activeClassName="active" to="/">
                        <li>
                            <span className="material-symbols-sharp">dashboard</span>
                            Dashbaord
                        </li>
                    </NavLink>
                    <NavLink activeClassName="active" to="/users">
                        <li>
                            <span className="material-symbols-sharp">format_list_bulleted</span>
                            Data Tables
                        </li>
                    </NavLink>
                    <NavLink activeClassName="active" to="/widgets">
                        <li>
                            <span className="material-symbols-sharp">widgets</span>
                            Widgets
                        </li>
                    </NavLink>
                    <NavLink activeClassName="active" to="/healthcheck1">
                        <li>
                            <span className="material-symbols-sharp">health_and_safety</span> 
                            Health-Check
                        </li>
                    </NavLink>
                </ul>
                <div className="title" onClick={() =>{menuAction('accounts')}}>
                        <div className='titleItems'>
                            <span className="material-symbols-sharp">settings_applications</span>
                            <p>Accounts</p>
                        </div>
                    {(expandMenu.accounts) ? <span className='material-symbols-sharp'>keyboard_arrow_left</span> : <span className='material-symbols-sharp'>keyboard_arrow_down</span>}
                </div>
                <ul className={(expandMenu.accounts) ? 'show' : 'hide'}>
                    <NavLink activeClassName="active" to="/users">
                        <li>
                            <span className="material-symbols-sharp">account_circle</span>
                            Users
                        </li>
                    </NavLink>
                    <NavLink activeClassName="active" to="/logs">
                        <li>
                            <span className="material-symbols-sharp">playlist_add_check</span>
                            Logs
                        </li>
                    </NavLink>
                    <NavLink activeClassName="active" to="/settings">
                        <li>
                            <span className="material-symbols-sharp">settings_suggest</span>
                            Settings
                        </li>
                    </NavLink>
                </ul> */}
                {menuList}
            </div>
        </div>
    )
}

export default NavList