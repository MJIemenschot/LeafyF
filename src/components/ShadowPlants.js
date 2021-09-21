import React, {useContext, useEffect, useState} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import Logo from "./Logo";
import {FaBars, FaHome, FaTimes } from "react-icons/fa";
import {IoPersonOutline} from "react-icons/io5";
import axios from "axios";

import {GrNext, GrClose, GrEdit, GrTrash, GrCafeteria} from "react-icons/gr";
import Button from "./reusableComponents/Button";
import {CgDrop, CgSun, GiWateringCan} from "react-icons/all";

const ShadowPlants = () => {
    const [shadow, setShadow] = useState([])

    async function fetchEasy(){
        try{
            const res = await axios.get("http://localhost:8080/api/v1/items/byL/SHADOW");
            console.log("de data van byD easy api",res);
            const data = res.data;
            setShadow(res.data);

        } catch (e) {
            console.error("Er zijn helaas geen planten gevonden gevonden die je in het donker kan zetten, error: " + e)
        }

    }
    useEffect(()=>{
        fetchEasy()
    },[])

    return (
        <>
            <h1 className='page-header'>Schaduw Planten</h1>
            <p className='page-text'>Deze planten kunnen op donkere plakken staan. Heb je een lege hoek in je kamer maar er komt niet zoveel daglicht? Er zijn planten die niet veel licht nodig hebben.</p>

            <div className='item-container'>

                {shadow.map(item =>{
                    return (
                        //<div style={{background: 'url({item.toPicture}) no repeat center/cover'}} className='itemBg'>
                        <div key ={item.id} className='itemInfo'>
                            <h3> {item.name}</h3>
                            {/*<p>{item.description}</p>*/}
                            <img src={item.toPicture} alt={item.name} width="80px"/>
                            <Button
                                type="submit"
                                buttonTitle="Details"
                                classNameButton="btn to-post"
                            />
                            <div className='care'>
                                <CgDrop/>
                                {item.watering==="DAY" &&(<p>Elke dag (zomer)</p>)}
                                {item.watering==="TWODAYS" &&(<p>Om de dag (zomer)</p>)}
                                {item.watering==="THREEDAYS" &&(<p>Om de twee dagen (zomer)</p>)}
                                {item.watering==="WEEK" &&(<p>1 keer per week (zomer)</p>)}
                                {item.watering==="MONTH" &&(<p>1 keer per maand</p>)}
                            </div>
                            <div className='care'>
                                <GiWateringCan/>
                                {item.difficulty==="EASY" &&(<p>Makkelijke plant</p>)}
                                {item.difficulty==="MODERATE" &&(<p>Redelijk makkelijk</p>)}
                                {item.difficulty==="HARD" &&(<p>Vergt wat extra zorg</p>)}
                            </div>
                            <div className='care'>
                                <CgSun/>
                                {item.light==="SUNNY" &&(<p>Kan tegen direct zonlicht</p>)}
                                {item.light==="HALFSUNNY" &&(<p>Verdraagt geen direct zonlicht</p>)}
                                {item.light==="HALFSHADOW" &&(<p>Heeft niet zoveel licht nodig</p>)}
                                {item.light==="SHADOW" &&(<p>Kan op een donker plekje</p>)}
                            </div>
                            <div className='care'>
                                <GrCafeteria/>
                                {item.food==="WEEK" &&(<p>Elke week (zomer)</p>)}
                                {item.food==="TWOWEEKS" &&(<p>Om de week (zomer)</p>)}
                                {item.food==="MONTH" &&(<p>Elke maand (zomer)</p>)}
                                {item.food==="NEVER_SPECIAL" &&(<p>Heeft niets nodig</p>)}
                            </div>
                                <div className='tools'>
                                    {/*{user && user.authority === "ADMIN" && isTokenValid() &&*/}
                                    (<Button
                                    type="submit"
                                    buttonTitle={<GrTrash/>}
                                    classNameButton="btn delete-post"
                                />)
                                    {/*}*/}
                                    {/*{user && user.authority === "USER" || user.authority === "ADMIN" && isTokenValid() &&*/}
                                    (<Button
                                    type="submit"
                                    buttonTitle={<GrEdit/>}
                                    classNameButton="btn edit-post"
                                />)
                                    {/*}*/}

                                </div>
                                {/*<GrEdit style={{ color:'white', cursor:'pointer'}}/>*/}
                                {/*/!*<ItemDelete id={item.id} />*!/*/}
                                {/*/!*<button onClick={() => delete(item.id)}>Delete</button>*!/*/}
                                {/*<button*/}
                                {/*     onClick={() => this.editItem(item.id)}*/}
                                {/*>Bewerk</button>*/}
                                {/*/!*<button onClick={()=> history.push(`/item/item.id`)}></button>*!/*/}
                                {/*<Link  to='/item/:id}'>Details</Link>*/}

                            </div>

                    );
                })}

            </div>
        </>


    );
};
export default ShadowPlants