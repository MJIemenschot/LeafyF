import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";


const Searchbar = () => {
    const[searchTerm, setSearchTerm] = useState();
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const [found, toggleFound] = useState(false)


    async function searchName(term) {
        setError('');
        toggleLoading(true);

        console.log(term);

        try {
            const result = await axios.get('http://localhost:8080/api/v1/items/byName/${name}', {
                // email: term.name
            });
            toggleFound(true);

            // setTimeout(() => {
            //     history.push('/');
            // }, 2000);
        } catch (e) {
            console.error(e);
            setError(`Er is geen resultaat dat aan uw zoekopdracht voldoet (${e.message})`);
        }

        toggleLoading(false);
    }

    // const validatePassword = (value) => {
    //     if (password !== value) return false;
    // }

    return (
        <>
            <input
                type ='text'
                placeholder='Zoek een plant....'
                onChange={(event)=>{
                    setSearchTerm(event.target.value)
                }}
            >

            </input>
            <input type ='submit'>Search</input>

        </>
    )
}
export default Searchbar