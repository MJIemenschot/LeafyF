import Button from "./Button";
import {CgDrop, CgSun, GiWateringCan} from "react-icons/all";
import {GrCafeteria, GrEdit, GrTrash} from "react-icons/gr";
import React, {useContext, useState} from "react";
import {DataContext} from "../../context/DataContext";
import Image from "../Image";
import {Link} from "react-router-dom";
import PlantDelete from "../PlantDelete";


const PlantIndex = (props) => {
    console.log('props in index',props)
    const [index, setIndex] = useState([]);
    const {contents} = useContext(DataContext);
    console.log('contents in index',contents)

    return(
        <div className='item-container'>

            {contents.length === 0 &&<p>Geen Planten...</p> }

            {contents.map(plant =>{

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
        )
}
export default PlantIndex