import './Nav.css';
import React, { useState, useContext} from 'react';
import  {NavLink} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Logo from '../Logo/Logo';
import { IoPerson, IoPersonOutline } from "react-icons/io5";
import {FaBars, FaTimes, FaRegUser, FaUser, FaHeart, FaHome, FaSearch} from 'react-icons/fa';
//import Searchbar from "./Searchbar";
import {AuthContext} from "../../context/AuthContext";


const Nav = () => {
    const [isMobile, setIsMobile] =useState(false);
    const history = useHistory();
    const {
        logout,
         user ,
    } = useContext(AuthContext);
    // const [searchQuery, setSearchQuery] = useState( '');


    return (
        <nav>
            {/*<div className='navbar'>*/}
            <Logo />
                <ul className={isMobile ? 'nav-menu-mobile':'nav-menu'}
                onClick={(()=>setIsMobile(false))}
                >
                    <li className= 'nav-links'>
                        <NavLink activeClassName='activeLink' exact to='/'>
                        <FaHome/>
                        </NavLink>
                    </li>
                    <li className='nav-links'>
                        <NavLink activeClassName='activeLink' exact to='/makkelijk'>
                        Makkelijk
                        </NavLink>
                    </li>
                    <li className='nav-links'>
                        <NavLink activeClassName='activeLink' exact to='/shadow'>
                        Schaduw
                        </NavLink>
                    </li>
                    <li className='nav-links'>
                        <NavLink activeClassName='activeLink' exact to='/vergeet-deze'>
                        Vergeet deze..
                        </NavLink>
                    </li>
                    <li className='nav-links'>
                        <NavLink activeClassName='activeLink' exact to='/over-leafy'>
                            over Leafy
                        </NavLink>
                    </li>
                    <li className='nav-links'>{!user ? (<NavLink exact to='/user-portal'>
                        <IoPersonOutline/>
                    </NavLink>):(<button type='button' onClick={logout} className='log-out'>Log uit</button>)
                    //     :(
                    //     <NavLink exact to='/profile'>
                    //         <IoPerson/>
                    //     </NavLink>
                    // )
                    }
                        {/*{user &&(<button type='button' onClick={logout} className='log-out'>Log uit</button>)}*/}
                    </li>
                </ul>
                <div className='mobile-menu-icon'
                onClick={()=> setIsMobile(!isMobile)}>
                    {isMobile ? <FaTimes/>:
                        <FaBars />}
                </div>
            {/*</div>*/}
        </nav>
    )
}
export default Nav

