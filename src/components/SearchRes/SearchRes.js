// import React, {useContext, useState, useEffect} from 'react';
// import {DataContext} from "../context/DataContext";
// import {GrNext, GrClose, GrEdit, GrTrash, GrRestaurant, GrCafeteria} from "react-icons/gr";
//
//
// import {useHistory, withRouter, useLocation, useParams, Link} from "react-router-dom";
// import {AuthContext} from "../context/AuthContext";
// import Button from "./reusableComponents/Button";
// import {CgDrop, CgSun, GiWateringCan} from "react-icons/all";
// import PlantDelete from "./PlantDelete";
// import Image from "./Image";
// import axios from "axios";
// import {FaSearch} from "react-icons/fa";
// import SearchForm from "./SearchForm";
// import * as queryString from "querystring";
//
//
// const SearchRes = (props) => {
//     console.log(props)
//      const {user, isTokenValid} = useContext(AuthContext);
//     // // const {contents} = useContext(DataContext);
//     // console.log("wat zit in match SResultspage", match);
//     // const QueryParams = queryString.parse(match.location.search);
//     const [contents,setContents] = useState([]);
//     //const [searchTerm, setSearchTerm] = useState('');
//     // const {SearchText} =useParams();
//     // console.log( 'Stext in SResult params?',SearchText)
//      const [appState, setAppState] = useState("idle");
//
//     useEffect(()=>{
//         async function searchPlants(){
//
//             setAppState("searching ...");
//
//             try{
//                 // const res = await axios.get(`http://localhost:8080/api/v1/plants/search?query=${userInputToSearch}`);
//                 const res = await axios.get(`http://localhost:8080/api/v1/plants`);
//                 console.log("de data van search easy api",res);
//                 const data = res.data;
//                 setContents(res.data);
//
//             } catch (e) {
//                 console.error("Er zijn helaas geen planten gevonden gevonden die je in het donker kan zetten, error: " + e)
//             }
//         }
//         searchPlants(contents);
//     },[]);
//     // if (appState === "searching ...") {
//     //     return <h1>Zoeken..</h1>;
//     // }
//
//     return (
//         <div className='item-container'>
//             {/*<p>{appState}</p>*/}
//             {/*<label>Search</label>*/}
//             {/*<input onChange={(event) => SearchText(event.target.value)} />*/}
//             {/*/!*<button onClick={() => searchPlants(searchTerm)}>search</button>*!/*/}
//             {/*/!*<SearchForm q ={searchTerm}/>*!/*/}
//             {contents.length === 0 &&<p>Geen Planten...</p> }
//
//             {contents.map(plant =>{
//
//                 return (
//
//                     <div key ={plant.id} className='itemInfo'>
//                         <h3> {plant.name}</h3>
//                         <h5>{plant.latinName}</h5>
//                         <Image id={plant.id}/>
//                         <Link to={`/plant/${ plant.id }`}   className="btn-to-post">
//                             Meer Informatie
//                         </Link>
//                         <div className='water-care'>
//                             <CgDrop className='care-icon'/>
//                             {plant.watering==="DAY" &&(<p>Elke dag (zomer)</p>)}
//                             {plant.watering==="TWODAYS" &&(<p>Om de dag (zomer)</p>)}
//                             {plant.watering==="THREEDAYS" &&(<p>Om de twee dagen (zomer)</p>)}
//                             {plant.watering==="WEEK" &&(<p>1 keer per week (zomer)</p>)}
//                             {plant.watering==="MONTH" &&(<p>1 keer per maand</p>)}
//                         </div>
//                         <div className='care'>
//                             <GiWateringCan className='care-icon'/>
//                             {plant.difficulty==="EASY" &&(<p>Makkelijke plant</p>)}
//                             {plant.difficulty==="MODERATE" &&(<p>Redelijk makkelijk</p>)}
//                             {plant.difficulty==="HARD" &&(<p>Vergt wat extra zorg</p>)}
//                         </div>
//                         <div className='light-care'>
//                             <CgSun className='care-icon'/>
//                             {plant.light==="DIRECTSUN" &&(<p>Kan tegen direct zonlicht</p>)}
//                             {plant.light==="SUNNY" &&(<p>Verdraagt geen direct zonlicht</p>)}
//                             {plant.light==="HALFSUNNY" &&(<p>Heeft niet zoveel licht nodig</p>)}
//                             {plant.light==="SHADOW" &&(<p>Kan op een donker plekje</p>)}
//                         </div>
//                         <div className='food-care'>
//                             <GrCafeteria className='care-icon'/>
//                             {plant.food==="WEEK" &&(<p>Elke week (zomer)</p>)}
//                             {plant.food==="TWOWEEKS" &&(<p>Om de week (zomer)</p>)}
//                             {plant.food==="MONTH" &&(<p>Elke maand (zomer)</p>)}
//                             {plant.food==="NEVER_SPECIAL" &&(<p>Heeft niets nodig</p>)}
//                         </div>
//                         <div className='tools'>
//
//                             {/*{user && user.authority === "ADMIN" && isTokenValid() &&*/}
//                             <PlantDelete id={plant.id} className='btn-to-post'/>
//                             {/*}*/}
//                             {/*{user && user.authority === "USER" || user.authority === "ADMIN" && isTokenValid() &&*/}
//                             <Link to={`/edit-plant/${ plant.id }`}   className='btn-to-edit'>
//                                 <GrEdit/>Pas aan
//                             </Link>
//                             {/*}*/}
//                             {/*/!*{user && user.authority === "USER" || user.authority === "ADMIN" && isTokenValid() &&*!/*/}
//                             {/*<Link to={`/plant-edit/${ plant.id }`}   className='btn-to-edit'>*/}
//                             {/*    <GrEdit/>editb*/}
//                             {/*</Link>*/}
//                             {/*}*/}
//                             {/*<Link to={`/plant-change/${ plant.id }`}   className="btn-to-edit">*/}
//                             {/*    <GrEdit/>Verander*/}
//                             {/*</Link>*/}
//
//                         </div>
//
//                     </div>
//                 );
//             })}
//         </div>
//
//     )
//
// };
// export default SearchRes;