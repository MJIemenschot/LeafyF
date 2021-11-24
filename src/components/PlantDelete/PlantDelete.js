import './PlantDelete.css';
import React, {useContext, useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import {BrowserRouter, Link, useHistory} from "react-router-dom";


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
    const history = useHistory();
    let changeUrl = () => {
        history.push(`/`);
    }


    async function deletePlantHandler () {
        // console.warn('Weet je het zeker?')
        if(window.confirm("weet je zeker dat je deze plant wil verwijderen?")){
            toggleLoading(true);
            try {
                await axios.delete(`http://localhost:8080/api/v1/plants/files/${itemId}`)
                // console.log('De plant is succesvol verwijderd')
                toggleSuccess(true);

            } catch (e) {
                console.log('het verwijderen is niet gelukt, error: '+ e)
                setError('het verwijderen is niet gelukt, error: '+ e)
            }
        }
    }
    function refresh() {
        window.location.reload(false);
    }
    function refreshUrl() {
        changeUrl()
        refresh()
    }




    return (

            <div >{!Success ?
            <button
                disabled={loading}
                className='delete-plnt'
                type='submit'
                onClick={deletePlantHandler}
            >
                verwijder
                <GrTrash/>
            </button>:
                // <Link to={"/"}>Naar Overzicht</Link>
                 <button type='button' onClick={refreshUrl} className='btn btn-secondary'>Terug naar overzicht</button>
            }

                {Success &&<p>De plant is succesvol verwijderd</p>}
            </div>

    )
}

export default PlantDelete;