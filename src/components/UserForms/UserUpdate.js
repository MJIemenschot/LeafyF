import React, {useEffect, useState} from 'react';
import './UserUpdate.css';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {Link, useHistory, useParams, withRouter} from 'react-router-dom';
import {GrTrash} from "react-icons/gr";


const UserUpdate = () => {
    console.log('props in useredit')
    const {handleSubmit, formState: {errors}, register, reset} = useForm();
    const [password, setPassword] = useState("");
    const history = useHistory();
    const {username} = useParams();
    console.log('username in useredit',username)
    const [succes, toggleSuccess] = useState(false);

    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    // const [registerSuccess, toggleRegisterSuccess] = useState(false);

    //  state for form
    const [currentAuthority, setCurrentAuthority] = useState(null);

    // // effect runs on component mount

    useEffect(() => {
        async function getCurrent() {

            try {
                const response = await axios.get(`http://localhost:8080/api/v1/users/${username}/authorities`);
                console.log('response in updateUser getCurrentautority', response.data)
                console.log('data authority', response.data.authority)

                setCurrentAuthority(response.data.authority)

            } catch (error) {
                console.error('Er ging iets mis, geen data gevonden', error)
            }
        }

        getCurrent();
    }, []);

    async function updateInfo(data) {
        setError('');
        toggleLoading(true);

        console.log('dit gaat in user update',data);

        try {
            const result = await axios.delete(`http://localhost:8080/api/v1/users/${username}/authorities/ROLE_USER`, {

                //     , {
                //     headers: {
                //         "Content-Type": "application/json",
                //         Authorization: `Bearer ${token}`,
                //     }
                // }

                // authorities: [
                //     {
                //         username: username,
                //         authority: "ROLE_USER",
                //     }
                // ]
            });
            toggleSuccess(true);

        } catch (e) {
            console.error(e);
            setError(`Het blokkeren is mislukt. Probeer het opnieuw (${e.message})`);
        }

        toggleLoading(false);
    }


    return (
        <div className='update-user'>
            <div>
                <button
                    className='delete-auth'
                    type='submit'
                    onClick={updateInfo}
                    // onReset={reset}
                >
                    Blokkeer de gebruiker

                </button>
                {succes &&<p>De gebruiker is succesvol geblokkeerd</p>}
            </div>

        </div>

    )


}
export default UserUpdate

