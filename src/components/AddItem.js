import React, {useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import './ItemAdd.css';

import {GrUpload} from "react-icons/gr";

function AddItem () {


    const { handleSubmit, formState: { errors }, register, reset } = useForm();
    const { posts, setPosts} = useState([])

    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));


    async function sendInfo (formData) {

        try {
            await axios.post('http://localhost:8080/api/v1/items/add', formData)
        } catch (e) {
            console.log(console.error(e))
        }
    }

    const formData = new FormData();

    const formSubmit = (data) => {

        formData.append("description", data.description)
        formData.append("name", data.name)
        formData.append("difficulty", data.difficulty)
        formData.append("file", data.file[0])


        sendInfo(formData)
    }

    return (
        <div className="add-item-container">
            <div className="add-items">
            <h1>Voeg jouw plant toe</h1>
        <form onSubmit={handleSubmit(formSubmit)} onReset={reset} className="add-item">

            <div className="add-items">

                <input  type="text"
                        className="add-item-field"
                        placeholder="Voeg hier de plantnaam toe:"
                        {...register("name", {
                            required:true
                        })}
                />{errors.address && <p className="errorMessage">Het veld is niet ingevuld</p>}
            </div>
            <textarea   className="add-item-field"
                        cols="30" rows="10"
                        placeholder="Voeg hier de verzorgingshandleiding van jouw plant toe:"
                        {...register("description")}
            />
            {errors.address && <p className="errorMessage">Vergeet niet de verzorgingshandleiding in te vullen</p>}
            {/*<select {...register("difficulty")}>*/}
            {/*    <option value="EASY">Makkelijk</option>*/}
            {/*    <option value="MODERATE">Gemiddeld</option>*/}
            {/*    <option value="HARD">Moeilijk</option>*/}
            {/*</select>*/}
            <input  type="radio"
                    id="easy"
                    value="EASY" {...register("difficulty")}/>
                <label htmlFor="easy">Makkelijk</label>
            <input  type="radio"
                    id="moderate"
                    value="MODERATE" {...register("difficulty")}/>
            <label htmlFor="moderate">Gemiddeld</label>
            <input  type="radio"
                    id="hard"
                    value="HARD" {...register("difficulty")}/>
            <label htmlFor="hard">Moeilijk</label>


            <p>{result}</p>

            <div className="upload">
                <input type="file" {...register("file", {
                    required:true
                })}
                />
                {errors.address && <p className="errorMessage">Er ging iets mis met uploaden. Probeer het opnieuw.</p>}
                <GrUpload/>
            </div >

            <button className="form-btn">Voeg aanbod toe</button>
        </form>
            </div>
        </div>
    )
}

export default AddItem;