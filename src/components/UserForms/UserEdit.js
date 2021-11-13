import React, {useEffect, useState} from 'react';
import './UserEdit.css';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {Link, useHistory, useParams, withRouter} from 'react-router-dom';


const UserUpdate = (props) => {
    // const {handleSubmit, formState: {errors}, register, reset} = useForm();
    const [password, setPassword] = useState("");
    const history = useHistory();
    const {username} = useParams();
    console.log('username in userEdit',username)
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const [registerSuccess, toggleRegisterSuccess] = useState(false);


    useEffect(() => {
        async function updateInfo() {
            setError('');
            toggleLoading(true);
            const token = localStorage.getItem("token")

            try {
                const result = await axios.patch(`http://localhost:8080/api/v1/users/${username}/authorities` , {
                //         headers: {
                //             "Content-Type": "application/json",
                //             Authorization: `Bearer ${token}`,
                //         }
                //     }
                // );
                    //email: data.emailRegistration,
                    // password: data.confirmPassword,
                    //username: data.emailRegistration,
                    // authorities:
                    //     [
                    //         {
                                username: username.emailRegistration,
                                authority: "ROLE_USER",
                            // }
                        // ]
                });
                toggleRegisterSuccess(true);

            } catch (e) {
                console.error(e);
                setError(`Het deblokkeren is mislukt omdat de gebruiker niet geblokkeerd is. (${e.message})`);
            }

            toggleLoading(false);
        }

         updateInfo();
    }, []);



    return (

        <div className='edit-container'>

             {registerSuccess ? <p className='edit-text'>Het is gelukt! <strong>{username} </strong> is weer lid van de club.</p>:
                 <button className='unblock'
                 // onclick={updateInfo()}
                 //      disable={loading}
                         type='submit' className='form-input-btn'
                      // disabled={loading}
                 >{loading ? 'Versturen..' : 'Deblokkeer'}
                 >
             </button>}
             {/*{loading && <p>Een moment geduld aub!</p>}*/}
             {error && <p className='error-message'>{error}</p>}
            <p className='edit-text'>Terug naar de <Link to='/users'>ledenlijst</Link></p>
        </div>




        //     </form>
        //
        // </div>

    )


}
export default UserUpdate

