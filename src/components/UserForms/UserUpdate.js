import React, {useContext, useEffect, useState} from 'react';
import './UserUpdate.css';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {Link, useHistory, useParams, withRouter} from 'react-router-dom';
import {GrTrash} from "react-icons/gr";
import {AuthContext} from "../../context/AuthContext";


const UserUpdate = () => {
    console.log('props in userupdate')
    const {handleSubmit, formState: {errors}, register, reset} = useForm();
    const [password, setPassword] = useState("");
    const history = useHistory();
    const {username} = useParams();
    console.log('username in userupdate',username)
    const [succes, toggleSuccess] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const {
        user
    } = useContext(AuthContext);


    //  state for form
    const [currentAuthority, setCurrentAuthority] = useState([]);

    // // effect runs on component mount

    // useEffect(() => {
    //     async function getCurrent() {
    //
    //         try {
    //             const response = await axios.get(`http://localhost:8080/api/v1/users/${username}/authorities`);
    //             console.log('response in updateUser getCurrentautority', response.data)
    //             console.log('data authority', response.data)
    //
    //             setCurrentAuthority(response.data.authority)
    //
    //         } catch (error) {
    //             console.error('Er ging iets mis, geen data gevonden', error)
    //         }
    //     }
    //     getCurrent();
    // }, []);

    async function updateInfo(data) {
        setError('');
        toggleLoading(true);
        const token = localStorage.getItem("token")

        console.log('dit gaat in user updateAuth',data);

        try {
            const result = await axios.delete(`http://localhost:8080/api/v1/users/${username}/authorities/ROLE_USER`, {

                //     , {
                //     headers: {
                //         "Content-Type": "application/json",
                //         Authorization: `Bearer ${token}`,
                //     }
                // }

            });
            toggleSuccess(true);

        } catch (e) {
            console.error(e);
            setError(`Het blokkeren is mislukt. Probeer het opnieuw (${e.message})`);
        }

        toggleLoading(false);
    }


    return (
        <div >
            <div className='update-user'>


                {!succes ?
                    <>
                        <h3 className='block'>Weet je zeker dat je <span>{username}</span> wil blokkeren?</h3>
                        <Link to='/users' className='cancel'>Nee, terug naar ledenlijst</Link>
                        <button
                            className='block-btn'
                            type='submit'
                            onClick={updateInfo}
                            // onReset={reset}
                        >
                            Ja blokkeer de gebruiker
                        </button>
                    </>
                   : <>
                        <p className='update-text'><strong>{username} </strong>is nu geblokkeerd.</p>
                        <p>Terug naar de <Link to='/users'>ledenlijst</Link></p>
                    </>}

            </div>

        </div>

    )


}
export default UserUpdate

