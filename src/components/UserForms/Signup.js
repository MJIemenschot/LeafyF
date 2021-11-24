import React, {useState} from 'react';
import './Form.css';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'


const Signup = () => {
    const {handleSubmit, formState: {errors}, register} = useForm();
    const [password, setPassword] = useState("");
    const history = useHistory();

    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const [registerSuccess, toggleRegisterSuccess] = useState(false);

    async function sendInfo(data) {
        setError('');
        toggleLoading(true);

        console.log("dit gaat in user registratie",data);

        try {
            const result = await axios.post('http://localhost:8080/api/v1/users', {
                email: data.emailRegistration,
                password: data.confirmPassword,
                username: data.emailRegistration,
                authorities: [
                    {
                        username: data.emailRegistration,
                        authority: 'ROLE_USER',
                    }
                ]
            });
            toggleRegisterSuccess(true);
            {/* hier kan ik ook in het history push path automatisch doorverwijzen naar het inlogpagina als ik het registreerformulier wil laten verdwijnen*/}
            // setTimeout(() => {
            //     history.push('/');
            // }, 2000);

        } catch (e) {
            console.error(e);
            setError(`Het registeren is mislukt. Probeer het opnieuw (${e.message})`);
        }

        toggleLoading(false);
    }

    const validatePassword = (value) => {
        if (password !== value) return false;
    }

    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit(sendInfo)}>
                <h1>
                    Word lid van de club!
                </h1>
                <div className='form-inputs'>
                    <label className='form-label' htmlFor='e-mail'>e-mail:
                        <input className='form-input'
                               id='signup'
                               type='text'
                               placeholder='vul hier je mail adres in...'
                               {...register('emailRegistration', {
                                   required: true,
                                   validate: (value) => value.includes('@'),
                               })}
                        />{errors.emailRegistration &&
                        <p className='errorMessage'>Het e-mail adres is verplicht en moet een geldig zijn</p>}

                    </label>
                </div>
                <div className='form-inputs'>
                    <label className='form-label' htmlFor='wachtwoord'>wachtwoord:
                        <input className='form-input'
                               type='text'
                               placeholder='Vul hier een wachtwoord in...'
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label className='form-label' htmlFor='wachtwoord'>bevestig wachtwoord:
                        <input className='form-input'
                               type='text'
                               placeholder='Herhaal hier het wachtwoord...'
                               {...register('confirmPassword', {
                                   required: true,
                                   validate: (value => validatePassword(value))
                               })}
                        />{errors.confirmPassword &&
                        <p className='error-message'>De opgegeven wachtwoorden komen niet overeen</p>}
                    </label>
                </div>

                <button disable={loading} type='submit' className='form-input-btn'
                        disabled={loading}>{loading ? 'Versturen..' : 'Registreer'}</button>
                {registerSuccess === true && <p>Registeren is gelukt! Je kan nu <HashLink to='/user-portal/#signin'> inloggen! </HashLink> </p>}

                {/*{loading && <p>Een moment geduld aub!</p>}*/}

                {error && <p className='error-message'>{error}</p>}

            </form>
            {/*<Link to='/'>Terug naar plantenoverzicht</Link>*/}
            {/*<p>Heb je al een account? Je kunt je <Link to="/">hier</Link> inloggen.</p>*/}
        </div>

    )


}
export default Signup

