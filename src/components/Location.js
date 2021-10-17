//
// import {useEffect, useState} from "react";
// import axios from "axios";
//
// export default function Location(props) {
//      const [plantLocation, setPlantPlantLocation] = useState();
//     console.log("wat zijn de props in image?", props.location)
//
//    useEffect(()=>{
//         async function fetchLocation() {
//             try {
//                 const result = await axios.get(`http://localhost:8080/api/v1/plants`, {
//                     //responseType: 'image.jpg',
//                     //responseType: 'blob',
//                 });
//                 console.log("de result fetchlocation", result.data)
//
//                 setPlantPlantLocation(result.data)
//             } catch (e) {
//                 console.error(e);
//             }
//         }
//         fetchLocation()
//     },[])
//
//
//     return (
//         <>
//
//             {plantLocation && <img src={plantLocation} alt={props.name} width='80px'/>}
//             {/*<img src={plantImage}/>*/}
//
//             </>
//     )
// }