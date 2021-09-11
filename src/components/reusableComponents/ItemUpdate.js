import React, {useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import './AddItem.css';

import {GrEdit} from "react-icons/gr";

function ItemUpdate () {


    const { handleSubmit, formState: { errors }, register } = useForm();
    const { item, setItem} = useState([])


    async function deleteItem (formData) {

        try {
            await axios.put('http://localhost:8080/api/v1/items/', formData)
        } catch (e) {
            console.log(console.error(e))
        }
    }

    const formData = new FormData();

    const formSubmit = (data) => {


    }

    return (
        <div className="add-item-container">


                        <GrEdit/>


        </div>
    )
}

export default ItemUpdate;