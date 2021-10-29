import './PasswordReset.css';
import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {Link, useHistory, useParams, withRouter} from 'react-router-dom';
import axios from "axios";
import {GrUpload} from "react-icons/gr";

function PasswordReset(props) {
    const {handleSubmit, formState: {errors}, register, reset} = useForm();
    const [password, setPassword] = useState("");
    const history = useHistory();
    const {username} = useParams();

    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const [registerSuccess, toggleRegisterSuccess] = useState(false);

    //  state for form
    const [currentUser, setCurrentUser] = useState(null);

    // // effect runs on component mount

    useEffect(() => {
        async function getCurrent() {

            try {
                const response = await axios.get(`http://localhost:8080/api/v1/users/${username}`);
                console.log('response in updateUser getCurrentuser', response.data)

                setCurrentUser(response.data)

            } catch (error) {
                console.error('Er ging iets mis, geen data gevonden', error)
            }
        }

        getCurrent();
    }, []);

    async function updateInfo(data) {
        setError('');
        toggleLoading(true);

        console.log("dit gaat in user update",data);

        try {
            const result = await axios.post('http://localhost:8080/api/v1/users', {
                //     , {
                //     headers: {
                //         "Content-Type": "application/json",
                //         Authorization: `Bearer ${token}`,
                //     }
                // }
                email: data.emailRegistration,
                password: data.confirmPassword,
                username: data.emailRegistration,
                authorities: [
                    {
                        username: data.emailRegistration,
                        authority: "ROLE_USER",
                    }
                ]
            });
            toggleRegisterSuccess(true);
            {/* hier kan ik in het history push path  doorverwijzen naar het inlogpagina als ik het registreerformulier wil laten verdwijnen*/}
            setTimeout(() => {
                history.push('/');
            }, 2000);
        } catch (e) {
            console.error(e);
            setError(`Het updaten is mislukt. Probeer het opnieuw (${e.message})`);
        }

        toggleLoading(false);
    }
   // effect runs when userstate is updated
    useEffect(() => {
        // reset form with user data
        reset(currentUser);
    }, [currentUser]);



    function onSubmit(data) {
        // display form data on submit
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }

    const validatePassword = (value) => {
        if (password !== value) return false;
    }

    return (
        <div className="user-reset">
            <form className="user-reset-form" onSubmit={handleSubmit(updateInfo)}>
                <h1>
                    Stel je gebruikersnaam of wachtwoord opnieuw in
                </h1>
                <div className="form-inputs">
                    <label className="form-label" htmlFor="e-mail">e-mail:
                        <input className="form-input"
                               type="text"
                               placeholder="vul hier je een ander mail adres in..."
                               {...register("emailRegistration", {
                                   required: true,
                                   validate: (value) => value.includes('@'),
                               })}
                        />{errors.emailRegistration &&
                        <p className="errorMessage">Het e-mail adres is verplicht en moet een geldig zijn</p>}
                    </label>
                </div>
                <div className="form-inputs">
                    <label className="form-label" htmlFor="wachtwoord">wachtwoord:
                        <input className="form-input"
                               type="text"
                               placeholder="Vul hier een nieuw wachtwoord in..."
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-inputs">
                    <label className="form-label" htmlFor="wachtwoord">bevestig wachtwoord:
                        <input className="form-input"
                               type="text"
                               placeholder="Herhaal hier het nieuwe wachtwoord..."
                               {...register("confirmPassword", {
                                   required: true,
                                   validate: (value => validatePassword(value))
                               })}
                        />{errors.confirmPassword &&
                        <p className="error-message">De opgegeven wachtwoorden komen niet overeen</p>}
                    </label>
                </div>

                <button disable={loading} type="submit" className="reset-btn"
                        disabled={loading}>{loading ? "Versturen.." : "Pas aan"}</button>
                {registerSuccess === true && <p>Het is gelukt! Je kan nu weer inloggen!</p>}
                {/*{loading && <p>Een moment geduld aub!</p>}*/}

                {error && <p className="error-message">{error}</p>}

            </form>
            {/*<p>Heb je al een account? Je kunt je <Link to="/">hier</Link> inloggen.</p>*/}
        </div>

    )


}
export default PasswordReset;