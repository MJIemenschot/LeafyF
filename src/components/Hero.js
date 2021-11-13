import React, {useContext, useEffect, useState} from 'react';
import './Hero.css';

import Loader from "./reusableComponents/Loader";
import {AuthContext} from "../context/AuthContext";
import axios from "axios";
import {Link} from "react-router-dom";



const Hero = () => {

    const  { user } = useContext(AuthContext);
    const [content, setContent] = useState(null);
    console.log("USER STUFF IN PROFILE:", user);
    const splitUser=user.username.split('@');
    const theUser=splitUser[0].charAt(0).toUpperCase()+splitUser[0].slice(1);

    useEffect(() => {
        async function fetchPrivateStuff() {
            console.log("FETCH DATA IN PROFILE");
            try {
                const token = localStorage.getItem("token");
                console.log(token);
                const response = await axios.get(
                    "http://localhost:8080/api/v1/authenticated",
                    {
                        headers: {
                            //"Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log("WAT IS IN THIS RESPONSE in profile?", response);
                setContent(response.data);
            } catch (e) {
                console.log("Helaas het is niet gelukt ", e)
            }
        }

        fetchPrivateStuff();
    }, []);

    console.log("WHAT IS CONTENT??", content);
    return (
        <div className=' p-container'>
            <h1>Profiel</h1>
            <div className='p-profile' key={user.username}>
                <h2>Gegevens</h2>
                <p>Hallo <strong>{user && theUser}</strong></p>
                <p>klik <Link id="add-link" to="/plant-add">hier</Link> om een plant toe te voegen.</p>
                <div>
                    <Link key={user.username} to={`user/${ user.username }`}   className="btn-to-user-detail">
                        {/*<GrEdit/>*/}
                        mijn gegevens
                    </Link>
                </div>
                <div>{user.authorities.map(abilities=>{
                    return(<>
                        {abilities.authority ==='ROLE_ADMIN' &&
                        <Link to={`/users`}   className="btn-to-users">
                            Gebruikerslijst</Link>}
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
export default Hero;