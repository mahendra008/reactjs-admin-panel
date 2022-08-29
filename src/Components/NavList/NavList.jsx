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
		console.log('--- id', id);
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
        
        items.push(<ul className={(id === undefined || expandMenu[id]) ? 'show' : 'hide'} onClick={() =>{menuAction(id)}}>{listItems}</ul>);
        return items;
    }

    menuItems.forEach((item) => {
        if(item.list && item.list.length > 0){
			if(item.type === 'tab'){
				let div = createTab(item);
				menuList.push(div);
			}
			
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
            <div className="links">
                {menuList}
            </div>
        </div>
    )
}

export default NavList