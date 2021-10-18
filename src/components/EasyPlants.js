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
        <>
            <h1 className='page-header'>Makkelijke planten</h1>
            <p className='page-text'>Naar deze planten hoef je bijna niet om te kijken. Het zijn echte overlevers die tegen een stootje kunnen.</p>
            <PlantIndex contents= {easy}/>

            {/*<div className='item-container'>*/}

            {/*    {easy.length === 0 &&<p>Geen Planten...</p> }*/}

            {/*    {easy.map(plant =>{*/}

            {/*        return (*/}

            {/*            <div key ={plant.id} className='itemInfo'>*/}
            {/*                <h3> {plant.name}</h3>*/}
            {/*                <h5>{plant.latinName}</h5>*/}
            {/*                <Image id={plant.id}/>*/}
            {/*                <Link to={`/plant/${ plant.id }`}   className="btn-to-post">*/}
            {/*                    Meer Informatie*/}
            {/*                </Link>*/}
            {/*                <div className='water-care'>*/}
            {/*                    <CgDrop className='care-icon'/>*/}
            {/*                    {plant.watering==="DAY" &&(<p>Elke dag (zomer)</p>)}*/}
            {/*                    {plant.watering==="TWODAYS" &&(<p>Om de dag (zomer)</p>)}*/}
            {/*                    {plant.watering==="THREEDAYS" &&(<p>Om de twee dagen (zomer)</p>)}*/}
            {/*                    {plant.watering==="WEEK" &&(<p>1 keer per week (zomer)</p>)}*/}
            {/*                    {plant.watering==="MONTH" &&(<p>1 keer per maand</p>)}*/}
            {/*                </div>*/}
            {/*                <div className='care'>*/}
            {/*                    <GiWateringCan className='care-icon'/>*/}
            {/*                    {plant.difficulty==="EASY" &&(<p>Makkelijke plant</p>)}*/}
            {/*                    {plant.difficulty==="MODERATE" &&(<p>Redelijk makkelijk</p>)}*/}
            {/*                    {plant.difficulty==="HARD" &&(<p>Vergt wat extra zorg</p>)}*/}
            {/*                </div>*/}
            {/*                <div className='light-care'>*/}
            {/*                    <CgSun className='care-icon'/>*/}
            {/*                    {plant.light==="DIRECTSUN" &&(<p>Kan tegen direct zonlicht</p>)}*/}
            {/*                    {plant.light==="SUNNY" &&(<p>Verdraagt geen direct zonlicht</p>)}*/}
            {/*                    {plant.light==="HALFSUNNY" &&(<p>Heeft niet zoveel licht nodig</p>)}*/}
            {/*                    {plant.light==="SHADOW" &&(<p>Kan op een donker plekje</p>)}*/}
            {/*                </div>*/}
            {/*                <div className='food-care'>*/}
            {/*                    <GrCafeteria className='care-icon'/>*/}
            {/*                    {plant.food==="WEEK" &&(<p>Elke week (zomer)</p>)}*/}
            {/*                    {plant.food==="TWOWEEKS" &&(<p>Om de week (zomer)</p>)}*/}
            {/*                    {plant.food==="MONTH" &&(<p>Elke maand (zomer)</p>)}*/}
            {/*                    {plant.food==="NEVER_SPECIAL" &&(<p>Heeft niets nodig</p>)}*/}
            {/*                </div>*/}
            {/*                <div className='tools'>*/}

            {/*                    /!*{user && user.authority === "ADMIN" && isTokenValid() &&*!/*/}
            {/*                    <PlantDelete id={plant.id} className='btn-to-post'/>*/}
            {/*                    /!*}*!/*/}
            {/*                    /!*{user && user.authority === "USER" || user.authority === "ADMIN" && isTokenValid() &&*!/*/}
            {/*                    <Link to={`/edit-plant/${ plant.id }`}   className='btn-to-edit'>*/}
            {/*                        <GrEdit/>Pas aan*/}
            {/*                    </Link>*/}
            {/*                    /!*}*!/*/}
                                {/*/!*{user && user.authority === "USER" || user.authority === "ADMIN" && isTokenValid() &&*!/*/}
            {/*                    /!*<Link to={`/plant-edit/${ plant.id }`}   className='btn-to-edit'>*!/*/}
            {/*                    /!*    <GrEdit/>editb*!/*/}
            {/*                    /!*</Link>*!/*/}
            {/*                    /!*}*!/*/}
            {/*                    /!*<Link to={`/plant-change/${ plant.id }`}   className="btn-to-edit">*!/*/}
            {/*                    /!*    <GrEdit/>Verander*!/*/}
            {/*                    /!*</Link>*!/*/}

            {/*                </div>*/}

            {/*            </div>*/}
            {/*        );*/}
            {/*    })}*/}

            {/*</div>*/}
        </>


    );
};
export default EasyPlants