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
import {DataContext} from "../context/DataContext";
import UserDelete from "./UserDelete/UserDelete";
import Image from "./Image/Image";
import PlantDelete from "./PlantDelete/PlantDelete";
import PlantIndex from "./reusableComponents/PlantIndex/PlantIndex";



const EasyPlants = () => {
    const [index, setIndex] = useState([])
    const {easy} = useContext(DataContext);
    //console.log('from context in easy', easy)


    // useEffect(()=>{
    //     async function fetchEasy(){
    //         try{
    //             const res = await axios.get("http://localhost:8080/api/v1/items/byD/EASY");
    //             console.log("de data van byD easy api",res);
    //             const data = res.data;
    //             setIndex(res.data);
    //
    //         } catch (e) {
    //             console.error("Er zijn helaas geen makkelijke planten gevonden gevonden, error: " + e)
    //         }
    //
    //     }
    //     fetchEasy()
    // },[])

    return (
        <div className='container'>
            <h1 className='page-header'>Makkelijke planten</h1>
            <p className='page-text'>Naar deze planten hoef je bijna niet om te kijken. Het zijn echte overlevers die tegen een stootje kunnen.</p>
            <PlantIndex contents= {easy}/>


        </div>


    );
};
export default EasyPlants