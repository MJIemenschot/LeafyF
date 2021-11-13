import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
//import ValidateInfo from './ValidateInfo';
import './Form.css';
import {AuthContext} from '../../context/AuthContext';
import axios from 'axios';
import {Link, useHistory} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';



const Signin = () => {
    const {handleSubmit, register, formState: {errors}} = useForm();
    const {login} = useContext(AuthContext);
    const [loading, toggleLoading] = useState(false);
    const history = useHistory();
    ///
    const [success, toggleSucces] = useState(false);
    ///
    const [error, setError] = useState('');

    async function sendInfo(data) {
        try {
            console.log('data uit formulier?',data);
            const result = await axios.post('http://localhost:8080/api/v1/authenticate', data);
            console.log('result in signin formulier', result)
            login(result.data.jwt)
            toggleSucces(true)
             setTimeout(() => {
                 history.push('/');
             }, 2000);
        } catch (e) {

            setError('Onjuist mailadres of wachtwoord',e)
        };
    }

    return (
        <div className='form-content-right'>
            <form onSubmit={handleSubmit(sendInfo)}>
                <div className='form-inputs'>

                    <h2>
                        Heb je al een account? Log hier in.
                    </h2>
                    <label className='form-label' htmlFor='e-mail'>e-mail:
                        <input
                            className='form-input'
                            type='text'
                            id='signin'
                            placeholder='Je mail adres...'
                            {...register('username')}
                        />
                        {errors.emailRegistration &&
                         <p className='errorMessage'>Dit e-mail adres is hier niet bekend</p>}
                        {error && <p className='error-message'>{error}</p>}

                    </label>
                </div>
                <div className='form-inputs'>
                    <label className='form-label' htmlFor='wachtwoord'>wachtwoord:
                        <input className='form-input'
                               type='text'
                               placeholder='Je wachtwoord...'
                               {...register('password')}
                        />
                        {errors.emailRegistration &&
                        <p className='errorMessage'>Dit wachtwoord is niet geldig</p>}
                        {error && <p className='error-message'>{error}</p>}

                    </label>
                </div>
                <div>
                    <button  className='form-input-btn'>inloggen</button>
                </div>
            </form>
            <p>
                Heb je nog geen account?
                <HashLink to='/user-portal/#signup'> Registreer </HashLink>
                je dan eerst, door lid te worden van de club.
            </p>
            {/*{error && <p className='error-message'>{error}</p>}*/}

            {/*<Link to={`/reset-password/*/}
            {/* }`} className='btn btn-primary'>*/}
            {/*    Nieuw wachtwoord aanmaken*/}
            {/*</Link>*/}

        </div>
    )
}
export default Signin
