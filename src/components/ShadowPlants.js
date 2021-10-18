import React, {useContext, useEffect, useState} from "react";
import {Link, NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import {DataContext} from "../context/DataContext";

import Logo from "./Logo/Logo";
import {FaBars, FaHome, FaTimes } from "react-icons/fa";
import {IoPersonOutline} from "react-icons/io5";
import axios from "axios";

import {GrNext, GrClose, GrEdit, GrTrash, GrCafeteria} from "react-icons/gr";
import Button from "./reusableComponents/Button";
import {CgDrop, CgSun, GiWateringCan} from "react-icons/all";
import PlantIndex from "./reusableComponents/PlantIndex/PlantIndex";
import UserDelete from "./UserDelete/UserDelete";
import Image from "./Image/Image";
import PlantDelete from "./PlantDelete/PlantDelete";

const ShadowPlants = () => {


    const {shadow} = useContext(DataContext);

    return (
        <>
            <h1 className='page-header'>Schaduw Planten</h1>
            <p className='page-text'>Deze planten kunnen op donkere plekken staan. Heb je een lege hoek in je kamer maar er komt niet zoveel daglicht? Er zijn planten die niet veel licht nodig hebben.</p>
                <PlantIndex contents= {shadow}/>


        </>


    );
};
export default ShadowPlants