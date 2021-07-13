import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
//import ValidateInfo from './ValidateInfo';
//import UseForm from './UseForm';
import './Form.css';
import {AuthContext} from "../context/AuthContext";
import axios from "axios";
import {Link} from "react-router-dom";



const Signin = () => {
    const {handleSubmit, register} = useForm();
    const {login} = useContext(AuthContext);

    async function sendInfo(data) {
        console.log(data);
        try {
            const result = await axios.post('http://localhost:8089/api/v1/authenticate', data);
            console.log(result)
            login(result.data.jwt)
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="form-content-right">
            <form onSubmit={handleSubmit(sendInfo)}>
                <div className="form-inputs">

                    <h2>
                        Heb je al een account? Log hier in.
                    </h2>
                    <label className="form-label" htmlFor="e-mail">e-mail:
                        <input
                            className="form-input"
                            type="text"
                            placeholder="Je mail adres..."
                            {...register("username")}
                        />
                    </label>
                </div>
                <div className="form-inputs">
                    <label className="form-label" htmlFor="wachtwoord">wachtwoord:
                        <input className="form-input"
                               type="text"
                               placeholder="Je wachtwoord..."
                               {...register("password")}
                        />
                    </label>
                </div>
                <div>
                    <button  className="form-input-btn">inloggen</button>
                </div>
            </form>
            <p>
                Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan
                eerst.
            </p>
        </div>
    )
}
export default Signin
