import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import {useParams} from "react-router-dom";
import axios from "axios";
import {GrUpload} from "react-icons/gr";

function EditPlant() {
    // get functions to build form with useForm() hook
    const { errors, register, handleSubmit, reset } = useForm();
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const [Success, toggleSuccess] = useState(false);
    const {id} = useParams();

    // user state for form
    const [currentPlant, setCurrentPlant] = useState(null);

    // // effect runs on component mount
    // useEffect(() => {
    //     // simulate async api call with set timeout
    //     setTimeout(() => setCurrentPlant({ title: 'Mr', firstName: 'Frank', lastName: 'Murphy' }), 1000);
    // }, []);
    useEffect(() => {
        async function getCurrent() {

            try {
                const response = await axios.get(`http://localhost:8080/api/v1/plants/${id}`);
                console.log('response in van change getCurrent', response.data)

                setCurrentPlant(response.data)

            } catch (error) {
                console.error('Er ging iets mis, geen data gevonden', error)
            }
        }

        getCurrent();
    }, []);

    //
    async function updateIt (formData) {
        setError('');
        // toggleLoading(true);
        //const token = localStorage.getItem("token")

        try {
            const res = await axios.put('http://localhost:8080/api/v1/plants/update', formData
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
            setError(`Het updaten is mislukt. Probeer het opnieuw (${e.message})`);
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


        updateIt(formData)
    }



    // effect runs when user state is updated
    useEffect(() => {
        // reset form with user data
        reset(currentPlant);
    }, [currentPlant]);

    function onSubmit(data) {
        // display form data on submit
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }
    return (
        <div className="add-item-container">
            <h5 className="">Bewerk plant</h5>
            <div className="add-items">
                {currentPlant &&
                // <form onSubmit={handleSubmit(onSubmit)}>
                <form onSubmit={handleSubmit(formSubmit)} onReset={reset} className="add-item">
                        <div className="">
                            <label>Id</label>
                            <input name="id" type="text" {...register('id')} className="add-item-field" />
                        </div>
                    <div className="">
                        <label>Naam</label>
                        <input name="name" type="text" {...register('name')} className="add-item-field" />
                    </div>
                    <div className="">
                        <label>Latijnse naam</label>
                        <input name="latinName" type="text" {...register('latinName')} className="add-item-field" />
                    </div>
                         <div className=""
                              cols="30" rows="10">
                             <label>beschrijving</label>
                             <input name="description" type="text" {...register('description')} className="add-item-field" />
                         </div>
                     <div className="form-row">
                         <div className="form-group col">
                             <label>Verzorging</label>
                             <select name="difficulty" {...register('difficulty')} className="add-item-field">
                                 <option value="EASY">Makkelij</option>
                                 <option value="MODERATE">Gemiddeld</option>
                                 <option value="HARD">Moeilijk</option>
                             </select>
                         </div>
                         <div className="form-group col">
                             <label>Waterbehoefte</label>
                             <select name="watering" {...register('watering')} className="add-item-field">
                                 <option value="DAY">Elke dag</option>
                                 <option value="TWODAYS">Om de dag</option>
                                 <option value="THREEDAYS">Eens in drie dagen</option>
                                 <option value="WEEK">eens per week</option>
                                 <option value="MONTH">Elke maand</option>
                             </select>
                         </div>
                         <div className="form-group col">
                             <label>Standplaats</label>
                             <select name="light" {...register('light')} className="add-item-field">
                                 <option value="DIRECTSUN">Direct zonlicht</option>
                                 <option value="SUNNY">Zonnig</option>
                                 <option value="HALFSUNNY">Halfzonnig</option>
                                 <option value="SHADOW">Shaduw</option>
                             </select>
                         </div>
                         <div className="form-group col">
                             <label>Bijmesten</label>
                             <select name="food" {...register('food')} className="add-item-field">
                                 <option value="WEEK">Elke week</option>
                                 <option value="TWOWEEKS">Om de week</option>
                                 <option value="MONTH">Eens per maand</option>
                                 <option value="NEVER_SPECIAL">Nooit/speciaal</option>
                             </select>
                         </div>
                         <div className="upload">
                             <img src={currentPlant.downloadUri} alt={currentPlant.name} width="80px"/>

                             <input type="file"
                                    {...register("file", {
                                    })} accept="image/jpeg"
                             />
                         {/*    {errors.file && <p className="errorMessage">Er ging iets mis met uploaden. Probeer het opnieuw.</p>}*/}
                             <GrUpload/>
                         </div >


                    </div>
                     <div className="form-group">
                         <button type="submit" className="btn btn-primary mr-1">Pas aan</button>
                         <button type="button" onClick={() => reset()} className="btn btn-secondary">Zet terug</button>
                     </div>
                 </form>
                }
                {!currentPlant &&
                <div className="text-center p-3">
                    <span className="spinner-border spinner-border-lg align-center"></span>
                </div>
                }
            </div>
        </div>
    )

    // return (
    //     <div className="add-item-container">
    //         <div className="add-items">
    //             <h1>Bewerk plant</h1>
    //             <form onSubmit={handleSubmit(formSubmit)} onReset={reset} className="add-item">
    //                 <input  type="text"
    //                         className="add-item-field"
    //                     //defaultValue={currentPlant.id}
    //                     // readonly
    //
    //                         {...register("id", {
    //                         })}
    //                 />
    //                 <input  type="text"
    //                         className="add-item-field"
    //                     //defaultValue={currentPlant.name}
    //
    //                         {...register("name", {
    //                         })}
    //                 />{errors.address && <p className="errorMessage">Het veld is niet ingevuld</p>}
    //                 <input  type="text"
    //                         className="add-item-field"
    //                     //defaultValue = {currentData.name}
    //
    //                         {...register("latinName", {
    //
    //                         })}
    //                 />{errors.address && <p className="errorMessage">Het veld is niet ingevuld</p>}
    //
    //                 <textarea   className="add-item-field"
    //                             cols="30" rows="10"
    //                     //defaultValue={currentPlant.description}
    //
    //                             {...register("description")}
    //                 />
    //                 {errors.address && <p className="errorMessage">Vergeet niet een verzorgingshandleiding of beschrijving in te vullen</p>}
    //
    //                 <div className="selectField">
    //                     <h3>Verzorging</h3>
    //                     <input  className="choose"
    //                             type="radio"
    //                             id="easy"
    //                         //checked={currentPlant.difficulty === "EASY"}
    //                         // onChange={onValueChange}
    //
    //
    //                             value="EASY" {...register("difficulty")}/>
    //                     <label htmlFor="easy">Makkelijk</label>
    //                     <input  className="choose"
    //                             type="radio"
    //                             id="moderate"
    //                         //checked={currentPlant.difficulty === "MODERATE"}
    //
    //                             value="MODERATE" {...register("difficulty")}/>
    //                     <label htmlFor="moderate">Gemiddeld</label>
    //                     <input  className="choose"
    //                             type="radio"
    //                             id="hard"
    //                         //checked={currentPlant.difficulty === "HARD"}
    //
    //                             value="HARD" {...register("difficulty")}/>
    //                     <label htmlFor="hard">Moeilijk</label>
    //                 </div>
    //
    //
    //                 <div className="selectField">
    //                     <h3>Standplaats</h3>
    //                     <input  className="choose"
    //                             type="radio"
    //                             id="directsun"
    //                         // checked={currentItem.light === "DIRECTSUN"}
    //                             value="DIRECTSUN" {...register("light")}/>
    //                     <label htmlFor="directsun">Direct Zonlicht</label>
    //                     <input  className="choose"
    //                             type="radio"
    //                             id="halfsunny"
    //                         // checked={currentItem.light === "HALFSUNNY"}
    //                             value="HALFSUNNY" {...register("light")}/>
    //                     <label htmlFor="halfsunny">Half zonnig</label>
    //                     <input  className="choose"
    //                             type="radio"
    //                             id="sunny"
    //                         // checked={currentItem.light === "SUNNY"}
    //                             value="SUNNY" {...register("light")}/>
    //                     <label htmlFor="sunny">Zonnig</label>
    //                     <input  className="choose"
    //                             type="radio"
    //                             id="shadow"
    //                         // checked={currentItem.light === "SHADOW"}
    //                             value="SHADOW" {...register("light")}/>
    //                     <label htmlFor="shadow">Schaduw</label>
    //                 </div>
    //                 <div className="selectField">
    //                     <h3>Waterbehoefte</h3>
    //                     <input  className="choose"
    //                             type="radio"
    //                             id="day"
    //                         // checked={currentItem.watering === "DAY"}
    //                             value="DAY" {...register("watering")}/>
    //                     <label htmlFor="day">Iedere dag</label>
    //                     <input  className="choose"
    //                             type="radio"
    //                             id="twodays"
    //                         // checked={currentItem.watering === "TWODAYS"}
    //                             value="TWODAYS" {...register("watering")}/>
    //                     <label htmlFor="twodays">Om de dag</label>
    //                     <input
    //                         className="choose"
    //                         type="radio"
    //                         id="threedays"
    //                         // checked={currentItem.watering === "THREEDAYS"}
    //                         value="THREEDAYS" {...register("watering")}/>
    //                     <label htmlFor="threedays">Eens in de 3 dagen</label>
    //                     <input  className="choose"
    //                             type="radio"
    //                             id="week"
    //                         // checked={currentItem.watering === "WEEK"}
    //                             value="WEEK" {...register("watering")}/>
    //                     <label htmlFor="week">Elke week</label>
    //                     <input  className="choose"
    //                             type="radio"
    //                             id="month"
    //                         // checked={currentItem.watering === "MONTH"}
    //                             value="MONTH" {...register("watering")}/>
    //                     <label htmlFor="month">Elke maand</label>
    //                 </div>
    //                 <div className="selectField">
    //                     <h3>Bijmesten</h3>
    //                     <input  className="choose"
    //                             type="radio"
    //                             id="week"
    //                         // checked={currentItem.food === "WEEK"}
    //                             value="WEEK" {...register("food")}/>
    //                     <label htmlFor="week">Iedere week</label>
    //                     <input  className="choose"
    //                             type="radio"
    //                             id="twoweeks"
    //                         // checked={currentItem.food === "TWOWEEKS"}
    //                             value="TWOWEEKS" {...register("food")}/>
    //                     <label htmlFor="twoweeks">Om de week</label>
    //                     <input  className="choose"
    //                             type="radio"
    //                             id="month"
    //                         // checked={currentItem.food === "MONTH"}
    //                             value="MONTH" {...register("food")}/>
    //                     <label htmlFor="month">Iedere maand</label>
    //                     <input  className="choose"
    //                             type="radio"
    //                         //defaultValue={currentPlant.food === "NEVER_SPECIAL"}
    //                             id="never_special"
    //                         // checked={currentItem.food === "NEVER_SPECIAL"}
    //                             value="NEVER_SPECIAL" {...register("food")}/>
    //                     <label htmlFor="never_special">Nooit/speciaal</label>
    //                 </div>
    //                 <p>{result}</p>
    //
    //                 <div className="upload">
    //                     <input type="file"
    //                         // defaultValue={currentItem.fileName}
    //                            {...register("file", {
    //
    //                            })} accept="image/jpeg"
    //                     />
    //                     {errors.address && <p className="errorMessage">Er ging iets mis met uploaden. Probeer het opnieuw.</p>}
    //                     <GrUpload/>
    //                 </div >
    //                 <button className="form-btn">Wijzig de plant</button>
    //                 {Success === true && <p>De plant is succesvol gewijzigd!</p>}
    //                 {error && <p className="error-message">{error}</p>}
    //             </form>
    //         </div>
    //     </div>
    // )


}

export { EditPlant };