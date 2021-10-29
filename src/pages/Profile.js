import React, {useContext, useEffect, useState} from 'react'
import {AuthContext} from "../context/AuthContext";
import {Link} from "react-router-dom";
import axios from "axios";

import Plants from "../components/Plants";
import {GrEdit} from "react-icons/gr";
import PlantDelete from "../components/PlantDelete/PlantDelete";

const Profile = () => {
    //authState: ipv const?
    const  { user } = useContext(AuthContext);
    const [content, setContent] = useState(null);
    console.log("USER STUFF IN PROFILE:", user);

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
        <div className='container'>
            <h1>Profiel</h1>
            <div className='profile' key={user.username}>
                    <h2>Gegevens</h2>
                    <p>Hallo <strong>{user && user.username}</strong></p>
                    <p>klik <Link id="add-link" to="/plant-add">hier</Link> om een plant toe te voegen.</p>
                <div>
                    <Link key={user.username} to={`user/${ user.username }`}   className="btn-to-user-detail">
                        <GrEdit/>mijn gegevens
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
export default Profile
