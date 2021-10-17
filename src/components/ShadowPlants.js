import React, {useContext, useEffect, useState} from "react";
import {Link, NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import {DataContext} from "../context/DataContext";

import Logo from "./Logo";
import {FaBars, FaHome, FaTimes } from "react-icons/fa";
import {IoPersonOutline} from "react-icons/io5";
import axios from "axios";

import {GrNext, GrClose, GrEdit, GrTrash, GrCafeteria} from "react-icons/gr";
import Button from "./reusableComponents/Button";
import {CgDrop, CgSun, GiWateringCan} from "react-icons/all";
import PlantIndex from "./reusableComponents/PlantIndex";
import UserDelete from "./UserDelete";
import Image from "./Image";
import PlantDelete from "./PlantDelete";

const ShadowPlants = () => {
    // const [index, setIndex] = useState([]);
    const {shadow} = useContext(DataContext);
     // const index = shadow;


    // useEffect(()=>{
    //     async function fetchEasy(){
    //         try{
    //             const res = await axios.get("http://localhost:8080/api/v1/items/byL/SHADOW");
    //             console.log("de data van byD easy api",res);
    //             const data = res.data;
    //             setIndex(res.data);
    //
    //         } catch (e) {
    //             console.error("Er zijn helaas geen planten gevonden gevonden die je in het donker kan zetten, error: " + e)
    //         }
    //
    //     }
    //     fetchEasy()
    // },[])
    // //
    return (
        <>
            <h1 className='page-header'>Schaduw Planten</h1>
            <p className='page-text'>Deze planten kunnen op donkere plekken staan. Heb je een lege hoek in je kamer maar er komt niet zoveel daglicht? Er zijn planten die niet veel licht nodig hebben.</p>

            <div className='item-container'>
                {/*<PlantIndex index= {shadow}/>*/}

                {shadow.length === 0 &&<p>Geen Planten...</p> }

                {shadow.map(plant =>{

                    return (

                        <div key ={plant.id} className='itemInfo'>
                            <h3> {plant.name}</h3>
                            <h5>{plant.latinName}</h5>
                            <Image id={plant.id}/>
                            <Link to={`/plant/${ plant.id }`}   className="btn-to-post">
                                Meer Informatie
                            </Link>
                            <div className='water-care'>
                                <CgDrop className='care-icon'/>
                                {plant.watering==="DAY" &&(<p>Elke dag (zomer)</p>)}
                                {plant.watering==="TWODAYS" &&(<p>Om de dag (zomer)</p>)}
                                {plant.watering==="THREEDAYS" &&(<p>Om de twee dagen (zomer)</p>)}
                                {plant.watering==="WEEK" &&(<p>1 keer per week (zomer)</p>)}
                                {plant.watering==="MONTH" &&(<p>1 keer per maand</p>)}
                            </div>
                            <div className='care'>
                                <GiWateringCan className='care-icon'/>
                                {plant.difficulty==="EASY" &&(<p>Makkelijke plant</p>)}
                                {plant.difficulty==="MODERATE" &&(<p>Redelijk makkelijk</p>)}
                                {plant.difficulty==="HARD" &&(<p>Vergt wat extra zorg</p>)}
                            </div>
                            <div className='light-care'>
                                <CgSun className='care-icon'/>
                                {plant.light==="DIRECTSUN" &&(<p>Kan tegen direct zonlicht</p>)}
                                {plant.light==="SUNNY" &&(<p>Verdraagt geen direct zonlicht</p>)}
                                {plant.light==="HALFSUNNY" &&(<p>Heeft niet zoveel licht nodig</p>)}
                                {plant.light==="SHADOW" &&(<p>Kan op een donker plekje</p>)}
                            </div>
                            <div className='food-care'>
                                <GrCafeteria className='care-icon'/>
                                {plant.food==="WEEK" &&(<p>Elke week (zomer)</p>)}
                                {plant.food==="TWOWEEKS" &&(<p>Om de week (zomer)</p>)}
                                {plant.food==="MONTH" &&(<p>Elke maand (zomer)</p>)}
                                {plant.food==="NEVER_SPECIAL" &&(<p>Heeft niets nodig</p>)}
                            </div>
                            <div className='tools'>

                                {/*{user && user.authority === "ADMIN" && isTokenValid() &&*/}
                                <PlantDelete id={plant.id} className='btn-to-post'/>
                                {/*}*/}
                                {/*{user && user.authority === "USER" || user.authority === "ADMIN" && isTokenValid() &&*/}
                                <Link to={`/edit-plant/${ plant.id }`}   className='btn-to-edit'>
                                    <GrEdit/>Pas aan
                                </Link>
                                {/*}*/}
                                {/*/!*{user && user.authority === "USER" || user.authority === "ADMIN" && isTokenValid() &&*!/*/}
                                {/*<Link to={`/plant-edit/${ plant.id }`}   className='btn-to-edit'>*/}
                                {/*    <GrEdit/>editb*/}
                                {/*</Link>*/}
                                {/*}*/}
                                {/*<Link to={`/plant-change/${ plant.id }`}   className="btn-to-edit">*/}
                                {/*    <GrEdit/>Verander*/}
                                {/*</Link>*/}

                            </div>

                        </div>
                    );
                })}


            </div>
        </>


    );
};
export default ShadowPlants