import React, {useContext, useEffect, useState} from "react";
import {Link, NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import Logo from "./Logo";
import {FaBars, FaHome, FaTimes } from "react-icons/fa";
import {IoPersonOutline} from "react-icons/io5";
import axios from "axios";

import { GrNext, GrClose, GrEdit, GrTrash  } from "react-icons/gr";
import Button from "./reusableComponents/Button";
import ItemDelete from "./reusableComponents/ItemDelete";
import ItemUpdate from "./reusableComponents/ItemUpdate";

const ItemOvervieuw = () => {
    const [items, setItems] = useState([])

    async function fetchData(){
        try{
            const res = await axios.get("http://localhost:8080/api/v1/items");
            console.log("de data van items api",res);
            const data = res.data;
            setItems(res.data);

        } catch (e) {
            console.error("Er zijn helaas geen items gevonden, error: " + e)
        }

    }
    useEffect(()=>{
        fetchData()
    },[])

    // function selectItem(){
    //     console.log("selectItem called", [items.id -1])
    //     let post=[items.id-1];
    // }

    return (
        <>
            <h1 className='page-header'>Planten</h1>

            <div className='item-container'>

                {items.map(item =>{
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
                                {/*<div className='tools'>*/}
                                {/*    /!*{user && user.authority === "ADMIN" && isTokenValid() &&*!/*/}
                                {/*    (<Button*/}
                                {/*    type="submit"*/}
                                {/*    buttonTitle={<GrTrash/>}*/}
                                {/*    classNameButton="btn delete-post"*/}
                                {/*/>)*/}
                                {/*    /!*}*!/*/}
                                {/*    /!*{user && user.authority === "USER" || user.authority === "ADMIN" && isTokenValid() &&*!/*/}
                                {/*    (<Button*/}
                                {/*    type="submit"*/}
                                {/*    buttonTitle={<GrEdit/>}*/}
                                {/*    classNameButton="btn edit-post"*/}
                                {/*/>)*/}
                                {/*    /!*}*!/*/}
                                {/*    <Button*/}
                                {/*        type="submit"*/}
                                {/*        buttonTitle="Details"*/}
                                {/*        classNameButton="btn to-post"*/}
                                {/*    />*/}
                                {/*</div>*/}
                                <ItemDelete
                                    id ={item.id}
                                />
                                <ItemUpdate
                                    id={item.id}
                                />
                                <Link to={`/Item/${ item.id }`}   className="btn btn-primary">
                                    Meer Informatie
                                </Link>
                                {/*<GrEdit style={{ color:'white', cursor:'pointer'}}/>*/}
                                {/*/!*<ItemDelete id={item.id} />*!/*/}
                                {/*/!*<button onClick={() => delete(item.id)}>Delete</button>*!/*/}
                                {/*<button*/}
                                {/*     onClick={selectItem}*/}
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
export default ItemOvervieuw