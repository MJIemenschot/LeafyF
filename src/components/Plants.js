import React, {useContext, useState, useEffect} from 'react';
import {DataContext} from "../context/DataContext";
import {GrNext, GrClose, GrEdit, GrTrash, GrRestaurant, GrCafeteria} from "react-icons/gr";
import {Link} from 'react-router-dom';

import {useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import Button from "./reusableComponents/Button";
import {CgDrop, CgSun, GiWateringCan} from "react-icons/all";
import PlantDelete from "./PlantDelete/PlantDelete";
import Image from "./Image/Image";
import PlantIndex from "./reusableComponents/PlantIndex/PlantIndex";



const Plants = () => {
    const {user, isTokenValid} = useContext(AuthContext);
    const {contents} = useContext(DataContext);

    console.log("dit komt binnen in plants vanuit datacontext", contents);

    return (
        <>
            <h1 className='page-header' data-testid='pageheader'>Alle planten</h1>
            <PlantIndex contents= {contents}/>
        </>
    );
};
export default Plants