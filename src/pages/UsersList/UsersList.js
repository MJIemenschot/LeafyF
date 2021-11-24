import './UsersList.css';
import React, {useContext, useEffect, useState} from "react";
import {Link, NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import Logo from "../../components/Logo/Logo";
import {FaBars, FaHome, FaTimes } from "react-icons/fa";
import {IoPersonOutline} from "react-icons/io5";
import axios from "axios";
import { GrNext, GrClose, GrEdit, GrTrash  } from "react-icons/gr";
import Button from "../../components/reusableComponents/Button";
import UserDelete from "../../components/UserDelete/UserDelete";
import UserUpdate from "../../components/UserForms/UserUpdate";
import UserEdit from "../../components/UserForms/UserEdit";

const UsersList = () => {
    // console.log('props in usersList',props)
    const [users, setUsers] = useState([]);
    const [abilities,setAbilities] = useState([null]);
    const [active, setActive] =useState(false);
    const isTokenValid = localStorage.getItem('token')
    const {
        user
    } = useContext(AuthContext);
    console.log('users in userslist',user);


    async function fetchUsers(){
        const token = localStorage.getItem("token")
        try{
            const res = await axios.get(`http://localhost:8080/api/v1/users` , {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            console.log('de data van users api',res.data);
             setUsers(res.data)

        } catch (e) {
            console.error('Er zijn helaas geen gebruikers gevonden, error: ' + e)
        }

    }
    useEffect(()=>{
        fetchUsers()
    },[])



    return (
        <>
            <h1 className='page-header'>Ledenlijst</h1>
            <div className='item-container'>
                {users.map(member =>{
                    const splitMember=member.username.split('@');
                    const theMember=splitMember[0].charAt(0).toUpperCase()+splitMember[0].slice(1);
                    return (

                        <div key ={member.username} className='user-info'>
                            <h3>{theMember}</h3>
                            <p><strong>Emailadres: </strong>{member.username}</p>


                            <h4>Rollen:</h4>
                            <>{member.authorities.map(abilities=>{
                                return(<p>
                                    {abilities.authority ==='ROLE_ADMIN' &&<p>Administator</p>}
                                    {abilities.authority ==='ROLE_USER' &&<p>Lid van de club</p>}
                                    {abilities.authority ===[] &&<p>Lid van de club</p>}
                                </p>)}
                            )}
                            </>
                            <div className='dropdown'>
                                <h4>Lijst van toegevoegde planten</h4>
                                <div className='dropdown-content'>
                                    <>{member.plants.map(usrPlants=>{
                                        return(<p>
                                            {usrPlants.name}
                                        </p>)}
                                    )}
                                    </>
                                </div>
                            </div>
                            <div className='users-tools'>
                                {user &&
                                <>{member.authorities.map(roles=>{
                                    return(<>
                                        {roles.authority==='ROLE_USER' &&<Link to={`/user-update/${ member.username }`}  className='user-btn'>
                                            blokkeer
                                        </Link>}
                                        {roles.authority==='ROLE_ADMIN' && 'ROLE_USER' &&<></>}
                                        {!roles.authority ==='ROLE_USER' && 'ROLE_ADMIN' &&<p>Geen lid meer van de club</p>}
                                    </>)}
                                )}
                                    {/*{user &&*/}
                                    {/*<Link to={`/user-update/${ member.username }`}  className='user-btn'>*/}
                                    {/*    blokkeer*/}
                                    {/*</Link>*/}
                                    {/*}*/}
                                </>
                                }
                                <>
                                    {user &&
                                    <>
                                        <Link id={member.username}
                                              to={`/user-edit/${ member.username }`}  className='user-btn'>
                                            deblokkeer
                                        </Link>
                                        {/*     <UserEdit id={member.username}/>*/}
                                    </>
                                    }
                                </>
                            </div>
                            <div className='user-tool'>
                                {
                                    user &&
                                    //user.username===!member.username &&
                                    <UserDelete id={member.username}/>
                                }
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
export default UsersList