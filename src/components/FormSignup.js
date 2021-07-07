import React from 'react';
import ValidateInfo from './ValidateInfo';
import UseForm from './UseForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = UseForm(
        submitForm,
        ValidateInfo
    );

    return (
        <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h2>
                    Maak je account aan en start direct.
                </h2>
                <div className='form-inputs'>
                    <label className='form-label'>Gebruikersnaam</label>
                    <input
                        className='form-input'
                        type='text'
                        name='username'
                        placeholder='Kies een gebruikersnaam'
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Email</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Vul hier je mailadres in'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Wachtwoord</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Gebruik minimaal 6 tekens'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Bevestig wachtwoord</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password2'
                        placeholder='Bevestig je wachtwoord'
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className='form-input-btn' type='submit'>
                    Sign up
                </button>
                <span className='form-input-login'>
          {/*Heb je al een account? Log <a href='#'>hier in</a>*/}
        </span>
            </form>
        </div>
    );
};

export default FormSignup;