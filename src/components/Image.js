
import {useEffect, useState} from "react";
import axios from "axios";

export default function Image(props) {
     const [image, setImage] = useState();
    console.log("wat zijn de props in image?", props.file)

   useEffect(()=>{
        async function fetchImage() {
            try {
                const result = await axios.get(`http://localhost:8080/${props.file}`, {
                      //responseType: 'blob',
                });
                console.log("de result uit image get", result.config.url)
                  setImage(result.config.url);

               // setImage(result);
                  console.log("controle dit is nu image",image)
               //   console.log("de result", result)
                  //const imageUrl = result;
                 // setImage(URL.createObjectURL(imageUrl))
            } catch (e) {
                console.error(e);
            }
        }
        fetchImage()
    },[])


    return (
        <>

            {image && <img src={image} alt="image not available" width="50px"/>}

            </>
    )
}