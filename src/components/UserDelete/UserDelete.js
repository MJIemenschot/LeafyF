import React, {useContext, useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";


import {GrTrash} from "react-icons/gr";
import {Link, useParams} from "react-router-dom";


function UserDelete (props) {
    const [succes, toggleSucces] = useState(false)

    console.log("props in userDelete", props)


    // const { handleSubmit, formState: { errors }, register } = useForm();
    const itemId = props.id;
    console.log('itemId',itemId)

    async function deleteItemHandler () {
        // to do warning/
        if(window.confirm("weet je het zeker?")){
            try{
                await axios.delete(`http://localhost:8080/api/v1/users/${itemId}`)
                // const newItemList = (props.filter((item)=>item.id !==itemId));
                toggleSucces(true);
            } catch (e) {
                console.log("het is niet gelukt, error: " + e)
            }
        }

    }

    return (
        <div className='user-delete'>
            <button
                className='delete-usr-btn'
                type='submit'
                onClick={deleteItemHandler}
           >
                verwijder
                <GrTrash/>

            </button>
            {succes &&
                <>
                    <p>De gebruiker is succesvol verwijderd</p>
                    <Link to={'/users-list'}>Terug naar ledenlijst</Link>

                </>
            }

        </div>
    )
}

export default UserDelete;