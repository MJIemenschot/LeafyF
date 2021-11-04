import './UserDetail.css';
import {Link, useHistory, useParams} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';
import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import EditImageBtn from "./EditImageBtn/EditImageBtn";
import PlantDelete from "./PlantDelete/PlantDelete";
import EditButton from "./EditButton/EditButton";
import UserDelete from './UserDelete/UserDelete';
import UserUpdate from "./UserForms/UserUpdate";
import UserEdit from "./UserForms/UserEdit";
import {GrEdit} from 'react-icons/gr';


const UserDetail = () => {
    const [currentUser, setCurrentUser] = useState([]);
    //const [Picture, setPicture] = useState();
    const { username } = useParams();
    const history = useHistory();
    const isTokenValid = localStorage.getItem('token')
    const {
        user
    } = useContext(AuthContext);
    console.log('user in Plant from authcontext' ,user);
    const splitUser=username.split('@');
    const theUser=splitUser[0].charAt(0).toUpperCase()+splitUser[0].slice(1);



    useEffect(()=>{
        async function fetchUser() {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/users/${username}`);
                console.log('response in fetchuser',response.data)

                setCurrentUser(response.data)

            } catch (error) {
                console.error('Something went wrong', error)
            }
        }
        fetchUser();
    },[]);


    return (
        <div className='user-detail'>

            <h1 className='page-header' >{theUser}</h1>
            <p><strong>Gebruikersnaam: </strong>{theUser}</p>
            <p><strong>Email: </strong>{currentUser.username}</p>
            <div>

                <div>{user.authorities.map(abilities=>{
                    return(
                        <>
                                {/*{abilities.authority ==='ROLE_ADMIN' &&<p>Administator</p>}*/}
                                {/*{abilities.authority ==='ROLE_USER' &&<p>Gebruiker</p>}*/}
                                    {abilities.authority ==='ROLE_ADMIN' ?<p><strong>Rol 2:</strong></p>:<p><strong>Rol:</strong></p>}
                                    {abilities.authority ==='ROLE_ADMIN' &&<p>Administator</p>}
                                    {abilities.authority ==='ROLE_USER' &&<p>Lid van de club</p>}
                            <div className='user-tools'>
                                {currentUser.username && !abilities.authority ==='ROLE_ADMIN' &&
                                <Link to={`/reset-password/${ currentUser.username }`}   className='user-btn'>
                                    Pas je wachtwoord en/of mailadres aan aan <GrEdit/>
                                </Link>
                                }

                            </div>
                    </>)}
                )}
                </div>
            </div>
        </div>
    )
}
export default UserDetail;