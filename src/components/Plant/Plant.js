import './Plant.css';
import {Link, useHistory, useParams} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {CgDrop, CgSun, GiWateringCan} from "react-icons/all";
import {GrCafeteria, GrEdit, GrTrash} from "react-icons/gr";
import PlantDelete from "../PlantDelete/PlantDelete";
import EditButton from "../EditButton/EditButton";
import EditImageBtn from "../EditImageBtn/EditImageBtn";
import {AuthContext} from "../../context/AuthContext";


const Plant = () => {
   const [currentPlant, setCurrentPlant] = useState([]);
     //const [Picture, setPicture] = useState();
     const { id } = useParams();
     const history = useHistory();
    const isTokenValid = localStorage.getItem("token")
    const {
        user
    } = useContext(AuthContext);
    console.log('user in Plant from authcontext' ,user)



useEffect(()=>{
    async function fetchPlant() {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/plants/${id}`);
            console.log('response in fetchplant',response.data)

            setCurrentPlant(response.data)

        } catch (error) {
            console.error('Er ging iets mis', error)
        }
    }
        fetchPlant();
    },[]);

    // const userAuthority =


    return (
        <div className='container'>
            <div>
                <h1 className='page-header' > {currentPlant.name}</h1>
            </div>
            <div className='full-item-container'>
                <div className='full-item'>
                    <img className='full-item-picture' src={currentPlant.downloadUri} alt={currentPlant.name}  width="200px"/>
                    <div className='full-item-text'>
                        <h3>{currentPlant.latinName}</h3>
                        <p className='plant-field'>{currentPlant.description}</p>
                        <p className='plant-field'>{currentPlant.care}</p>
                        <p>{currentPlant.potting}</p>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='full-item-card'>
                        <div className='f-water-care'>
                            <CgDrop className='care-icon'/>
                            {currentPlant.watering==="DAY" &&(<p>Elke dag (zomer)</p>)}
                            {currentPlant.watering==="TWODAYS" &&(<p>Om de dag (zomer)</p>)}
                            {currentPlant.watering==="THREEDAYS" &&(<p>Om de twee dagen (zomer)</p>)}
                            {currentPlant.watering==="WEEK" &&(<p>1 keer per week (zomer)</p>)}
                            {currentPlant.watering==="MONTH" &&(<p>1 keer per maand</p>)}
                        </div>
                        <div className='f-care'>
                            <GiWateringCan className='care-icon'/>
                            {currentPlant.difficulty==="EASY" &&(<p>Makkelijke plant</p>)}
                            {currentPlant.difficulty==="MODERATE" &&(<p>Redelijk makkelijk</p>)}
                            {currentPlant.difficulty==="HARD" &&(<p>Vergt wat extra zorg</p>)}
                        </div>

                    </div>
                    <div className='full-item-card'>
                        <div className='f-light-care'>
                            <CgSun className='care-icon'/>
                            {currentPlant.light==="DIRECTSUN" &&(<p>Kan tegen direct zonlicht</p>)}
                            {currentPlant.light==="SUNNY" &&(<p>Verdraagt geen direct zonlicht</p>)}
                            {currentPlant.light==="HALFSUNNY" &&(<p>Heeft niet zoveel licht nodig</p>)}
                            {currentPlant.light==="SHADOW" &&(<p>Kan op een donker plekje</p>)}
                        </div>
                        <div className='f-food-care'>
                            <GrCafeteria className='care-icon' />
                            {currentPlant.food==="WEEK" &&(<p>Elke week (zomer)</p>)}
                            {currentPlant.food==="TWOWEEKS" &&(<p>Om de week (zomer)</p>)}
                            {currentPlant.food==="MONTH" &&(<p>Elke maand (zomer)</p>)}
                            {currentPlant.food==="NEVER_SPECIAL" &&(<p>Heeft niets nodig</p>)}
                        </div>
                    </div>

                </div>
                {user ?
                    <div className='full-item-tools'>
                        {user && <EditButton id={currentPlant.id}/>}
                        <>{user.authorities.map(abilities=>{
                            return(<>
                                {abilities.authority ==='ROLE_ADMIN' &&<EditImageBtn id={currentPlant.id}/>}
                            </>)}
                        )}
                        </>
                        <>{user.authorities.map(abilities=>{
                            return(<>
                                {abilities.authority ==='ROLE_ADMIN' &&<PlantDelete id={currentPlant.id}/>}
                            </>)}
                        )}
                        </>
                    </div>
                    :<></>}
            </div>
        </div>
    )
}
export default Plant

