import React, {useContext, useState} from 'react';
import {useHistory, withRouter, useLocation, useParams, Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './PlantAdd.css';
import {GrUpload} from 'react-icons/gr';
import {AuthContext} from "../../context/AuthContext";

function PlantAdd () {
    const  { user } = useContext(AuthContext);
    console.log('zit hierin een user?',user);
    const person = user.username;
    const { handleSubmit, formState: { errors }, register, reset } = useForm();
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const [Success, toggleSuccess] = useState(false);
    const [result, setResult] = useState('');
    const onSubmit = (data) => setResult(JSON.stringify(data));
    let history = useHistory();


    async function sendInfo (formData) {
        setError('');
        toggleLoading(true);
        const token = localStorage.getItem('token')

        try {
            await axios.post('http://localhost:8080/api/v1/plants', formData ,
            {
                headers: {
                    "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                }
            }
            );
            toggleSuccess(true);
        } catch (e) {
            console.log(console.error('e?',e.response))
            setError(`
            Er gaat iets mis: 
            
             (${e.response})`);
            console.log('de error message?',e.response)
        }
    }
    function refresh() {
        window.location.reload(false);
    }
    let changeUrl = () => {
        history.push(`/`);
    }
    let changeRefr=()=>{
        changeUrl()
        refresh()
    }

    const formData = new FormData();

    const formSubmit = (data) => {
        formData.append('uploadedByUsername', data.uploadedByUsername)
        formData.append('description', data.description)
        formData.append('care', data.care)
        formData.append('potting', data.potting)
        formData.append('name', data.name)
        formData.append('latinName', data.latinName)
        formData.append('difficulty', data.difficulty)
        formData.append('light', data.light)
        formData.append('food', data.food)
        formData.append('watering', data.watering)
        formData.append('file', data.file[0])

        sendInfo(formData)
    }
    return (
        <div className='add-item-container'>
            <div className='add-items'>
            <h1>Voeg een plant toe</h1>
        <form onSubmit={handleSubmit(formSubmit)} onReset={reset} className='add-item'>
            <input
                type='text'
                className='user-id'
                defaultValue={user.username}
                {...register('uploadedByUsername', {
                })}>
            </input>
                <input  type='text'
                        className='add-item-field'
                        placeholder='Voeg hier de plantnaam toe:'
                        {...register('name', {
                            required:true
                        })}
                />{errors.address && <p className='error-message'>Dit veld is verplicht</p>}
            <input  type='text'
                    className='add-item-field'
                    placeholder='Voeg hier de latijnse naam toe:'
                    {...register('latinName', )}
            />{errors.address && <p className='error-message'>probeer de naam in te korten</p>}
            <textarea   type='description'
                        className="add-item-field"
                        cols="30" rows="5"
                        placeholder='Voeg hier een beschrijving van jouw plant toe:'
                        {...register('description',{
                            maxLength:{
                                value: 495,
                                message: 'Maak je beschrijving wat korter, de tekst moet binnen dit veld passen.',
                            }
                        })}
            />{errors.description ? <p className='error-message'>{errors.description.message}</p>:null}

            <textarea   type='care'
                        className='add-item-field'
                        cols='30' rows='5'
                        placeholder='Voeg hier een  verzorgingshandleiding van jouw plant toe:'
                        {...register('care',{maxLength:{
                                value: 495,
                                message: 'Maak je verzorgingshandleiding wat korter, de tekst moet binnen dit veld passen.',
                            }
                        })}
            />{errors.care ? <p className='error-message'>{errors.description.care}</p>:null}
            <textarea   type='potting'
                        className='add-item-field'
                        cols='30' rows='5'
                        placeholder='Informatie over grond en verpotten:'
                        {...register('potting',{maxLength:{
                                value: 495,
                                message: 'Maak de tekst wat korter, de tekst moet binnen dit veld passen.',
                            }
                        })}
            />{errors.potting ? <p className='error-message'>{errors.potting.message}</p>:null}
            <div className='selectField'>
                <h3>Verzorging</h3>
                <input  className='choose'
                        type='radio'
                        id='easy'
                        value='EASY' {...register('difficulty')}/>
                <label htmlFor='easy'>Makkelijk</label>
                <input  className='choose'
                        type='radio'
                        id='moderate'
                        value='MODERATE' {...register('difficulty')}/>
                <label htmlFor='moderate'>Gemiddeld</label>
                <input  className='choose'
                        type='radio'
                        id='hard'
                        value='HARD' {...register('difficulty')}/>
                <label htmlFor='hard'>Moeilijk</label>
            </div>
            <div className='selectField'>
                <h3>Standplaats</h3>
                <input  className='choose'
                        type='radio'
                        id='directsun'
                        value='DIRECTSUN' {...register('light')}/>
                <label htmlFor='directsun'>Direct zonlicht</label>
                <input  className='choose'
                        type='radio'
                        id='halfsunny'
                        value='HALFSUNNY' {...register('light')}/>
                <label htmlFor='halfsunny'>Zonnig</label>
                <input  className='choose'
                        type='radio'
                        id='sunny'
                        value='SUNNY' {...register('light')}/>
                <label htmlFor='sunny'>Half schaduw</label>
                <input  className='choose'
                        type='radio'
                        id='shadow'
                        value='SHADOW' {...register('light')}/>
                <label htmlFor='shadow'>Schaduw</label>
            </div>
            <div className='selectField'>
                <h3>Waterbehoefte</h3>
                <input  className='choose'
                        type='radio'
                        id='day'
                        value='DAY' {...register('watering')}/>
                <label htmlFor='day'>Iedere dag</label>
                <input  className='choose'
                        type='radio'
                        id='twodays'
                        value='TWODAYS' {...register('watering')}/>
                <label htmlFor='twodays'>Om de dag</label>
                <input
                    className='choose'
                    type='radio'
                    id='threedays'
                    value='THREEDAYS' {...register('watering')}/>
                <label htmlFor='threedays'>Eens in de 3 dagen</label>
                <input  className='choose'
                        type='radio'
                        id='week'
                        value='WEEK' {...register('watering')}/>
                <label htmlFor='week'>Elke week</label>
                <input  className='choose'
                        type="radio"
                        id='month'
                        value='MONTH' {...register('watering')}/>
                <label htmlFor='month'>Elke maand</label>
            </div>
            <div className='selectField'>
                <h3>Bijmesten</h3>
                <input  className='choose'
                        type='radio'
                        id='week'
                        value='WEEK' {...register('food')}/>
                <label htmlFor='week'>Iedere week</label>
                <input  className='choose'
                        type='radio'
                        id='twoweeks'
                        value='TWOWEEKS' {...register('food')}/>
                <label htmlFor='twoweeks'>Om de week</label>
                <input  className='choose'
                        type='radio'
                        id='month'
                        value='MONTH' {...register('food')}/>
                <label htmlFor='month'>Iedere maand</label>
                <input  className='choose'
                        type='radio'
                        id='never_special'
                        value='NEVER_SPECIAL' {...register('food')}/>
                <label htmlFor='never_special'>Nooit/speciaal</label>
            </div>
            <p>{result}</p>
            <div className='upload'>
                <input type='file' {...register('file', {
                    required:true
                })} accept='image/jpeg'
                />
                {errors.address && <p className='error-message'>Selecteer en upload een afbeelding.</p>}
                <GrUpload/>
            </div>
            <button className='form-btn'
            >Voeg de plant toe</button>
            {Success ?<><p>De plant is succesvol toegevoegd!</p><button onClick={changeRefr}>Naar plantoverzicht</button></>: <Link to='/'
            >Cancel</Link>}
            {/*{Success === true &&*/}
            {/*    <>*/}
            {/*        <p>De plant is succesvol toegevoegd!</p>*/}
            {/*        <button onClick={changeRefr}>Naar plantoverzicht</button>*/}
            {/*    </>*/}
            {/*}*/}
            {/*{error && <p className='error-message'>{error}</p>}*/}
            {!Success && <p className='error-message'>{error}</p>}

        </form>
            </div>
        </div>
    )
}
export default PlantAdd;