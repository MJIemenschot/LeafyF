import './Plants.css';
import React, {useContext, useEffect, useState} from "react";
import {DataContext} from "../context/DataContext";

import PlantIndex from "./PlantIndex/PlantIndex";

const DryPlants = () => {
    const {dry, error} = useContext(DataContext);

    return (
        <div className='container'>
            <h1 className='page-header'>Vergeet deze</h1>
            <p className='page-text'>Deze planten hoef je nauwelijks water te geven</p>
            <PlantIndex contents= {dry}/>
        </div>
    );
};
export default DryPlants