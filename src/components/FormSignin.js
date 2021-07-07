import React from 'react';
import ValidateInfo from './ValidateInfo';
import UseForm from './UseForm';
import './Form.css';

const FormSignin = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = UseForm(
        submitForm,
        ValidateInfo
    );

    return (
        <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h2>
                    Heb je al een account? Log hier in.
                </h2>

                <div className='form-inputs'>
                    <label className='form-label'>Email</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
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
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <button className='form-input-btn' type='submit'>
                    Log in
                </button>


            </form>
        </div>
    );
};

export default FormSignin;