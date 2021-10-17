import React, {useContext, useState, useEffect} from 'react';
import {DataContext} from "../context/DataContext";
import {GrNext, GrClose, GrEdit, GrTrash, GrRestaurant, GrCafeteria} from "react-icons/gr";


import {useHistory, withRouter, useLocation, useParams} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import Button from "./reusableComponents/Button";
import {CgDrop, CgSun, GiWateringCan} from "react-icons/all";
import PlantDelete from "./PlantDelete";
import Image from "./Image";
import axios from "axios";
import {FaSearch} from "react-icons/fa";
import SearchForm from "./SearchForm";
import * as queryString from "querystring";


const SearchResults = (props) => {
    // console.log("wat zit in props van SResultspage", props.sTxt);
    // const searchTerm = props.sTxt;
    console.log('useLocation.search',useLocation().search);
    const {user, isTokenValid} = useContext(AuthContext);
     //const queryParams = queryString.parse(match.location.search);
    const queryParam = useLocation().search;
    //const query = new URLSearchParams(search).get('s');
    const [contents,setContents] = useState([]);

    // const { search } = window.location;
    // const {SearchText} =useParams();
    // console.log( 'Stext in SResult params?',SearchText)
    const [appState, setAppState] = useState("idle");

    useEffect(()=>{
        async function searchPlants(){

            setAppState("searching ...");

            try{
                // const res = await axios.get(`http://localhost:8080/api/v1/plants/search?query=${userInputToSearch}`);
                const res = await axios.get(`http://localhost:8080/api/v1/plants/search${queryParam}`);
                console.log("de data van search easy api",res);
                const data = res.data;
                setContents(res.data);

            } catch (e) {
                console.error("Er zijn helaas geen planten gevonden gevonden die je in het donker kan zetten, error: " + e)
            }
        }
        searchPlants(contents);
    },[]);
    // if (appState === "searching ...") {
    //     return <h1>Zoeken..</h1>;
    // }

    return (
        <div className='item-container'>
            {/*<p>{appState}</p>*/}
            {/*<label>Search</label>*/}
            {/*<input onChange={(event) => SearchText(event.target.value)} />*/}
            {/*/!*<button onClick={() => searchPlants(searchTerm)}>search</button>*!/*/}
            {/*/!*<SearchForm q ={searchTerm}/>*!/*/}

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
                        />)
                            {/*}*/}
                            {/*{user && user.authority === "USER" || user.authority === "ADMIN" && isTokenValid() &&*/}
                            (<Button
                            type="submit"
                            buttonTitle={<GrEdit/>}
                            classNameButton="btn edit-post"
                        />){/*}*/}

                        </div>
                    </div>
                );
            })}

        </div>

    )

};
export default withRouter(SearchResults);