import React, {useContext, useState, useEffect} from 'react';
import {ItemsContext} from "../context/ItemsContext";
import {GrNext, GrClose, GrEdit, GrTrash, GrRestaurant, GrCafeteria} from "react-icons/gr";
import {Link} from 'react-router-dom';
import ItemDelete from "./reusableComponents/ItemDelete";
import {useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import Button from "./reusableComponents/Button";
import {CgDrop, CgSun, GiWateringCan} from "react-icons/all";


const ItemsList = () => {
    const {user, isTokenValid} = useContext(AuthContext);
    const {contents} = useContext(ItemsContext);
    console.log("dit komt binnen in itemslist vanuit itemscontext", contents);


    function selectItem(){

    }
    return (
        <>
            <h1 className='page-header'>Alle planten</h1>

        <div className='item-container'>

            {contents.map(item =>{
                return (
                     //<div style={{background: 'url({item.toPicture}) no repeat center/cover'}} className='itemBg'>
                        <div key ={item.id} className='itemInfo'>
                            <h3> {item.name}</h3>
                            {/*<p>{item.description}</p>*/}
                            <img src={item.toPicture} alt={item.name} width="80px"/>
                            <Button
                                type="submit"
                                buttonTitle="Details"
                                classNameButton="btn to-post"
                            />
                            <div className='water-care'>
                                <CgDrop/>
                                {item.watering==="DAY" &&(<p>Elke dag (zomer)</p>)}
                                {item.watering==="TWODAYS" &&(<p>Om de dag (zomer)</p>)}
                                {item.watering==="THREEDAYS" &&(<p>Om de twee dagen (zomer)</p>)}
                                {item.watering==="WEEK" &&(<p>1 keer per week (zomer)</p>)}
                                {item.watering==="MONTH" &&(<p>1 keer per maand</p>)}
                            </div>
                            <div className='care'>
                                <GiWateringCan/>
                                {item.difficulty==="EASY" &&(<p>Makkelijke plant</p>)}
                                {item.difficulty==="MODERATE" &&(<p>Redelijk makkelijk</p>)}
                                {item.difficulty==="HARD" &&(<p>Vergt wat extra zorg</p>)}
                            </div>
                            <div className='light-care'>
                                <CgSun/>
                                {item.light==="DIRECTSUN" &&(<p>Kan tegen direct zonlicht</p>)}
                                {item.light==="SUNNY" &&(<p>Verdraagt geen direct zonlicht</p>)}
                                {item.light==="HALFSUNNY" &&(<p>Heeft niet zoveel licht nodig</p>)}
                                {item.light==="SHADOW" &&(<p>Kan op een donker plekje</p>)}
                            </div>
                            <div className='food-care'>
                                <GrCafeteria/>
                                {item.food==="WEEK" &&(<p>Elke week (zomer)</p>)}
                                {item.food==="TWOWEEKS" &&(<p>Om de week (zomer)</p>)}
                                {item.food==="MONTH" &&(<p>Elke maand (zomer)</p>)}
                                {item.food==="NEVER_SPECIAL" &&(<p>Heeft niets nodig</p>)}
                            </div>
                            <div className='tools'>

                                    {/*{user && user.authority === "ADMIN" && isTokenValid() &&*/}
                                    (<Button
                                    type="submit"
                                    buttonTitle={<GrTrash/>}
                                    classNameButton="btn delete-post"
                                    // onclick={}
                                />)
                                    {/*}*/}
                                    {/*{user && user.authority === "USER" || user.authority === "ADMIN" && isTokenValid() &&*/}
                                    (<Button
                                    type="submit"
                                    buttonTitle={<GrEdit/>}
                                    classNameButton="btn edit-post"
                                    onClickEvent={selectItem(contents.id)}
                                />)
                                    {/*}*/}

                            </div>
                            {/*<GrEdit style={{ color:'white', cursor:'pointer'}}/>*/}
                            {/*/!*<ItemDelete id={item.id} />*!/*/}
                            {/*/!*<button onClick={() => delete(item.id)}>Delete</button>*!/*/}
                            {/*<button*/}
                            {/*     onClick={selectItem(item.id)}*/}
                            {/*>Bewerk</button>*/}
                            {/*<button onClick={()=> history.push(`/item-update`)}></button>*/}
                            {/*<Link  to='/item/:id}'>Details</Link>*/}

                        </div>

                );
            })}

        </div>
        </>


    );
};
export default ItemsList