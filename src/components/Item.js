import {Link, useHistory, useParams} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import Container from './reusableComponents/Container';
import axios from "axios";
import {ItemsContext} from "../context/ItemsContext";
import Button from "./reusableComponents/Button";
import {CgDrop, CgSun, GiWateringCan} from "react-icons/all";
import {GrCafeteria, GrEdit, GrTrash} from "react-icons/gr";
import ItemDelete from "./reusableComponents/ItemDelete";


const Item = () => {
   const [currentItem, setCurrentItem] = useState([]);
     //const [Picture, setPicture] = useState();
     const { id } = useParams();
     const history = useHistory();


useEffect(()=>{
    async function fetchItem() {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/items/${id}`);
            console.log('response in fetchitem',response.data)

            setCurrentItem(response.data)

        } catch (error) {
            console.error('Something went wrong', error)
        }
    }
        fetchItem();
    },[]);


    return (
        <div className='container'>
            <div>
                <h1 className='page-header'> {currentItem.name}</h1>
            </div>

            <div className="full-item-container">

                <div className='full-item'>
                    <img className='full-item-picture' src={currentItem.toPicture} alt={currentItem.name} width="200px"/>
                    <div className='full-item-text'>
                        <h3>{currentItem.latinName}</h3>
                        <p>{currentItem.description}</p>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='full-item-card'>
                        <div className='water-care'>
                            <CgDrop className='care-icon'/>
                            {currentItem.watering==="DAY" &&(<p>Elke dag (zomer)</p>)}
                            {currentItem.watering==="TWODAYS" &&(<p>Om de dag (zomer)</p>)}
                            {currentItem.watering==="THREEDAYS" &&(<p>Om de twee dagen (zomer)</p>)}
                            {currentItem.watering==="WEEK" &&(<p>1 keer per week (zomer)</p>)}
                            {currentItem.watering==="MONTH" &&(<p>1 keer per maand</p>)}
                        </div>
                        <div className='care'>
                            <GiWateringCan className='care-icon'/>
                            {currentItem.difficulty==="EASY" &&(<p>Makkelijke plant</p>)}
                            {currentItem.difficulty==="MODERATE" &&(<p>Redelijk makkelijk</p>)}
                            {currentItem.difficulty==="HARD" &&(<p>Vergt wat extra zorg</p>)}
                        </div>

                    </div>
                    <div className='full-item-card'>
                        <div className='light-care'>
                            <CgSun className='care-icon'/>
                            {currentItem.light==="DIRECTSUN" &&(<p>Kan tegen direct zonlicht</p>)}
                            {currentItem.light==="SUNNY" &&(<p>Verdraagt geen direct zonlicht</p>)}
                            {currentItem.light==="HALFSUNNY" &&(<p>Heeft niet zoveel licht nodig</p>)}
                            {currentItem.light==="SHADOW" &&(<p>Kan op een donker plekje</p>)}
                        </div>
                        <div className='food-care'>
                            <GrCafeteria className='care-icon' />
                            {currentItem.food==="WEEK" &&(<p>Elke week (zomer)</p>)}
                            {currentItem.food==="TWOWEEKS" &&(<p>Om de week (zomer)</p>)}
                            {currentItem.food==="MONTH" &&(<p>Elke maand (zomer)</p>)}
                            {currentItem.food==="NEVER_SPECIAL" &&(<p>Heeft niets nodig</p>)}
                        </div>


                    </div>
                    <div className='full-item-tools'>
                        <div >

                            {/*{user && user.authority === "ADMIN" && isTokenValid() &&*/}
                            <ItemDelete id={currentItem.id}/>
                            {/*    (<Button*/}
                            {/*    type="submit"*/}
                            {/*    buttonTitle={<GrTrash/>}*/}
                            {/*    classNameButton="btn delete-post"*/}
                            {/*    // onclick={}*/}
                            {/*/>)*/}
                            {/*}*/}
                            {/*{user && user.authority === "USER" || user.authority === "ADMIN" && isTokenValid() &&*/}
                            <Link to={`/change-item/${ currentItem.id }`}   className="btn-to-post">
                                <GrEdit/>Change
                            </Link>
                            {/*    (<Button*/}
                            {/*    type="submit"*/}
                            {/*    buttonTitle={<GrEdit/>}*/}
                            {/*    classNameButton="btn edit-post"*/}
                            {/*    onClickEvent={selectItem(contents.id)}*/}
                            {/*/>)*/}
                            {/*}*/}

                        </div>

                    </div>



                </div>



            </div>

        </div>

    )
}
export default Item

