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
import {ItemsContext} from "../context/ItemsContext";



const EasyPlants = () => {
    const [index, setIndex] = useState([])
    const {easy} = useContext(ItemsContext);
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
            <p className='page-text'>Naar deze planten hoef je bijna niet om te kijken want ze kunnen tegen een stootje.</p>

            <div className='item-container'>

                {easy.map(item =>{
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
                            <div className='water-care'>
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
                            <div className='light-care'>
                                <CgSun/>
                                {item.light==="DIRECTSUN" &&(<p>Kan tegen direct zonlicht</p>)}
                                {item.light==="SUNNY" &&(<p>Verdraagt geen direct zonlicht</p>)}
                                {item.light==="HALFSUNNY" &&(<p>Heeft niet zoveel licht nodig</p>)}
                                {item.light==="SHADOW" &&(<p>Kan op een donker plekje</p>)}
                            </div>
                            <div className='food-care'>
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

                            </div>

                    );
                })}

            </div>
        </>


    );
};
export default EasyPlants