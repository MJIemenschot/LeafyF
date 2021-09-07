import React, {useContext, useState, useEffect} from 'react';

import {ItemsContext} from "../context/ItemsContext";
import { GrNext, GrClose, GrEdit, GrTrash  } from "react-icons/gr";


import {Link} from 'react-router-dom';
//import Item from "./Item";

const ItemsList = (props) => {
    const {items} = useContext(ItemsContext);
    const [itemId, setItemId] = useState();
    // // const [items, setItems] = useContext(ItemsContext);
    console.log("De props in itemslist",props)
    //
    // useEffect(()=>{
    // }, [])

//     return (
//         <>
//             <div className='itemInfo'>
//                <h1>{item.name}</h1>
//                <p>{item.description}</p>
//                <GrEdit style={{ color:'white', cursor:'pointer'}}/><GrTrash style={{ color:'white', cursor:'pointer'}}/>
//                 {/*onClick={() => onDelete(item.id)}*/}
//            </div>
//         </>
//     )
// }
    return (

        <div className='container'>
            <h2>Itemlijst</h2>
            {/*console.log(items)*/}
            {/*{items.map(item =>{*/}
            {/*    return (*/}
            {/*        // <div style={{background: 'url(./item.img) no repeat center/cover'}} className='itemBg'>*/}
            {/*            <div className='itemInfo'>*/}
            {/*                <h3>{item.name}</h3>*/}
            {/*                <p>{item.description}</p>*/}
            {/*                <img src={item.toPicture} alt={item.name} width="80px"/>*/}
            {/*                <GrEdit style={{ color:'white', cursor:'pointer'}}/><GrTrash style={{ color:'white', cursor:'pointer'}}*/}
            {/*                // onClick={() => onDelete(item.id)}*/}
            {/*            />*/}
            {/*                <Link to='#'>Details</Link>*/}
            {/*            </div>*/}
            {/*        //</div>*/}
            {/*    );*/}
            {/*})};*/}

        </div>


    );
};
export default ItemsList