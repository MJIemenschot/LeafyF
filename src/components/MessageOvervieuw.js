import React, {useContext, useEffect, useState} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import Logo from "./Logo";
import {FaBars, FaHome, FaTimes } from "react-icons/fa";
import {IoPersonOutline} from "react-icons/io5";
import axios from "axios";
// import Image from "Image";

import { GrNext, GrClose, GrEdit, GrTrash  } from "react-icons/gr";
import Image from "./Image";

const MessageOvervieuw = () => {
    const [messages, setMessages] = useState([])

    async function fetchData(){
        try{
            const res = await axios.get("http://localhost:8080/api/v1/messages/files");
            console.log("de data van messages api",res);
            const data = res.data;
            setMessages(res.data);

        } catch (e) {
            console.error("Er zijn helaas geen items gevonden, error: " + e)
        }

    }
    useEffect(()=>{
        fetchData()
    },[])

    return messages.map((message, index) => {
        return(
            <div className='container'>
                <div className='itemInfo'>
                    <h2>message</h2>
                    <h1>{message.title}</h1>
                    <p>{message.description}</p>
                    {/*<img src={message.fileName}/>*/}
                    <Image props={message.id} />
                    <GrEdit style={{ color:'white', cursor:'pointer'}}/><GrTrash style={{ color:'white', cursor:'pointer'}}/>
                    {/*onClick={() => onDelete(item.id)}*/}
                </div>
            </div>
        )
    })
}
export default MessageOvervieuw