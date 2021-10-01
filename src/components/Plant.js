import {Link, useHistory, useParams} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import Container from './reusableComponents/Container';
import axios from "axios";
import {ItemsContext} from "../context/ItemsContext";
import Button from "./reusableComponents/Button";
import {CgDrop, CgSun, GiWateringCan} from "react-icons/all";
import {GrCafeteria, GrEdit, GrTrash} from "react-icons/gr";
import ItemDelete from "./ItemDelete";


const Plant = () => {
   const [currentPlant, setCurrentPlant] = useState([]);
     //const [Picture, setPicture] = useState();
     const { id } = useParams();
     const history = useHistory();


useEffect(()=>{
    async function fetchPlant() {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/plants/${id}`);
            console.log('response in fetchplant',response.data)

            setCurrentPlant(response.data)

        } catch (error) {
            console.error('Something went wrong', error)
        }
    }
        fetchPlant();
    },[]);


    return (
        <div className='container'>
            <div>
                <h1 className='page-header'> {currentPlant.name}</h1>
            </div>

            <div className="full-item-container">

                <div className='full-item'>
                    <img className='full-item-picture' src={currentPlant.downloadUri} alt={currentPlant.name} width="200px"/>
                    <div className='full-item-text'>
                        <h3>{currentPlant.latinName}</h3>
                        <p>{currentPlant.description}</p>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='full-item-card'>
                        <div className='water-care'>
                            <CgDrop className='care-icon'/>
                            {currentPlant.watering==="DAY" &&(<p>Elke dag (zomer)</p>)}
                            {currentPlant.watering==="TWODAYS" &&(<p>Om de dag (zomer)</p>)}
                            {currentPlant.watering==="THREEDAYS" &&(<p>Om de twee dagen (zomer)</p>)}
                            {currentPlant.watering==="WEEK" &&(<p>1 keer per week (zomer)</p>)}
                            {currentPlant.watering==="MONTH" &&(<p>1 keer per maand</p>)}
                        </div>
                        <div className='care'>
                            <GiWateringCan className='care-icon'/>
                            {currentPlant.difficulty==="EASY" &&(<p>Makkelijke plant</p>)}
                            {currentPlant.difficulty==="MODERATE" &&(<p>Redelijk makkelijk</p>)}
                            {currentPlant.difficulty==="HARD" &&(<p>Vergt wat extra zorg</p>)}
                        </div>

                    </div>
                    <div className='full-item-card'>
                        <div className='light-care'>
                            <CgSun className='care-icon'/>
                            {currentPlant.light==="DIRECTSUN" &&(<p>Kan tegen direct zonlicht</p>)}
                            {currentPlant.light==="SUNNY" &&(<p>Verdraagt geen direct zonlicht</p>)}
                            {currentPlant.light==="HALFSUNNY" &&(<p>Heeft niet zoveel licht nodig</p>)}
                            {currentPlant.light==="SHADOW" &&(<p>Kan op een donker plekje</p>)}
                        </div>
                        <div className='food-care'>
                            <GrCafeteria className='care-icon' />
                            {currentPlant.food==="WEEK" &&(<p>Elke week (zomer)</p>)}
                            {currentPlant.food==="TWOWEEKS" &&(<p>Om de week (zomer)</p>)}
                            {currentPlant.food==="MONTH" &&(<p>Elke maand (zomer)</p>)}
                            {currentPlant.food==="NEVER_SPECIAL" &&(<p>Heeft niets nodig</p>)}
                        </div>


                    </div>
                    <div className='full-item-tools'>
                        <div >

                            {/*{user && user.authority === "ADMIN" && isTokenValid() &&*/}
                            <ItemDelete id={currentPlant.id}/>
                            {/*    (<Button*/}
                            {/*    type="submit"*/}
                            {/*    buttonTitle={<GrTrash/>}*/}
                            {/*    classNameButton="btn delete-post"*/}
                            {/*    // onclick={}*/}
                            {/*/>)*/}
                            {/*}*/}
                            {/*{user && user.authority === "USER" || user.authority === "ADMIN" && isTokenValid() &&*/}
                            {/*<Link to={`/plant-edit/${ currentPlant.id }`}   className="btn-to-post">*/}
                            {/*    <GrEdit/>Change*/}
                            {/*</Link>*/}
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
export default Plant
