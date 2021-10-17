import React, {useContext, useEffect, useState} from "react";
import {Link, NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import Logo from "./Logo";
import {FaBars, FaHome, FaTimes } from "react-icons/fa";
import {IoPersonOutline} from "react-icons/io5";
import axios from "axios";

import { GrNext, GrClose, GrEdit, GrTrash  } from "react-icons/gr";
import Button from "./reusableComponents/Button";
import UserDelete from "./UserDelete";
import ItemUpdate from "./reusableComponents/ItemUpdate";
import UserUpdate from "./UserUpdate";

const UsersList = () => {
    const [users, setUsers] = useState([])

    async function fetchUsers(){
        try{
            const res = await axios.get("http://localhost:8080/api/v1/users");
            console.log("de data van users api",res);
            const data = res.data;
            setUsers(res.data);

        } catch (e) {
            console.error("Er zijn helaas geen items gevonden, error: " + e)
        }

    }
    useEffect(()=>{
        fetchUsers()
    },[])

    // function selectItem(){
    //     console.log("selectItem called", [items.id -1])
    //     let post=[items.id-1];
    // }

    return (
        <>
            <h1 className='page-header'>Ledenlijst</h1>

            <div className='item-container'>

                {users.map(user =>{
                    return (

                        <div key ={user.username} className='itemInfo'>
                            <h3> {user.username}</h3>
                            {/*<p>{item.description}</p>*/}
                            <p>Emailadres: {user.username}</p>
                            <p>Actief: {user.enabled}</p>
                            <p>Gebruikersrol: {user.authorities.authority}</p>
                            {/*{user && user.authority === "USER" || user.authority === "ADMIN" && isTokenValid() &&*/}
                                <UserDelete
                                    id ={user.username}
                                />
                            {/*}*/}
                            {/*/!*{user && user.authority === "ADMIN" && isTokenValid() &&*!/*/}
                            <Link to={`/user-update/${ user.username }`}   className="btn-to-post">
                                <GrEdit/>Pas aan
                            </Link>
                            {/*/!*}*!/*/}
                            {/*/!*{user && user.authority === "USER" || user.authority === "ADMIN" && isTokenValid() &&*!/*/}
                                <Link to={`/reset-password/${ user.username }`} className="btn btn-primary">
                                    Nieuw wachtwoord aanmaken
                                </Link>
                            {/*/!*}*!/*/}





                                {/*<GrEdit style={{ color:'white', cursor:'pointer'}}/>*/}
                                {/*/!*<UserDelete id={item.id} />*!/*/}
                                {/*/!*<button onClick={() => delete(item.id)}>Delete</button>*!/*/}
                                {/*<button*/}
                                {/*     onClick={selectItem}*/}
                                {/*>Bewerk</button>*/}
                                {/*/!*<button onClick={()=> history.push(`/item/item.id`)}></button>*!/*/}
                                {/*<Link  to='/item/:id}'>Details</Link>*/}

                            </div>

                    );
                })}

            </div>
        </>


    );
};
export default UsersList