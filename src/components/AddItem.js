import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import './ItemAdd.css';

function AddItem () {

    const { handleSubmit, formState: { errors }, register } = useForm();
    // const [buttonPopup, toggleButtonPopup] = useState(false);
    const [isSeed, toggleIsSeed] = useState(false);
    const [isEnt, toggleIsEnt] = useState(true);

    async function sendInfo (data) {

        try {
            await axios.post('http://localhost:8089/api/v1/items', formData)
        } catch (e) {
            console.log(console.error(e))
        }
    }

    const formData = new FormData();

    const formSubmit = (data) => {

        console.log("ik zit in de formsubmit!")
        formData.append("description", data.description)
        formData.append("name", data.name)
        formData.append("seed", isSeed)
        formData.append("ent", isEnt)
        formData.append("plant", false)
        formData.append("toPicture", data.toPicture[0])

        sendInfo(formData)
    }

    return (
        <form onSubmit={handleSubmit(formSubmit)}  className="add-item">
            <div className="pictureDisplay">
                <input type="file" {...register("picturePath", {
                    required:true
                })}
                />
            </div >
            <div className="add-items">
                <h1>Voeg een plant toe</h1>
                <input  type="text"
                        className="add-item-field"
                        placeholder="Voeg hier de plantnaam toe:"
                        {...register("name", {
                            required:true
                        })}
                />{errors.address && <p className="errorMessage">Het adres veld is niet ingevuld</p>}
            </div>
            <textarea   className="add-item-field"
                        cols="30" rows="10"
                        placeholder="Voeg hier de omschrijving toe:"
                        {...register("textAboutTheTip")}
            />
            <div className="checkboxTipInMakingOne">
                <input  type="checkbox"
                        checked={isSeed}
                        onChange={(e)=> isSeed?toggleIsSeed(false) && toggleIsSeed(e.target.checked):toggleIsSeed(e.target.checked)}
                />Prive
            </div>
            <div className="checkboxTipInMakingTwo">
                <input  type="checkbox"
                        checked={isEnt}
                        onChange={(e)=> isEnt?toggleIsEnt(false) && toggleIsEnt(e.target.checked):toggleIsEnt(e.target.checked)}
                />Publiek
            </div>
            <button id="plusButton">Voeg aanbod toe</button>
        </form>

    )
}

export default AddItem;