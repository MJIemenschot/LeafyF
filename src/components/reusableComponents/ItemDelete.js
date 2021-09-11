import React, {useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import './AddItem.css';

import {GrTrash} from "react-icons/gr";

function ItemDelete () {


    const { handleSubmit, formState: { errors }, register } = useForm();
    const { item, setItem} = useState([])


    async function deleteItem (formData) {

        try {
            await axios.delete('http://localhost:8080/api/v1/items/', formData)
        } catch (e) {
            console.log(console.error(e))
        }
    }

    const formData = new FormData();

    const formSubmit = (data) => {


    }

    return (
        <div className="add-item-container">


                        <GrTrash/>


        </div>
    )
}

export default ItemDelete;