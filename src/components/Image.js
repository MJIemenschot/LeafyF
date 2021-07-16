
import {useEffect, useState} from "react";
import axios from "axios";

export default function Image() {
    const [blobImage, setBlobImage] = useState();
    console.log("wat zijn de props in image?", props)

   useEffect(()=>{
        async function fetchImage() {
            try {
                const result = await axios.get(`http://localhost:8089/api/v1/messages/files.response,${location}`, {
                    responseType: 'blob',
                });
                console.log("de response", result)
                 const imageUrl = result;
                setBlobImage(URL.createObjectURL(imageUrl))
            } catch (e) {
                console.error(e);
            }
        }
        fetchImage()
    },[])


    return (
        <>
            {blobImage && <img src={blobImage} alt={props.fileName} />}
        </>
    )
}