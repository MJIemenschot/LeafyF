import './PlantIndex.css';
import Button from "../reusableComponents/Button";
import {CgDrop, CgSun, GiWateringCan} from 'react-icons/all';
import {GrCafeteria, GrEdit, GrTrash} from 'react-icons/gr';
import React, {useContext, useState} from 'react';
import {DataContext} from "../../context/DataContext";
import Image from '../Image/Image';
import {Link} from 'react-router-dom';
import PlantDelete from '../PlantDelete/PlantDelete';
import EditButton from "../EditButton/EditButton";
import EditImageBtn from "../EditImageBtn/EditImageBtn";




const PlantIndex = (props) => {
    console.log('props in index',props.contents)
    //const [index, setIndex] = useState([]);
    const contents = props.contents;
    console.log('contents in index',contents);
    function refreshPage() {
        window.location.reload(false);
    }

    return(

            <div className='item-container'>

                {contents.length === 0 &&<h3 className='nothing-found'>Geen Planten...</h3> }
                {/*//de inhoud op alfabetische volgord van Nederlandse naam*/}
                {contents.sort((a, b) => a.name > b.name ? 1 : -1).map(plant =>{
                    return (

                        <div key ={plant.id} className='itemInfo'>
                            <h3> {plant.name}</h3>
                            <h5>{plant.latinName}</h5>
                            {/*//Met het onderstaande het onderstaande kan de afbeelding weergegeven worden als ik hiervoor de weergaveoptie ga inbouwen*/}
                            {/*<Image id={plant.id}/>*/}
                            <Link to={`/plant/${ plant.id }`}
                                  className='btn-to-post'
                            >
                                Meer Informatie
                            </Link>
                            <div className='water-care'>
                                <CgDrop className='care-icon'/>
                                {plant.watering==='DAY' &&(<p>Elke dag (zomer)</p>)}
                                {plant.watering==='TWODAYS' &&(<p>Om de dag (zomer)</p>)}
                                {plant.watering==='THREEDAYS' &&(<p>Om de twee dagen (zomer)</p>)}
                                {plant.watering==='WEEK' &&(<p>1 keer per week (zomer)</p>)}
                                {plant.watering==='MONTH' &&(<p>1 keer per maand</p>)}
                            </div>
                            <div className='care'>
                                <GiWateringCan className='care-icon'/>
                                {plant.difficulty==='EASY' &&(<p>Makkelijke plant</p>)}
                                {plant.difficulty==='MODERATE' &&(<p>Redelijk makkelijk</p>)}
                                {plant.difficulty==='HARD' &&(<p>Vergt wat extra zorg</p>)}
                            </div>
                            <div className='light-care'>
                                <CgSun className='care-icon'/>
                                {plant.light==='DIRECTSUN' &&(<p>Kan tegen direct zonlicht</p>)}
                                {plant.light==='SUNNY' &&(<p>Verdraagt geen direct zonlicht</p>)}
                                {plant.light==='HALFSUNNY' &&(<p>Heeft niet zoveel licht nodig</p>)}
                                {plant.light==='SHADOW' &&(<p>Kan op een donker plekje</p>)}
                            </div>
                            <div className='food-care'>
                                <GrCafeteria className='care-icon'/>
                                {plant.food==='WEEK' &&(<p>Elke week (zomer)</p>)}
                                {plant.food==='TWOWEEKS' &&(<p>Om de week (zomer)</p>)}
                                {plant.food==='MONTH' &&(<p>Elke maand (zomer)</p>)}
                                {plant.food==='NEVER_SPECIAL' &&(<p>Heeft niets nodig</p>)}
                            </div>

                        </div>
                    );
                })}
            </div>


        )
}
export default PlantIndex