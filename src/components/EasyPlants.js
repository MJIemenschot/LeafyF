import './Plants.css';
import React, {useContext, useEffect, useState} from "react";
import {Link, NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import Logo from "./Logo/Logo";
import {FaBars, FaHome, FaTimes } from "react-icons/fa";
import {IoPersonOutline} from "react-icons/io5";
import axios from "axios";

import {GrNext, GrClose, GrEdit, GrTrash, GrCafeteria} from "react-icons/gr";
import Button from "./reusableComponents/Button";
import {CgDrop, CgSun, GiWateringCan} from "react-icons/all";
import {DataContext} from '../context/DataContext';
import UserDelete from "./UserDelete/UserDelete";
import Image from "./Image/Image";
import PlantDelete from "./PlantDelete/PlantDelete";
import PlantIndex from './PlantIndex/PlantIndex';



const EasyPlants = () => {
    const [index, setIndex] = useState([])
    const {easy} = useContext(DataContext);

    return (
        <div className='container'>
            <h1 className='page-header'>Makkelijke planten</h1>
            <p className='page-text'>Naar deze planten hoef je bijna niet om te kijken. Het zijn echte overlevers die tegen een stootje kunnen.</p>
            <PlantIndex contents= {easy}/>
        </div>


    );
};
export default EasyPlants