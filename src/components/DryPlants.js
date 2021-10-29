import React, {useContext, useEffect, useState} from "react";
import {DataContext} from "../context/DataContext";

import PlantIndex from "./reusableComponents/PlantIndex/PlantIndex";

const DryPlants = () => {
    const {dry, error} = useContext(DataContext);

    return (
        <div className='container'>
            <h1 className='page-header'>Vergeet deze</h1>
            <p className='page-text'>Deze planten hoef je nauwelijks water te geven</p>
            {/*{dry?<PlantIndex contents= {dry}/>:<h3>{error}</h3>}*/}
            {/*{dry.length ===0 ?<h3>{error}</h3>:}*/}
            <PlantIndex contents= {dry}/>

        </div>
    );
};
export default DryPlants