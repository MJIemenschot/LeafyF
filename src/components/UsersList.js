import React, {useContext, useEffect, useState} from "react";
import {Link, NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import Logo from "./Logo/Logo";
import {FaBars, FaHome, FaTimes } from "react-icons/fa";
import {IoPersonOutline} from "react-icons/io5";
import axios from "axios";
import { GrNext, GrClose, GrEdit, GrTrash  } from "react-icons/gr";
import Button from "./reusableComponents/Button";
import UserDelete from "./UserDelete/UserDelete";
import UserUpdate from "./UserForms/UserUpdate";

const UsersList = () => {
    // console.log('props in usersList',props)
    const [users, setUsers] = useState([]);
    const [abilities,setAbilities] = useState([]);
    const [active, setActive] =useState(false);
    const isTokenValid = localStorage.getItem('token')
    const {
        user
    } = useContext(AuthContext);
    console.log('user in userslist',user);


    async function fetchUsers(){
        try{
            const res = await axios.get(`http://localhost:8080/api/v1/users`);
            console.log('de data van users api',res.data);
            //console.log( 'de autorities',res.data.authorities.authority)
            console.log('enabled',res.data.enabled)

            setUsers(res.data);
            //setAbilitiesd(res.data.authorities)
            //setActive(res.data.enabled)

        } catch (e) {
            console.error('Er zijn helaas geen gebruikers gevonden, error: ' + e)
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

                {users.map(member =>{
                    const splitMember=member.username.split('@');
                    const theMember=splitMember[0].charAt(0).toUpperCase()+splitMember[0].slice(1);
                    return (

                        <div key ={theMember} className='itemInfo'>
                            <h3> {theMember}</h3>

                            <p><strong>Emailadres: </strong>{member.username}</p>
                            {/*<p>Actief: {user.enabled}</p>*/}
                            <h4>Rollen:</h4>
                            <>{member.authorities.map(abilities=>{
                                return(<p>
                                    {abilities.authority ==='ROLE_ADMIN' &&<p>Administator</p>}
                                    {abilities.authority ==='ROLE_USER' &&<p>Lid van de club</p>}
                                </p>)}
                            )}
                            </>
                            <>
                                {
                                    user &&
                                    //user.username===!member.username &&

                                    <UserDelete id={member.username}/>
                                }
                            </>
                            {/*<>*/}
                            {/*    {user &&*/}
                            {/*    <Link to={`/user-update/${ member.username }`}  className='user-btn'>*/}
                            {/*        Blokkeer <GrEdit/>*/}
                            {/*    </Link>*/}
                            {/*        // <UserEdit id={currentUser.username}/>*/}
                            {/*    }*/}
                            {/*</>*/}
                            {/*<>*/}
                            {/*    {abilities.authority ==='ROLE_ADMIN' &&*/}
                            {/*    <Link to={`/user-edit/${ member.username }`}  className='user-btn'>*/}
                            {/*        Deblokkeer <GrEdit/>*/}
                            {/*    </Link>*/}
                            {/*        // <UserEdit id={currentUser.username}/>*/}
                            {/*    }*/}
                            {/*</>*/}
                            {/*{abilities.authority ==='ROLE_ADMIN' &&<UserDelete*/}
                            {/*    id ={user.username}*/}
                            {/*/>}*/}
                            {/*{user &&*/}
                            {/*<Link to={`user/${ user.username }`}   className='btn-to-post'>*/}
                            {/*    Gegevens*/}
                            {/*</Link>*/}
                            {/*}*/}
                            {/*{user  &&*/}
                            {/*    <Link to={`/reset-password/${ user.username }`} className='btn btn-primary'>*/}
                            {/*        Nieuw wachtwoord aanmaken*/}
                            {/*    </Link>}*/}
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