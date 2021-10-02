import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import './AddItem.css';
import {useParams} from "react-router-dom";
//import ItemUpdate from "./reusableComponents/ItemUpdate";
import PlantEdit from "./PlantEdit";

function PlantChange(props) {

    const {id} = useParams();
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const [Success, toggleSuccess] = useState(false);
    const [currentPlant, setCurrentPlant] = useState([]);


    useEffect(() => {
        async function getCurrent() {

            try {
                const response = await axios.get(`http://localhost:8080/api/v1/plants/${id}`);
                console.log('response in van change getCurrent', response.data)

                setCurrentPlant(response.data)

            } catch (error) {
                console.error('Er ging iets mis, geen data gevonden', error)
            }
        }

        getCurrent();
    }, []);


    return currentPlant ? <PlantEdit current={currentPlant}/> : <div>Loading...</div>
}
export default PlantChange;