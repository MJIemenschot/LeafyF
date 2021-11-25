import './UserDetail.css';
import {Link, useHistory, useParams} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import EditImageBtn from "../../components/EditImageBtn/EditImageBtn";
import PlantDelete from "../../components/PlantDelete/PlantDelete";
import EditButton from "../../components/EditButton/EditButton";
import UserDelete from '../../components/UserDelete/UserDelete';
import UserUpdate from "../../components/UserForms/UserUpdate";
import UserEdit from "../../components/UserForms/UserEdit";
import {GrEdit} from 'react-icons/gr';
import PlntByUser from "../../components/PlntByUser";


const UserDetail = () => {
    //const [currentUser, setCurrentUser] = useState([]);
    //const [Picture, setPicture] = useState();
    const { username } = useParams();
    console.log('username uit useParams',username)
    const history = useHistory();
    const isTokenValid = localStorage.getItem('token')
    const {
        user
    } = useContext(AuthContext);
    console.log('user in userdetail from authcontext' ,user);
    const splitUser=username.split('@');
    const theUser=splitUser[0].charAt(0).toUpperCase()+splitUser[0].slice(1);



    // useEffect(()=>{
    //     async function fetchCurrentUser() {
    //         try {
    //             const response = await axios.get(`http://localhost:8080/api/v1/users/${username}`);
    //             console.log('response in fetchuser',response.data)
    //
    //             setCurrentUser(response.data)
    //
    //         } catch (error) {
    //             console.error('Er ging iets mis', error)
    //         }
    //     }
    //     fetchCurrentUser();
    // },[]);


    return (
        <div className='user-detail'>

            <h1 className='page-header' >{theUser}</h1>
            <p><strong>Gebruikersnaam: </strong>{theUser}</p>
            <p><strong>Email: </strong>{username}</p>
            <div>

                <div>{user.authorities.map(abilities=>{
                    return(
                        <>
                                    {abilities.authority ==='ROLE_ADMIN' ?<p><strong>Extra Rol:</strong></p>:<p><strong>Rol:</strong></p>}
                                    {abilities.authority ==='ROLE_ADMIN' &&<p>Administator</p>}
                                    {abilities.authority ==='ROLE_USER' &&<p>Lid van de club</p>}
                            {/*<PlntByUser usrId={username}/>*/}

                            <div className='user-tools'>
                                <p>Wil je geen lid meer zijn?</p>

                                {user.username === username &&
                                <UserDelete id={user.username}/>
                                }
                                <p>Je kan altijd weer opnieuw lid worden.</p>
                            </div>
                    </>)}
                )}
                </div>
            </div>
        </div>
    )
}
export default UserDetail;