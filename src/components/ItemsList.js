import React, {useContext, useState, useEffect} from 'react';
import {ItemsContext} from "../context/ItemsContext";
import { GrNext, GrClose, GrEdit, GrTrash  } from "react-icons/gr";
import {Link} from 'react-router-dom';
import ItemDelete from "./reusableComponents/ItemDelete";
import {useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import Button from "./reusableComponents/Button";


const ItemsList = () => {
    const {user, isTokenValid} = useContext(AuthContext);
    const[contents] = useContext(ItemsContext);
    console.log("dit komt binnen in itemslist vanuit itemscontext", contents);


    // this.editItem = function (id) {
    //     //this.props.history.push(`/update-item/${id}`);
    // }
    return (
        <>
            <h1 className='page-header'>Planten overzicht</h1>

        <div className='item-container'>

            {contents.map(item =>{
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
export default ItemsList