import React, {useContext, useEffect, useState} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import Logo from "./Logo";
import {FaBars, FaHome, FaTimes } from "react-icons/fa";
import {IoPersonOutline} from "react-icons/io5";
import axios from "axios";

import { GrNext, GrClose, GrEdit, GrTrash  } from "react-icons/gr";

import Imago from "./Imago";

const POvervieuw = () => {
    const [posts, setPosts] = useState([])

    async function fetchData(){
        try{
            const res = await axios.get("http://localhost:8080/products");
            console.log("de data van products api",res);
            const data = res.data;
            setPosts(res.data);

        } catch (e) {
            console.error("Er zijn helaas geen posts gevonden, error: " + e)
        }

    }
    useEffect(()=>{
        fetchData()
    },[])

    return posts.map((post,index)=>{
        return(
            <div className='container'>
                <div className='itemInfo'>
                    <h2>Product</h2>
                    <h1>{post.name}</h1>
                    <p>{post.description}</p>
                    <Imago id={post.id}/>
                    <GrEdit style={{ color:'white', cursor:'pointer'}}/><GrTrash style={{ color:'white', cursor:'pointer'}}/>
                    {/*onClick={() => onDelete(item.id)}*/}
                </div>
            </div>
        )
    })
}
export default POvervieuw
