import React, {useContext, useEffect, useState} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import Logo from "./Logo";
import {FaBars, FaHome, FaTimes } from "react-icons/fa";
import {IoPersonOutline} from "react-icons/io5";
import axios from "axios";

import { GrNext, GrClose, GrEdit, GrTrash  } from "react-icons/gr";
import Img from "./Img";

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

   return items.map((item,index)=>{
       return(
           <div className='container'>
               <div className='itemInfo'>
                   <h2>item</h2>
                   <h1>{item.name}</h1>
                   <p>{item.description}</p>
                   <Img pic={item.file}/>
                   <GrEdit style={{ color:'white', cursor:'pointer'}}/><GrTrash style={{ color:'white', cursor:'pointer'}}/>
                    {/*onClick={() => onDelete(item.id)}*/}
               </div>
           </div>
       )
   })
}
export default ItemOvervieuw
