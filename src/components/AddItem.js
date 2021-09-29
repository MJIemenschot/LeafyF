import React, {useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import './AddItem.css';

import {GrUpload} from "react-icons/gr";

function AddItem () {
    const { handleSubmit, formState: { errors }, register, reset } = useForm();
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const [Success, toggleSuccess] = useState(false);
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));
    // const token = localStorage.getItem("token")



    async function sendInfo (formData) {
        setError('');
        toggleLoading(true);
        //of  const token = localStorage.getItem("token")

        try {
            await axios.post('http://localhost:8080/api/v1/items/add', formData ,
            // {
            //     headers: {
            //         "Content-Type": "application/json",
            //             Authorization: `Bearer ${token}`,
            //     }
            // }
            );

            toggleSuccess(true);
        } catch (e) {
            console.log(console.error(e))
            setError(`Het toevoegen is mislukt. Probeer het opnieuw (${e.message})`);
        }
    }

    const formData = new FormData();

    const formSubmit = (data) => {

        formData.append("description", data.description)
        formData.append("name", data.name)
        formData.append("latinName", data.latinName)
        formData.append("difficulty", data.difficulty)
        formData.append("light", data.light)
        formData.append("food", data.food)
        formData.append("watering", data.watering)
        formData.append("file", data.file[0])


        sendInfo(formData)
    }

    return (
        <div className="add-item-container">
            <div className="add-items">
            <h1>Voeg een plant toe</h1>
        <form onSubmit={handleSubmit(formSubmit)} onReset={reset} className="add-item">
                <input  type="text"
                        className="add-item-field"
                        placeholder="Voeg hier de plantnaam toe:"
                        {...register("name", {
                            required:true
                        })}
                />{errors.address && <p className="errorMessage">Het veld is niet ingevuld</p>}
            <input  type="text"
                    className="add-item-field"
                    placeholder="Voeg hier de latijnse naam toe:"
                    {...register("latinName", )}
            />{errors.address && <p className="errorMessage">probeer de naam in te korten</p>}

            <textarea   className="add-item-field"
                        cols="30" rows="10"
                        placeholder="Voeg hier een beschrijving en/of verzorgingshandleiding van jouw plant toe:"
                        {...register("description")}
            />
            {errors.address && <p className="errorMessage">Vergeet niet een verzorgingshandleiding of beschrijving in te vullen</p>}
            <div className="selectField">
                <h3>Verzorging</h3>
                <input  className="choose"
                        type="radio"
                        id="easy"
                        value="EASY" {...register("difficulty")}/>
                <label htmlFor="easy">Makkelijk</label>
                <input  className="choose"
                        type="radio"
                        id="moderate"
                        value="MODERATE" {...register("difficulty")}/>
                <label htmlFor="moderate">Gemiddeld</label>
                <input  className="choose"
                        type="radio"
                        id="hard"
                        value="HARD" {...register("difficulty")}/>
                <label htmlFor="hard">Moeilijk</label>
            </div>


            <div className="selectField">
                <h3>Standplaats</h3>
                <input  className="choose"
                        type="radio"
                        id="directsun"
                        value="DIRECTSUN" {...register("light")}/>
                <label htmlFor="directsun">Direct Zonlicht</label>
                <input  className="choose"
                        type="radio"
                        id="halfsunny"
                        value="HALFSUNNY" {...register("light")}/>
                <label htmlFor="halfsunny">Half zonnig</label>
                <input  className="choose"
                        type="radio"
                        id="sunny"
                        value="SUNNY" {...register("light")}/>
                <label htmlFor="sunny">Half zonnig</label>
                <input  className="choose"
                        type="radio"
                        id="shadow"
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
                    required:true
                })} accept="image/jpeg"
                />
                {errors.address && <p className="errorMessage">Er ging iets mis met uploaden. Probeer het opnieuw.</p>}
                <GrUpload/>
            </div >
            <button className="form-btn">Voeg de plant toe</button>
            {Success === true && <p>De plant is succesvol toegevoegd!</p> }
            {error && <p className="error-message">{error}</p>}
        </form>
            </div>
        </div>
    )
}

export default AddItem;