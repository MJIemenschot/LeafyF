import React, {useContext, useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";


import {GrTrash} from "react-icons/gr";


function UserDelete (props) {
    //const[contents] = useContext(ItemsContext);
   // console.log("props in itemDelete", props.id)


    // const { handleSubmit, formState: { errors }, register } = useForm();
    const itemId = props.id;
    //console.log('itemId',itemId)

    async function deleteItemHandler () {
        try{
            await axios.delete(`http://localhost:8080/api/v1/users/${itemId}`)
            // const newItemList = (props.filter((item)=>item.id !==itemId));
            // to do warning/

        } catch (e) {
            console.log("het is niet gelukt, error: " + e)
        }
    }

    return (
        <div >
            <button
                className='delete-usr'
                type='submit'
                onClick={deleteItemHandler}
           >
                verwijder
                <GrTrash/>

            </button>
        </div>
    )
}

export default UserDelete;