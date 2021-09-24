// import React, {useContext, useState, useEffect} from 'react';
// import {ItemsContext} from "../context/ItemsContext";
// import { GrNext, GrClose, GrEdit, GrTrash  } from "react-icons/gr";
// import {Link, useHistory, useParams} from 'react-router-dom';
// import ItemDelete from "./reusableComponents/ItemDelete";
// import axios from "axios";
//
//
// const ItemDetails = (props) => {
//     const[contents] = useContext(ItemsContext);
//     const [post, setPost] = useState({})
//     console.log("props van context in itemdetails",props)
//     const { id } = useParams();
//     const history = useHistory();
//     const [loading, setLoading] = useState(false);
//
//     async function fetchData () {
//         setLoading(true);
//         try {
//             const res = await axios.get(`http://localhost:8080/api/v1/items/&{id}`)
//             console.log("items van backend vanuit Context", res);
//             const data = res.data;
//             setPost(res.data);
//             // const blob = new Blob([result.data.config], {
//             //     type: 'image/jpg',
//             // });
//             // const objectUrl = URL.createObjectURL(blob);
//             // setUrl(objectUrl);
//
//         } catch (e) {
//             console.log("het is niet gelukt, error: " + e)
//         }
//         setLoading(false);
//     }
//
//     useEffect(()=>{
//         fetchData()
//     },[])
//
//     return (
//         <>
//             <h1 className='page-header'>Details</h1>
//
//         <div className='item-container'>
//
//             {/*{contents.map(item =>{*/}
//                 return (
//
//                         <div key={post.id} className='fullItem'>
//                             <h3> {post.name}</h3>
//                             <p>{post.description}</p>
//                             <img src={post.toPicture} alt={post.name} width="80px"/>
//                             <div className='tools'>
//                             <GrEdit style={{ color:'white', cursor:'pointer'}}/>
//                             <ItemDelete itemId={post.id} />
//                             </div>
//
//                             <Link to='/'  >Terug naar overzicht</Link>
//                         </div>
//
//                 );
//             {/*})}*/}
//
//         </div>
//         </>
//
//
//     );
// };
// export default ItemDetails