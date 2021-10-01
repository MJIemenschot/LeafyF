import React, {useContext, useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import '../AddItem.css';

import {GrEdit, GrUpload} from "react-icons/gr";

function ItemUpdate (props) {
    console.log("props in IUpdate",props.current);
    const currentData =props.current;
    const { handleSubmit, formState: { errors }, register, reset } = useForm(
          {defaultValues : currentData}
    );
     const [loading, toggleLoading] = useState(false);
     const [error, setError] = useState('');
     const [Success, toggleSuccess] = useState(false);
     const [result, setResult] = useState('currentData');
    const onSubmit = (data) => setResult(JSON.stringify(data));
    //const token = localStorage.getItem("token")


    async function sendUpdated (formData) {
        setError('');
        toggleLoading(true);


        try {
            const res = await axios.put('http://localhost:8080/api/v1/items/update',formData
            //     , {
            //     headers: {
            //         "Content-Type": "application/json",
            //         Authorization: `Bearer ${token}`,
            //     }
            // }
            );
            console.log('res in update',res)
            toggleSuccess(true);
        } catch (e) {
            console.log(console.error(e))
            setError(`Het updaten is gelukt. 
            // Probeer het opnieuw (${e.message}
            )`);
        }
    }

    const formData = new FormData();

    const formSubmit = (data) => {
        formData.append("id", data.id)
        formData.append("description", data.description)
        formData.append("name", data.name)
        formData.append("latinName", data.latinName)
        formData.append("difficulty", data.difficulty)
        formData.append("light", data.light)
        formData.append("food", data.food)
        formData.append("watering", data.watering)
        formData.append("file", data.file[0])


        sendUpdated(formData)
    }

    return (
        <div className="add-item-container">
            <div className="add-items">
                <h1>Bewerk plant</h1>
                <form onSubmit={handleSubmit(formSubmit)} className="add-item" >
                    <input  type="text"
                            className="add-item-field"
                            //defaultValue={currentData.id}

                            {...register("id", {

                            })}
                    />
                    <input  type="text"
                            className="add-item-field"
                            //defaultValue = {currentData.name}

                            {...register("name", {

                            })}
                    />{errors.address && <p className="errorMessage">Het veld is niet ingevuld</p>}
                    <input  type="text"
                            className="add-item-field"
                        //defaultValue = {currentData.name}

                            {...register("latinName", {

                            })}
                    />{errors.address && <p className="errorMessage">Het veld is niet ingevuld</p>}

                    <textarea   className="add-item-field"
                                cols="30" rows="10"
                                //defaultValue = {currentData.description}

                                {...register("description")}
                    />
                    {errors.address && <p className="errorMessage">Vergeet niet een verzorgingshandleiding of beschrijving in te vullen</p>}

                    <div className="selectField">
                        <h3>Verzorging</h3>
                        <input  className="choose"
                                type="radio"
                                id="easy"
                                //defaultValue = {currentData.easy}
                                //defaultChecked={currentData.difficulty === "EASY"}
                                value="EASY" {...register("difficulty")}/>
                        <label htmlFor="easy">Makkelijk</label>
                        <input  className="choose"
                                type="radio"
                                id="moderate"
                                //defaultValue = {currentData.moderate}
                                //defaultChecked={currentData.difficulty === "MODERATE"}
                                value="MODERATE" {...register("difficulty")}/>
                        <label htmlFor="moderate">Gemiddeld</label>
                        <input  className="choose"
                                type="radio"
                                id="hard"
                                //defaultValue = {currentData.hard}
                                //defaultChecked={currentData.difficulty === "HARD"}
                                value="HARD" {...register("difficulty")}/>
                        <label htmlFor="hard">Moeilijk</label>
                    </div>


                    <div className="selectField">
                        <h3>Standplaats</h3>
                        <input  className="choose"
                                type="radio"
                                id="directsun"
                                //defaultValue = {currentData.directsun}
                                value="DIRECTSUN" {...register("light")}/>
                        <label htmlFor="directsun">Direct Zonlicht</label>
                        <input  className="choose"
                                type="radio"
                                id="halfsunny"
                                //defaultValue = {currentData.halfsunny}
                                value="HALFSUNNY" {...register("light")}/>
                        <label htmlFor="halfsunny">Half zonnig</label>
                        <input  className="choose"
                                type="radio"
                                id="sunny"
                                //defaultValue = {currentData.sunny}
                                value="SUNNY" {...register("light")}/>
                        <label htmlFor="sunny">Half zonnig</label>
                        <input  className="choose"
                                type="radio"
                                id="shadow"
                                //defaultValue = {currentData.shadow}
                                value="SHADOW" {...register("light")}/>
                        <label htmlFor="shadow">Schaduw</label>
                    </div>
                    <div className="selectField">
                        <h3>Waterbehoefte</h3>
                        <input  className="choose"
                                type="radio"
                                id="day"
                                value="DAY" {...register("watering")}/>
                        <label htmlFor="day">Iedere dag</label>
                        <input  className="choose"
                                type="radio"
                                id="twodays"
                                value="TWODAYS" {...register("watering")}/>
                        <label htmlFor="twodays">Om de dag</label>
                        <input
                            className="choose"
                            type="radio"
                            id="threedays"
                            value="THREEDAYS" {...register("watering")}/>
                        <label htmlFor="threedays">Eens in de 3 dagen</label>
                        <input  className="choose"
                                type="radio"
                                id="week"
                                value="WEEK" {...register("watering")}/>
                        <label htmlFor="week">Elke week</label>
                        <input  className="choose"
                                type="radio"
                                id="month"
                                value="MONTH" {...register("watering")}/>
                        <label htmlFor="month">Elke maand</label>
                    </div>
                    <div className="selectField">
                        <h3>Bijmesten</h3>
                        <input  className="choose"
                                type="radio"
                                id="week"
                                value="WEEK" {...register("food")}/>
                        <label htmlFor="week">Iedere week</label>
                        <input  className="choose"
                                type="radio"
                                id="twoweeks"
                                value="TWOWEEKS" {...register("food")}/>
                        <label htmlFor="twoweeks">Om de week</label>
                        <input  className="choose"
                                type="radio"
                                id="month"
                                value="MONTH" {...register("food")}/>
                        <label htmlFor="month">Iedere maand</label>
                        <input  className="choose"
                                type="radio"
                                id="never_special"
                                value="NEVER_SPECIAL" {...register("food")}/>
                        <label htmlFor="never_special">Nooit/speciaal</label>
                    </div>
                    <p>{result}</p>

                    <div className="upload">
                        <input type="file" {...register("file", {
                        })} accept="image/jpeg"
                        />
                        {errors.address && <p className="errorMessage">Er ging iets mis met uploaden. Probeer het opnieuw.</p>}
                        <GrUpload/>
                    </div >
                    <button className="form-btn">Wijzig de plant</button>
                    {Success === true && <p>De plant is succesvol gewijzigd!</p>}
                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>
        </div>
    )
}

export default ItemUpdate;