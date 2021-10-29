import './PlantDelete.css';
import React, {useContext, useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import {BrowserRouter, Link} from "react-router-dom";


import {GrTrash} from "react-icons/gr";


function PlantDelete (props) {
    // nog doen: een waarschuwing!
    const [error, setError] = useState('');
    const [Success, toggleSuccess] = useState(false);
    const [loading, toggleLoading] = useState(false);
    //const[contents] = useContext(ItemsContext);
   // console.log("props in itemDelete", props.id)
    // const { handleSubmit, formState: { errors }, register } = useForm();
    const itemId = props.id;


    async function deletePlantHandler () {
        // console.warn('Weet je het zeker?')
        if(window.confirm("weet je het zeker?")){
            toggleLoading(true);
            try {
                await axios.delete(`http://localhost:8080/api/v1/plants/files/${itemId}`)
                // console.log('De plant is succesvol verwijderd')
                toggleSuccess(true);

            } catch (e) {
                console.log('het verwijderen is niet gelukt, error: '+ e)
            }
        }
    }



    return (
        // <BrowserRouter forceRefresh>
            <div >{!Success ?
            <button
                disabled={loading}
                className='delete-plnt'
                type='submit'
                onClick={deletePlantHandler}
                // onReset={reset}
            >
                verwijder
                <GrTrash/>
            </button>:<Link to={"/"}>Naar Overzicht</Link>
            }

                {Success &&<p>De plant is succesvol verwijderd</p>}
            </div>
        // </BrowserRouter>
    )
}

export default PlantDelete;