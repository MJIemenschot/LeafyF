import React, {useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import './ItemAdd.css';

import {GrUpload} from "react-icons/gr";

function AddPost () {


    const { handleSubmit, formState: { errors }, register } = useForm();
    const { posts, setPosts} = useState([]);
    //const {difficulty, setDifficulty} = useState("makkelijk")
    const [easy, toggleEasy] = useState(true);
    const [moderate, toggleModerate] = useState(false);
    const [hard, toggleHard] = useState(false);


    async function sendInfo (formData) {

        try {
            await axios.post('http://localhost:8080/savepost', formData)
        } catch (e) {
            console.log(console.error(e))
        }
    }

    const formData = new FormData();

    const formSubmit = (data) => {

        console.log("dit gaat in het formuliertje!")
        formData.append("description", data.description)
        formData.append("name", data.name)
        //formData.append("difficulty", data.difficulty[0])
         formData.append("easy", true)
         formData.append("moderate", false)
         formData.append("hard", false)
        formData.append("image", data.image[0])

        sendInfo(formData)
    }

    return (
        <div className="add-item-container">
            <div className="add-items">
                <h1>Voeg jouw plantpost toe</h1>
                <form onSubmit={handleSubmit(formSubmit)} className="add-item">

                    <div className="add-items">

                        <input  type="text"
                                className="add-item-field"
                                placeholder="Voeg hier de plantnaam toe:"
                                {...register("name", {
                                    required:true
                                })}
                        />{errors.address && <p className="errorMessage">Het veld is niet ingevuld</p>}
                    </div>
                    <textarea className="add-item-field"
                                cols="30" rows="10"
                                placeholder="Voeg hier de omschrijving toe:"
                                {...register("description")}
                    />
                    <div>
                        {/*<select th:field="*{difficulty}">*/}
                        {/*<option th:each="difficulty : ${Difficulty}"*/}
                        {/*th:text="difficulty.name"></option>*/}
                        {/*</select>*/}

                    </div>
                    <div className="upload">
                        <input type="file" {...register("image", {
                            required:true
                        })}
                        />
                        <GrUpload/>
                    </div >
                    <div className="checkboxItem">
                        <input  type="checkbox"
                                checked={easy}
                                onChange={(e)=> easy?toggleEasy(false) && toggleEasy(e.target.checked):toggleEasy(e.target.checked)}
                        />Makkelijk
                    </div>
                    <div className="checkboxItem">
                        <input  type="checkbox"
                                checked={moderate}
                                onChange={(e)=> moderate?toggleModerate(false) && toggleModerate(e.target.checked):toggleModerate(e.target.checked)}
                        />Gemiddeld
                    </div>
                    <button className="form-btn">Voeg aanbod toe</button>
                </form>
            </div>
        </div>
    )
}

export default AddPost;