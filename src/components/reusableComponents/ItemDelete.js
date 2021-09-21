import React, {useContext, useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";


import {GrTrash} from "react-icons/gr";
import {ItemsContext} from "../../context/ItemsContext";

function ItemDelete (props) {
    //const[contents] = useContext(ItemsContext);
    console.log("props in itemDelete", props.id)


    // const { handleSubmit, formState: { errors }, register } = useForm();
    const itemId = props.id;


    useEffect((itemId) => {
        async function deleteItem() {
            console.log("Hebben we hier een itemId in component deleteItem?",itemId)
            try {
               await axios.delete(`http://localhost:8080/api/v1/items/${itemId}`);

            } catch (e) {
                console.error(e);
            }
        }
        deleteItem()
         },[])


    return (
        <div >
            <button
                type="submit"
                onClick="{deleteItem}"
            >
                verwijder
                {/*<GrTrash/>*/}

            </button>
        </div>
    )
}

export default ItemDelete;