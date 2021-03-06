
import {useEffect, useState} from "react";
import axios from "axios";

export default function Image(props) {
     const [plantImage, setPlantImage] = useState();
    console.log("wat zijn de props in image?", props.id)

   useEffect(()=>{
        async function fetchImage() {
            try {
                const result = await axios.get(`http://localhost:8080/api/v1/plants/${props.id}/download/`, {
                    responseType: 'image.jpg',
                    //responseType: 'blob',
                });
                console.log("de result fetchimage", result.config.url)
                //                 console.log("de result uit imago display", result.config.url)
//
//                  setBlobImag(result.config.url);
//                 console.log("controle uit setBlobImag",blobImag)

                setPlantImage(result.config.url)
            } catch (e) {
                console.error(e);
            }
        }
        fetchImage()
    },[])


    return (
        <>

            {plantImage && <img src={plantImage} alt={props.name} width='80px'/>}
            {/*<img src={plantImage}/>*/}

            </>
    )
}