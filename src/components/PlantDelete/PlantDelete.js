import './PlantDelete.css';
import React, {useContext, useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import {BrowserRouter} from "react-router-dom";


import {GrTrash} from "react-icons/gr";


function PlantDelete (props) {
    // nog doen: een waarschuwing!
    const [error, setError] = useState('');
    const [Success, toggleSuccess] = useState(false);
    //const[contents] = useContext(ItemsContext);
   // console.log("props in itemDelete", props.id)


    // const { handleSubmit, formState: { errors }, register } = useForm();
    const itemId = props.id;
    //console.log('itemId',itemId)

    async function deletePlantHandler () {
        try {
            await axios.delete(`http://localhost:8080/api/v1/plants/files/${itemId}`)
            console.log('De plant is succesvol verwijderd')

        } catch (e) {
            console.log('"het is niet gelukt, error: " '+ e)
        }
    }



    return (
        // <BrowserRouter forceRefresh>
            <div >

                <button
                    className='delete-plnt'
                    type='submit'
                    onClick={deletePlantHandler}
                    // onReset={reset}
               >
                    verwijder
                    <GrTrash/>

                </button>
            </div>
        // </BrowserRouter>
    )
}

export default PlantDelete;