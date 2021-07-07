import React, {useContext, useEffect, useState} from 'react'
import {AuthContext} from "../context/AuthContext";
import {Link} from "react-router-dom";
import axios from "axios";

const Profile = () => {
    const  { user } = useContext(AuthContext);
    const [content, setContent] = useState(null);
   // console.log("USER STUFF IN PROFILE:", user);

    useEffect(() => {
        async function fetchPrivateStuff() {
            console.log("FETCH DATA IN PROFILE");
            try {
                const token = localStorage.getItem("token");
                console.log(token);
                const response = await axios.get(
                    "http://localhost:8089/api/v1/authenticated",
                    {
                        headers: {
                            //"Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log("WAT IS IN THIS RESPONSE?", response);
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
            <section>
                <h2>Gegevens</h2>
                <p>
                    Hallo <strong>{user && user.username}</strong>
                </p><p>klik <Link id="add-link" to="/add-item">hier</Link> om je aanbod toe te voegen.</p>
            <p>Mijn aanbiedingen (bewerk)</p>//todo
            </section>
            {/*<section>*/}
            {/*    <h2>{content?.title}</h2>*/}
            {/*    <p>{content?.content}</p>*/}
            {/*</section>*/}
            {/*<p>*/}
            {/*    Terug naar de <Link to="/">Homepagina</Link>*/}
            {/*</p>*/}
        </div>
    );
}
export default Profile
