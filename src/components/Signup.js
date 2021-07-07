import React, { useState } from 'react';
import './Form.css';
import { useForm } from 'react-hook-form';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';


const Signup = () => {
    const { handleSubmit, formState: { errors }, register } = useForm();
    const [password, setPassword] = useState("");
    const history = useHistory();

    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const [registerSuccess, toggleRegisterSuccess] = useState(false);

    async function sendInfo (data) {
        setError('');
        toggleLoading(true);

        console.log(data);

        try {
            const result = await axios.post('http://localhost:8089/api/v1/users', {
                email: data.emailRegistration,
                password: data.confirmPassword,
                //residence: data.residence,
                username: data.emailRegistration
            });
            toggleRegisterSuccess(true);

            // setTimeout(() => {
            //     history.push('/');
            // }, 2000);
        } catch(e) {
            console.error(e);
            setError(`Het registeren is mislukt. Probeer het opnieuw (${e.message})`);
        }

        toggleLoading(false);
    }

    const validatePassword = (value)=> {
        if (password !== value) return false;
    }

    // const checkCity = (value) => {
    //     const availableCity = "Amsterdam"
    //     if (value !== availableCity) return false;
    // }

    return (


            <div className="form-content-right">
                <form className="form" onSubmit={handleSubmit(sendInfo)}>
                    <h2>
                        Join the club!
                    </h2>
                    {/*<div className="logInAndRegister">*/}
                    {/*    <NavLink id="loginPageId" className="logInRegister" exact to="/">Login</NavLink>*/}
                    {/*    <NavLink id="registerPageId" className="logInRegister" to="/register">Registreer</NavLink>*/}
                    {/*</div>*/}
                    <div className="form-inputs">
                        <label className="form-label" htmlFor="e-mail">e-mail:
                            <input  className="form-input"
                                    type="text"
                                    placeholder="vul hier je mail adres in..."
                                    {...register("emailRegistration", {
                                        required: true,
                                        validate: (value) => value.includes('@'),
                                    })}
                            />{errors.emailRegistration && <p className="errorMessage">Het e-mail adres is verplicht en moet een "@ "</p>}
                        </label>
                    </div>
                    {/*<label className="labelRegister" htmlFor="woonplaats">woonplaats:*/}
                    {/*    <input  className="inputFieldRegister"*/}
                    {/*            type="text"*/}
                    {/*            placeholder="➡ type hier waar u woont:"*/}
                    {/*            {...register("residence", {*/}
                    {/*                required: true,*/}
                    {/*                validate: (value) => checkCity(value),*/}
                    {/*            })}*/}
                    {/*    />{errors.residence && <p className="errorMessage">Dit veld is verplicht en kan momenteel alleen Amsterdam zijn.</p>}*/}
                    {/*</label>*/}
                    <div className="form-inputs">
                        <label className="form-label" htmlFor="wachtwoord">wachtwoord:
                            <input className="form-input"
                                    type="text"
                                    placeholder="Vul hier een wachtwoord in..."
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="form-inputs">
                        <label className="form-label" htmlFor="wachtwoord">bevestig wachtwoord:
                            <input  className="form-input"
                                    type="text"
                                    placeholder="Herhaal hier het wachtwoord..."
                                    {...register("confirmPassword", {
                                        required: true,
                                        validate: (value => validatePassword(value))
                                    })}
                            />{errors.confirmPassword && <p className="error-message">De opgegeven wachtwoorden komen niet overeen</p>}
                        </label>
                    </div>

                        <button disable={loading} type="submit" className="form-input-btn" disabled={loading}>{loading?"Versturen..":"Registreer"}</button>
                        {registerSuccess === true &&  <p>Registeren is gelukt! Je kan nu inloggen!</p>}
                        {error && <p className="error-message">{error}</p>}

                </form>
                {/*<p>Heb je al een account? Je kunt je <Link to="/">hier</Link> inloggen.</p>*/}
            </div>

    )



}
export default Signup

