// import React, {useContext, useState, useEffect} from 'react';
// import {ItemsContext} from "../context/ItemsContext";
// import { GrNext, GrClose, GrEdit, GrTrash  } from "react-icons/gr";
// import {Link} from 'react-router-dom';
// import UserDelete from "./reusableComponents/UserDelete";
// import {useHistory} from "react-router-dom";
// import {AuthContext} from "../context/AuthContext";
// import Button from "./reusableComponents/Button";
// import axios from "axios";
//
//
// const DifficultyList = () => {
//     const {user, isTokenValid} = useContext(AuthContext);
//     const{difficulty} = useContext(ItemsContext);
//     console.log("dit komt binnen in difficultylist vanuit itemscontext", difficulty );
//     const [byDifficulty, setByDifficulty] = useState([]);
//     const [error, setError] = useState(false);
//     const [loading, setLoading] = useState(false);
//
//     async function fetchDifficulty () {
//         setLoading(true);
//         try {
//             const res = await axios.get(`http://localhost:8080/api/v1/items/byD/${difficulty}`)
//             console.log("items van backend vanuit difficultyendpoint in Context", res);
//             const data = res;
//             setByDifficulty(res);
//
//         } catch (e) {
//             console.log("het is niet gelukt, error: " + e)
//         }
//         setLoading(false);
//     }
//
//     useEffect(()=>{
//         fetchDifficulty()
//     },[])
//
//     return (
//         <>
//             <h1 className='page-header'>Planten</h1>
//
//         <div className='item-container'>
//
//             {byDifficulty.map(item =>{
//                 return (
//                      //<div style={{background: 'url({item.toPicture}) no repeat center/cover'}} className='itemBg'>
//                         <div key ={item.id} className='itemInfo'>
//                             <h3> {item.name}</h3>
//                             {/*<p>{item.description}</p>*/}
//                             <img src={item.toPicture} alt={item.name} width="80px"/>
//                             <p>watergeven: {item.watering}</p>
//                             <p>standplaats: {item.light}</p>
//                             <p>bijmesten: {item.food}</p>
//                             <div className='tools'>
//                                 <div className='tools'>
//                                     {/*{user && user.authority === "ADMIN" && isTokenValid() &&*/}
//                                     (<Button
//                                     type="submit"
//                                     buttonTitle={<GrTrash/>}
//                                     classNameButton="btn delete-post"
//                                 />)
//                                     {/*}*/}
//                                     {/*{user && user.authority === "USER" || user.authority === "ADMIN" && isTokenValid() &&*/}
//                                     (<Button
//                                     type="submit"
//                                     buttonTitle={<GrEdit/>}
//                                     classNameButton="btn edit-post"
//                                 />)
//                                     {/*}*/}
//                                     <Button
//                                         type="submit"
//                                         buttonTitle="Details"
//                                         classNameButton="btn to-post"
//                                     />
//                             </div>
//                             {/*<GrEdit style={{ color:'white', cursor:'pointer'}}/>*/}
//                             {/*/!*<UserDelete id={item.id} />*!/*/}
//                             {/*/!*<button onClick={() => delete(item.id)}>Delete</button>*!/*/}
//                             {/*<button*/}
//                             {/*     onClick={() => this.editItem(item.id)}*/}
//                             {/*>Bewerk</button>*/}
//                             {/*/!*<button onClick={()=> history.push(`/item/item.id`)}></button>*!/*/}
//                             {/*<Link  to='/item/:id}'>Details</Link>*/}
//
//                         </div>
//                     </div>
//                 );
//             })}
//
//         </div>
//         </>
//
//
//     );
// };
// export default DifficultyList