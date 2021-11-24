import './EditPlant.css';
import React, {useContext, useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';


import {GrEdit, GrUpload} from "react-icons/gr";

import {Link, useHistory, useParams} from 'react-router-dom';


function PlantEdit (props) {
    console.log('props in PlantEdit',props.current);
    //const currentPlant =props.current;
    // const currentFile = props.cFile;
    //props.cFile = React.createRef();
    console.log('Dit is currentfile',props.cFile);
    const [isSelected, setIsSelected] = useState(false);
    const { handleSubmit, formState: { errors }, register, reset } = useForm();

    // const {contents} = useContext(ItemsContext);
    // console.log('contents  in Edititem', {contents} );
    // const Itemid = {id};
    const [currentPlant,setCurrentPlant ] = useState([]);
    // const [edit,setEdit ] = useState([]);
    const { id } = useParams();
    const history = useHistory();
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const [Success, toggleSuccess] = useState(false);
    const [result, setResult] = useState('currenPlant');
    const onSubmit = (data) => setResult(JSON.stringify(data));
    const [submitting, setSubmitting] = useState(false);
    let changeUrl = () => {
        history.push(`/plant/${id}`);
    }

    // effect runs on component mount

    useEffect(() => {
        async function getCurrent() {

            try {
                const response = await axios.get(`http://localhost:8080/api/v1/plants/${id}`);
                console.log('response in editplant getCurrentplant', response.data)

                setCurrentPlant(response.data)

            } catch (error) {
                console.error('Er ging iets mis, geen data gevonden', error)
            }
        }

        getCurrent();
    }, []);

    function refresh() {
        window.location.reload(false);
    }

    async function updateIt (formData) {
        setError('');
        toggleLoading(true);
            const token = localStorage.getItem("token")

        try {
            const res = await axios.patch(`http://localhost:8080/api/v1/plants/${id}`, formData
                    , {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            console.log('res in update',res)
            toggleSuccess(true);
        } catch (e) {
            console.log(console.error(e))
            setError(`Het updaten is mislukt. Probeer het opnieuw (${e.message})`);
        }
    }
    // function refresh() {
    //     window.location.reload(false);
    // }

    // onValueChange(event) {
    //     this.setState({
    //         selectedOption: event.target.value
    //     });
    // }

    const formData = new FormData();

    const formSubmit = (data) => {
        // formData.append("id", data.id)
        formData.append('description', data.description)
        formData.append('care', data.care)
        formData.append('potting', data.potting)
        formData.append('name', data.name)
        formData.append('latinName', data.latinName)
        formData.append('difficulty', data.difficulty)
        formData.append('light', data.light)
        formData.append('food', data.food)
        formData.append('watering', data.watering)
        //formData.append("file", data.file[0])


        updateIt(formData)
    }
    useEffect(() => {
        // reset form with plant data
        reset(currentPlant);
    }, [currentPlant]);

    return (
        <div className='add-item-container'>

            <div className='add-items'>
                <h1 className='page-header'>Bewerk plant</h1>
                {currentPlant &&
                <form onSubmit={handleSubmit(formSubmit)}

                      onReset={reset}
                      className='add-item'>

                    <input  type='text'
                            className='add-item-field'
                            {...register('name', {
                            })}
                    />{errors.name && <p className='error-message'>Het veld is niet ingevuld</p>}
                    <input  type='text'
                            className='add-item-field'
                            {...register('latinName', {

                            })}
                    />{errors.latinName && <p className='error-message'>Het veld is niet ingevuld</p>}
                    <label>Beschrijving</label>
                    <textarea   type='description'
                                className="add-item-field"
                                cols="30" rows="5"
                                placeholder='Voeg hier een beschrijving van jouw plant toe:'
                                {...register('description',{
                                    maxLength:{
                                        value: 495,
                                        message: 'Maak je beschrijving wat korter',
                                    }
                                })}
                    />{errors.description ? <p className='error-message'>{errors.description.message}</p>:null}
                    <label>Verzorgingshandleiding</label>
                    <textarea   type='care'
                                className='add-item-field'
                                cols='30' rows='5'
                                placeholder='Voeg hier een  verzorgingshandleiding van jouw plant toe:'
                                {...register('care',{maxLength:{
                                        value: 495,
                                        message: 'Maak je verzorgingshandleiding wat korter',
                                    }
                                })}
                    />
                    {errors.care ? <p className='error-message'>{errors.care.message}</p>:null}
                    <textarea   type='potting'
                                className='add-item-field'
                                cols='30' rows='5'
                                placeholder='Informatie over grond en verpotten:'
                                {...register('potting',{maxLength:{
                                        value: 495,
                                        message: 'Maak de tekst wat korter',
                                    }
                                })}
                    />{errors.potting ? <p className='error-message'>{errors.potting.message}</p>:null}

                    <div className='select-field'>


                    </div>
                    <div className='form-row'>
                        <div className='form-group col'>
                            <label>Overleving</label>
                            <select name='difficulty' {...register('difficulty')} className='add-item-field'>
                                <option value='EASY'>Makkelijk</option>
                                <option value='MODERATE'>Gemiddeld</option>
                                <option value='HARD'>Moeilijk</option>
                            </select>
                        </div>
                        <div className='form-group col'>
                            <label>Waterbehoefte</label>
                            <select name='watering' {...register('watering')} className='add-item-field'>
                                <option value='DAY'>Elke dag</option>
                                <option value='TWODAYS'>Om de dag</option>
                                <option value='THREEDAYS'>Eens in drie dagen</option>
                                <option value='WEEK'>eens per week</option>
                                <option value='MONTH'>Elke maand</option>
                            </select>
                        </div>
                        <div className='form-group col'>
                            <label>Standplaats</label>
                            <select name='"light" '{...register('light')} className='add-item-field'>
                                <option value='DIRECTSUN'>Direct zonlicht</option>
                                <option value='SUNNY'>Zonnig</option>
                                <option value='HALFSUNNY'>Halfzonnig</option>
                                <option value='SHADOW'>Shaduw</option>
                            </select>
                        </div>
                        <div className='form-group col'>
                            <label>Bijmesten</label>
                            <select name='food' {...register('food')} className='add-item-field'>
                                <option value='WEEK'>Elke week</option>
                                <option value='TWOWEEKS'>Om de week</option>
                                <option value='MONTH'>Eens per maand</option>
                                <option value='NEVER_SPECIAL'>Nooit/speciaal</option>
                            </select>
                        </div>
                    </div>


                    {/*<div className="upload">*/}
                    {/*    <img src={currentPlant.downloadUri} alt={currentPlant.name} width="80px"/>*/}

                    <button className='form-btn'>Wijzig de plant</button>
                    {Success === true &&
                        <>
                            <p>De plant is succesvol gewijzigd!</p>

                        </>

                    }
                    {error && <p className='error-message'>{error}</p>}
                    {/*{!Success && <button type='button' onClick={() => reset()} className='btn btn-secondary'>Zet terug</button>}*/}
                    {/*{!Success ? <Link to='/'*/}
                    {/*>Cancel</Link>:<button type='button' onClick={() => reset()} className='btn btn-secondary'>Zet terug</button>}*/}

                </form>
                }
                {!currentPlant &&<p>Geen plant om te wijzigen...</p>}
                {!Success &&
                <button type='button' onClick={() => reset()} className='reset-btn'>Zet terug</button>
                }
                <div>
                    {Success ?<button onClick={changeUrl}>Bekijk de plant</button>: <Link to='/'
                    >Cancel</Link>}
                </div>






            </div>
        </div>
    )
}

export default PlantEdit;