import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
//import ValidateInfo from './ValidateInfo';
//import UseForm from './UseForm';
import './Form.css';
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import {Link} from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';



const Signin = () => {
    const {handleSubmit, register} = useForm();
    const {login} = useContext(AuthContext);

    async function sendInfo(data) {
        try {
            console.log("data uit formulier?",data);
            const result = await axios.post('http://localhost:8080/api/v1/authenticate', data);
            console.log("result in signin formulier", result)
            login(result.data.jwt)
        } catch (e) {
            console.error("Het is niet gelukt om in te loggen",e);
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

            {/*<Link to={`/reset-password/*/}
            {/* }`} className='btn btn-primary'>*/}
            {/*    Nieuw wachtwoord aanmaken*/}
            {/*</Link>*/}

        </div>
    )
}
export default Signin
