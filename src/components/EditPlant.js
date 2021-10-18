import React, {useState, useEffect, useContext} from 'react';
import {DataContext} from "../context/DataContext";
import { useForm } from "react-hook-form";
import {useParams} from "react-router-dom";
import axios from "axios";
import {GrUpload} from "react-icons/gr";

function EditPlant() {
    // get functions to build form with useForm() hook
    const { errors, register, handleSubmit, reset } = useForm();
    // const {contents} = useContext(DataContext);
    // console.log("dit komt binnen in editplant vanuit datacontext", contents);

    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const [Success, toggleSuccess] = useState(false);
    const {id} = useParams();

    //  state for form
    const [currentPlant, setCurrentPlant] = useState(null);
    const [currentImage, setCurrentImage] = useState(null);
    const [isSelected, setIsSelected] = useState(false);


    // // effect runs on component mount

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

    useEffect(() => {
        async function getCurrentImage() {

            try {
                const response = await axios.get(`http://localhost:8080/api/v1/plants/${id}/download`);
                console.log('response in editPlant getCurrentImage', response.data)

                setCurrentImage(response.data)
                setIsSelected(true)

            } catch (error) {
                console.error('Er ging iets mis, geen afbeelding gevonden', error)
            }
        }
        getCurrentImage();
    }, []);

    //
    async function updateIt (formData) {

        setError('');
        toggleLoading(true);

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
            setError(`Het wijzigen is mislukt. Probeer het opnieuw (${e.message})`);
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
        //formData.append("file", data.file[currentImage])


        updateIt(formData)
    }



    // effect runs when plantstate is updated
    useEffect(() => {
        // reset form with plant data
        reset(currentPlant);
    }, [currentPlant]);



    function onSubmit(data) {
        // display form data on submit
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }
    return (
        <div className="add-item-container">
            <h3 className="page-header">Bewerk plant</h3>
            <div className="add-items">
                {currentPlant &&
                // <form onSubmit={handleSubmit(onSubmit)} //volgende met resetfunctie>
                <form onSubmit={handleSubmit(formSubmit)} onReset={reset} className="add-item">
                        <div className="">

                            <input name="id" type="hidden" {...register('id')} className="add-item-field" />
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
                                    defaultValue={currentImage}
                                    {...register("file", {
                                    })} accept="image/jpeg"
                             />
                             {/*{errors.file && <p className="errorMessage">Er ging iets mis met uploaden. Probeer het opnieuw.</p>}*/}
                             <GrUpload/>
                         </div >
                    </div>
                     <div className="form-group">
                         <button type="submit" className="btn btn-primary mr-1">Pas aan</button>
                         {Success === true && <p>De plant is succesvol gewijzigd!</p> }
                         {error && <p className="error-message">{error}</p>}
                         <button type="button" onClick={() => reset()} className="btn btn-secondary">Zet terug</button>
                     </div>
                 </form>
                }
                {!currentPlant &&
                <div className="text-center">
                    <span className="spinner-border spinner-border-lg align-center"></span>
                </div>
                }
            </div>
        </div>
    )
}

export { EditPlant };