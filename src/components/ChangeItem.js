import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import './AddItem.css';
import {useParams} from "react-router-dom";
import ItemUpdate from "./reusableComponents/ItemUpdate";

function ChangeItem () {

    const {id} = useParams();
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const [Success, toggleSuccess] = useState(false);
    const [currentItem, setCurrentItem] = useState([]);


    useEffect(() => {
        async function getCurrent() {

            try {
                const response = await axios.get(`http://localhost:8080/api/v1/items/${id}`);
                console.log('response in van change getCurrent', response.data)

                setCurrentItem(response.data)

            } catch (error) {
                console.error('Er ging iets mis, geen data gevonden', error)
            }
        }

        getCurrent();
    }, []);


    return currentItem ? <ItemUpdate current={currentItem}/> : <div>Loading...</div>
}
export default ChangeItem;