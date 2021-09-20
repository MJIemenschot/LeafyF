import React, {useContext, useState, useEffect} from 'react';
import {ItemsContext} from "../context/ItemsContext";
import { GrNext, GrClose, GrEdit, GrTrash  } from "react-icons/gr";
import {Link} from 'react-router-dom';
import ItemDelete from "./reusableComponents/ItemDelete";


const ItemDetails = (props) => {
    const[items, setItems] = useContext(ItemsContext);
    console.log("props van context in itemdetails",props)

    return (
        <>
            <h1 className='page-header'>Details</h1>

        <div className='item-container'>

            {items.map(item =>{
                return (
                     //<div style={{background: 'url({item.toPicture}) no repeat center/cover'}} className='itemBg'>
                        <div key={item.id} className='itemInfo'>
                            <h3> {item.name}</h3>
                            {/*<p>{item.description}</p>*/}
                            <img src={item.toPicture} alt={item.name} width="80px"/>
                            <div className='tools'></div>
                            <GrEdit style={{ color:'white', cursor:'pointer'}}/>
                            <ItemDelete itemId={item.id} />

                            <Link to='/item/:id' itemId={item.id} >Details</Link>
                        </div>
                   // </div>
                );
            })}

        </div>
        </>


    );
};
export default ItemDetails