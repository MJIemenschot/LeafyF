import React, {useContext, useState, useEffect} from 'react';
import {ItemsContext} from "../context/ItemsContext";
import { GrNext, GrClose, GrEdit, GrTrash  } from "react-icons/gr";
import {Link} from 'react-router-dom';
import ItemDelete from "./reusableComponents/ItemDelete";
import {useHistory} from "react-router-dom";


const ItemsList = () => {
    const[contents] = useContext(ItemsContext);

    // this.editItem = function (id) {
    //     //this.props.history.push(`/update-item/${id}`);
    // }
    return (
        <>
            <h1 className='page-header'>Planten</h1>

        <div className='item-container'>

            {contents.map(item =>{
                return (
                     //<div style={{background: 'url({item.toPicture}) no repeat center/cover'}} className='itemBg'>
                        <div key ={item.id} className='itemInfo'>
                            <h3> {item.name}</h3>
                            {/*<p>{item.description}</p>*/}
                            <img src={item.toPicture} alt={item.name} width="80px"/>
                            <p>watergeven: {item.watering}</p>
                            <p>standplaats: {item.light}</p>
                            <p>bijmesten: {item.food}</p>

                            <div className='tools'></div>
                            <GrEdit style={{ color:'white', cursor:'pointer'}}/>
                            {/*<ItemDelete id={item.id} />*/}
                            {/*<button onClick={() => delete(item.id)}>Delete</button>*/}

                            <button
                                 onClick={() => this.editItem(item.id)}
                            >Bewerk</button>
                            {/*<button onClick={()=> history.push(`/item/item.id`)}></button>*/}


                            <Link  to='/item/:id}'>Details</Link>

                        </div>
                   // </div>
                );
            })}

        </div>
        </>


    );
};
export default ItemsList