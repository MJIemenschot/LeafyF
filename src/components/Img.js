import React, {useContext, useEffect, useState} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import Logo from "./Logo";
import {FaBars, FaHome, FaTimes } from "react-icons/fa";
import {IoPersonOutline} from "react-icons/io5";
import axios from "axios";

import { GrNext, GrClose, GrEdit, GrTrash  } from "react-icons/gr";

const Img = (props) => {
    console.log("props in img",props.pic)
     const [imgSrc, setImgSrc] = useState()

    async function fetchData(){
        try{
            const res = await axios.get(`http://localhost:8080/upload/&{props.pic}`);
            console.log("de res van items api in img",res);
            //const data = res.data;
            // setimg(res.data);

        } catch (e) {
            console.error("Er zijn helaas geen items gevonden, error: " + e)
        }

    }
    useEffect(()=>{
        fetchData()
    },[])

    return (<div>res</div>)



    // return img.map((im,index)=>{
    //     return(
    //         <div className='container'>
    //             <div className='itemInfo'>
    //                 <h2>im</h2>
    //                 {/*<h1>{im.name}</h1>*/}
    //                 {/*<p>{im.description}</p>*/}
    //                 <GrEdit style={{ color:'white', cursor:'pointer'}}/><GrTrash style={{ color:'white', cursor:'pointer'}}/>
    //                 {/*onClick={() => onDelete(item.id)}*/}
    //             </div>
    //         </div>
    //     )
    // })
}
export default Img
