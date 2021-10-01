import React, {useContext, useState, useEffect} from 'react';
import {DataContext} from "../context/DataContext";
import {GrNext, GrClose, GrEdit, GrTrash, GrRestaurant, GrCafeteria} from "react-icons/gr";
import {Link} from 'react-router-dom';
import ItemDelete from "./ItemDelete";
import {useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import Button from "./reusableComponents/Button";
import {CgDrop, CgSun, GiWateringCan} from "react-icons/all";
import PlantDelete from "./PlantDelete";


const Plants = () => {
    const {user, isTokenValid} = useContext(AuthContext);
    const {contents} = useContext(DataContext);
    console.log("dit komt binnen in itemslist vanuit datacontext", contents);

    return (
        <>
            <h1 className='page-header'>Alle planten</h1>

        <div className='item-container'>

            {contents.map(plant =>{
                return (


                        <div key ={plant.id} className='itemInfo'>
                            <h3> {plant.name}</h3>
                            <h5>{plant.latinName}</h5>

                            {/*<p>{item.description}</p>*/}
                            {/*<div style={{background: `url({item.toPicture}) no repeat center/cover`}} className='itemBg'>picbg</div>*/}
                            {/*<img src={plant.toPicture} alt={plant.name} width="80px"/>*/}
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
                                <PlantDelete id={plant.id}/>
                                {/*    (<Button*/}
                                {/*    type="submit"*/}
                                {/*    buttonTitle={<GrTrash/>}*/}
                                {/*    classNameButton="btn delete-post"*/}
                                {/*    // onclick={}*/}
                                {/*/>)*/}
                                    {/*}*/}
                                    {/*{user && user.authority === "USER" || user.authority === "ADMIN" && isTokenValid() &&*/}
                                {/*<Link to={`/edit-item/${ plant.id }`}   className="btn-to-post">*/}
                                {/*    <GrEdit/>Edit*/}
                                {/*</Link>*/}
                                {/*<Link to={`/update-item/${ item.id }`}   className="btn-to-post">*/}
                                {/*    <GrEdit/>update*/}
                                {/*</Link>*/}
                                <Link to={`/plant-change/${ plant.id }`}   className="btn-to-post">
                                    <GrEdit/>Change
                                </Link>
                                {/*    (<Button*/}
                                {/*    type="submit"*/}
                                {/*    buttonTitle={<GrEdit/>}*/}
                                {/*    classNameButton="btn edit-post"*/}
                                {/*    onClickEvent={selectItem(contents.id)}*/}
                                {/*/>)*/}
                                    {/*}*/}

                            </div>
                            {/*<GrEdit style={{ color:'white', cursor:'pointer'}}/>*/}
                            {/*/!*<ItemDelete id={item.id} />*!/*/}
                            {/*/!*<button onClick={() => delete(item.id)}>Delete</button>*!/*/}
                            {/*<button*/}
                            {/*     onClick={selectItem(item.id)}*/}
                            {/*>Bewerk</button>*/}
                            {/*<button onClick={()=> history.push(`/item-update`)}></button>*/}
                            {/*<Link  to='/item/:id}'>Details</Link>*/}

                        </div>

                );
            })}

        </div>
        </>


    );
};
export default Plants