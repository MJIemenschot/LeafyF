import './UserDetail.css';
import {Link, useHistory, useParams} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import EditImageBtn from "./EditImageBtn/EditImageBtn";
import PlantDelete from "./PlantDelete/PlantDelete";
import EditButton from "./EditButton/EditButton";
import UserDelete from "./UserDelete/UserDelete";
import UserUpdate from "./UserForms/UserUpdate";
import UserEdit from "./UserForms/UserEdit";
import {GrEdit} from "react-icons/gr";


const UserDetail = () => {
    const [currentUser, setCurrentUser] = useState([]);
    //const [Picture, setPicture] = useState();
    const { username } = useParams();
    const history = useHistory();
    const isTokenValid = localStorage.getItem("token")
    const {
        user
    } = useContext(AuthContext);
    console.log('user in Plant from authcontext' ,user)



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
        <div className='container'>

            <h1 className='page-header' >{currentUser.username}</h1>
            <p><strong>Gebruikersnaam: </strong>{currentUser.username}</p>
            <p><strong>Email: </strong>{currentUser.username}</p>
            <div>


                <div>{user.authorities.map(abilities=>{
                    return(
                        <>
                            <div>
                                {abilities.authority ==='ROLE_ADMIN' &&<p>Administator</p>}
                                {abilities.authority ==='ROLE_USER' &&<p>Gebruiker</p>}
                            </div>
                            <div className='user-tools'>
                                {currentUser.username && ! abilities.authority ==='ROLE_ADMIN' &&
                                <Link to={`/reset-password/${ currentUser.username }`}   className='user-btn'>
                                    Pas je wachtwoord en/of mailadres aan aan <GrEdit/>
                                </Link>
                                }
                                <>
                                    {
                                        abilities.authority ==='ROLE_ADMIN' &&
                                        // <Link to={`/user-delete/${ currentUser.username }`}   className='user-btn'>
                                        //     Verwijder het account
                                        // </Link>
                                        <UserDelete id={currentUser.username}/>
                                    }
                                </>
                                <>
                                    {abilities.authority ==='ROLE_ADMIN' &&
                                    <Link to={`/user-update/${ currentUser.username }`}  className='user-btn'>
                                        Blokkeer <GrEdit/>
                                    </Link>
                                        // <UserEdit id={currentUser.username}/>
                                    }
                                </>
                                {/*<>*/}
                                {/*    {abilities.authority ==='ROLE_ADMIN' &&*/}
                                {/*    <Link to={`/user-edit/${ currentUser.username }`}  className='user-btn'>*/}
                                {/*        Deblokkeer <GrEdit/>*/}
                                {/*    </Link>*/}
                                {/*        // <UserEdit id={currentUser.username}/>*/}
                                {/*    }*/}
                                {/*</>*/}
                            </div>
                    </>)}
                )}
                </div>
            </div>
        </div>




    )
}
export default UserDetail;