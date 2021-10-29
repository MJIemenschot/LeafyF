import React, {useContext, useState, useEffect} from 'react';
import {DataContext} from "../context/DataContext";
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import PlantIndex from "./reusableComponents/PlantIndex/PlantIndex";



const Plants = () => {
    const {user, isTokenValid} = useContext(AuthContext);
    const {contents} = useContext(DataContext);



    console.log("dit komt binnen in plants vanuit datacontext", contents);



    return (
        <div className='container'>

            <h1 className='page-header' data-testid='pageheader'>Alle planten</h1>
            <PlantIndex contents= {contents}/>
            {user && user.authority === "USER" && isTokenValid() &&
            <p>
                Terug naar de <Link to="/profile">Profielpagina</Link>
            </p>
            }
        </div>
    );
};
export default Plants