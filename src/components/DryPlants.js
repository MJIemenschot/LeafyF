import React, {useContext, useEffect, useState} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import Logo from "./Logo";
import {FaBars, FaHome, FaTimes } from "react-icons/fa";
import {IoPersonOutline} from "react-icons/io5";
import axios from "axios";

import { GrNext, GrClose, GrEdit, GrTrash  } from "react-icons/gr";
import Button from "./reusableComponents/Button";

const ShadowPlants = () => {
    const [dry, setDry] = useState([])

    async function fetchEasy(){
        try{
            const res = await axios.get("http://localhost:8080/api/v1/items/byW/MONTH");
            console.log("de data van byD easy api",res);
            const data = res.data;
            setDry(res.data);

        } catch (e) {
            console.error("Er zijn helaas geen planten die nauwelijks water nodig hebben gevonden gevonden, error: " + e)
        }

    }
    useEffect(()=>{
        fetchEasy()
    },[])

    return (
        <>
            <h1 className='page-header'>Vergeet deze</h1>
            <p className='page-text'>Deze planten hoef je nauwelijks water te geven</p>

            <div className='item-container'>

                {dry.map(item =>{
                    return (
                        //<div style={{background: 'url({item.toPicture}) no repeat center/cover'}} className='itemBg'>
                        <div key ={item.id} className='itemInfo'>
                            <h3> {item.name}</h3>
                            {/*<p>{item.description}</p>*/}
                            <img src={item.toPicture} alt={item.name} width="80px"/>
                            <p>watergeven: {item.watering}</p>
                            {item.difficulty==="EASY" &&(<p>"Dit is een makkelijke plant"</p>)}
                            <p>standplaats: {item.light}</p>
                            <p>bijmesten: {item.food}</p>
                            <div className='tools'>
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
                                    <Button
                                        type="submit"
                                        buttonTitle="Details"
                                        classNameButton="btn to-post"
                                    />
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
                        </div>
                    );
                })}

            </div>
        </>


    );
};
export default ShadowPlants