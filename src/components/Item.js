import { useHistory, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import Container from './reusableComponents/Container';
import axios from "axios";
import {ItemsContext} from "../context/ItemsContext";


const Item = () => {
     const [contents] = useContext(ItemsContext);
     console.log('contents in Item', contents)
    // console.log("contents van context in item",contents)
   const [currentItem, setCurrentItem] = useState({});
     //const [Picture, setPicture] = useState();
     const { id } = useParams();
     const history = useHistory();

    async function fetchItem() {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/items/${id}`);
            console.log('response in fetchitem',response)

            setCurrentItem(response)

        } catch (error) {
            console.error('Something went wrong', error)
        }
    }
useEffect(()=>{
        fetchItem();
    },[]);
    console.log('currenItem',currentItem);

    return (
        <div>
            <h1>{currentItem.name}</h1>

        </div>
    )
}
export default Item

