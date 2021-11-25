
import './Profile.css';
import React, {useContext, useEffect, useState} from 'react'
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";
import axios from "axios";

import Plants from "../../pages/Plants/Plants";
import {GrEdit} from "react-icons/gr";
import PlantDelete from "../PlantDelete/PlantDelete";
import PlantAdd from "../PlantForms/PlantAdd";

const Profile = () => {

    const  { user } = useContext(AuthContext);
    const [content, setContent] = useState(null);
    // console.log("USER STUFF IN PROFILE:", user);
    const splitUser=user.username.split('@');
    const theUser=splitUser[0].charAt(0).toUpperCase()+splitUser[0].slice(1);

    useEffect(() => {
        async function fetchPrivateStuff() {
            console.log("FETCH DATA IN PROFILE");
            try {
                const token = localStorage.getItem('token');
                console.log(token);
                const response = await axios.get(
                    'http://localhost:8080/api/v1/authenticated',
                    {
                        headers: {
                            //"Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log('WAT IS IN THIS RESPONSE in profile?', response);
                setContent(response.data);
            } catch (e) {
                console.log('Helaas het is niet gelukt ', e)
            }
        }
        fetchPrivateStuff();
    }, []);

    console.log("WHAT IS CONTENT??", content);
    return (
        <div className='p-container'>
            <div className='profile' key={user.username}>
                <div className='greeting'>
                    <p>Hallo {user && theUser}</p>
                </div>
                <div>{user.authorities.map(abilities=>{
                    return(<>
                        {abilities.authority ==='ROLE_USER' &&
                        <Link  id ='add-link' to={`/plant-add`}  >
                            Voeg een plant toe</Link>}
                    </>)}
                )}
                </div>
                {/*<div>*/}
                {/*    <p><Link id='add-link' to='/plant-add' >Voeg een plant toe</Link></p>*/}
                {/*</div>*/}
                <div>
                    <Link key={user.username} to={`user/${ user.username }`}   className="btn-to-user-detail">
                        {/*<GrEdit/>*/}
                        Mijn gegevens
                    </Link>
                </div>
                <div>{user.authorities.map(abilities=>{
                    return(<>
                        {abilities.authority ==='ROLE_ADMIN' &&
                        <Link to={`/users`}   className='btn-to-users'>
                            Ledenlijst</Link>}
                    </>)}
                )}
                </div>
                <div>
                    <Link to={`/`}  className="btn-to-home">
                        Plantoverzicht
                    </Link>
                </div>
            </div>
        </div>

    );
}
export default Profile
