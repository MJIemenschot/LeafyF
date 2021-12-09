import './SearchResults.css';
import React, {useContext, useState, useEffect} from 'react';
import {DataContext} from "../../context/DataContext";
import {GrNext, GrClose, GrEdit, GrTrash, GrRestaurant, GrCafeteria} from 'react-icons/gr';


import {useHistory, withRouter, useLocation, useParams, Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import Button from "../../components/reusableComponents/Button";
import {CgDrop, CgSun, GiWateringCan} from 'react-icons/all';
import PlantDelete from '../../components/PlantDelete/PlantDelete';
import Image from '../../components/Image/Image';
import axios from 'axios';
import {FaSearch} from "react-icons/fa";

import * as queryString from "querystring";
import EditButton from "../../components/EditButton/EditButton";
import EditImageBtn from "../../components/EditImageBtn/EditImageBtn";


const SearchRes = (match) => {

    console.log('useLocation.search',useLocation().search);
    const {user, isTokenValid} = useContext(AuthContext);
    //const queryParams = queryString.parse(match.location.search);
    const queryParam = useLocation().search;
    //const query = new URLSearchParams(search).get('s');
     const [success, toggleSuccess] = useState(false);
    const [error, setError] = useState('');
    const [contents,setContents] = useState([]);
    let history = useHistory();
    const [appState, setAppState] = useState( '');
     // const [loading, setLoading] = useState(false);

    useEffect(()=>{
        async function searchPlants(){
            //setError('');
                // setLoading(true)

            setAppState('zoeken ...');

            try{
                const res = await axios.get(`http://localhost:8080/api/v1/plants/search${queryParam}`);
                console.log('de data van search easy api',res);
                const data = res.data;
                setContents(res.data);
                toggleSuccess(true);
            } catch (e) {
                // console.error('Er zijn helaas geen planten gevonden met die naam, error: ' + e)
                console.log('search error', e.res.data.message)
                 setError(`Geen data, error: (${e.res.data.message})`);
                 setAppState('');
                 // setLoading(false)
            }
        }
        setTimeout(() => {
            (async() =>await searchPlants(contents))();
        }, 2000);

          searchPlants(contents);

    },[]);

    //
    // function relocate() {
    //     history.push('/')
    // }
    // // }
    // function refreshPage() {
    //     relocate();
    //     window.location.reload(false);
    // }
    // function refresh() {
    //     window.location.reload(false);
    // }
    // function noPlants(){
    //     setError(`Er zijn helaas geen planten gevonden met die naam`)
    // }

    function closeResult(){
        setContents('')
    }



    // function closeAndRefresh(){
    //     closeResult()
    //     relocate()
    // }


    return  (
        <>
            {/*{loading &&<p>Zoeken...</p>}*/}
            {contents &&
            <div className='found'>
                {contents.map(plant =>{
                    return (
                        <div key ={plant.id} className='found-item-info'>
                            {/*<h1 className='page-header' data-testid='pageheader'>Gevonden:</h1>*/}
                            <h3>{plant.name}</h3><span>
                                <h5>{plant.latinName}</h5>
                            {/*<Image id={plant.id}/>*/}
                            <Link to={`/plant/${ plant.id }`}   className='btn-to-post'>
                                    Meer Informatie
                                </Link>
                            <button
                            className='close-found'
                            onClick={closeResult}
                        >X</button>
                        </span>
                            <div className='water-care'>
                                <CgDrop className='care-icon'/>
                                {plant.watering==="DAY" &&(<p>Elke dag (zomer)</p>)}
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
            }
            {contents.length===0 &&<div className='not-found'><p >Er zijn helaas geen planten gevonden met die naam {error}</p></div>}
            {error && <p className='error-message'>{error}</p>}
        </>
    )
};
export default SearchRes;