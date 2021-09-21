import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";
import pic from "../assets/img1.jpg";

export const ItemsContext = createContext({});

function ItemsProvider (props) {

    const [contents, setContents] = useState([])
    const [deleted, setDeleted] = useState([])
    const [update, setUpdate] = useState([])
    const [difficulty, setDifficulty] = useState([])

    // const [imgUrl, setImgUrl] = useState(pic);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    async function fetchData () {
        setLoading(true);
        try {
            const res = await axios.get("http://localhost:8080/api/v1/items")
            console.log("items van backend vanuit Context", res);
            const data = res.data;
            setContents(res.data);
            // const blob = new Blob([result.data.config], {
            //     type: 'image/jpg',
            // });
            // const objectUrl = URL.createObjectURL(blob);
            // setUrl(objectUrl);

        } catch (e) {
            console.log("het is niet gelukt, error: " + e)
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchData()
    },[])


    // useEffect(()=>{
    //
    //     async function deleteIt  (id) {
    //     try{
    //         await axios.delete(`http://localhost:8080/api/v1/items/${id}`)
    //         setDeleted(contents.filter((item)=>item.id !==id));
    //         console.log('id in deleteit in context',id)
    //     }catch (e) {
    //         console.log("het is niet gelukt, error: " + e)
    //     }
    //
    // }
    //
    // },[])


    // function deleteItemHandler(itemId){
    //     setDeleted(prevItems =>{
    //         return prevItems.filter(item => item.id !== item.id)
    //     });
    // }
    function updateItemHandler(itemId){
        setUpdate(prevItems =>{
            return prevItems.filter(item => item.id !== item.id)
        });
    }

    return (
        <ItemsContext.Provider value={[contents, setContents]}>
            {props.children}
        </ItemsContext.Provider>
    )
}

export default ItemsProvider;
// import React, { useState, useEffect, createContext } from "react";
//
//
// export const ItemsContext = createContext();
//
// export const ItemsState = (props) => {

//     const [search, setSearch ] = useState('');
//     //const [firstItem, setFirstItem] = useState(0);
//     //const [lastItem, setLastItem]  = useState(9);
//     const [isHidden, setIsHidden] = useState(false);
//     const [error, setError] = useState(false);
//     const [loading, setLoading] = useState(false);
//
//
//     /*const APP_ID ='566529ea';
//     const APP_KEY = '3ab76970f6b34417380410bc747ce138';
//     const FIRST_REQ= 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=9';
//     const URL = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${firsItem}&to={lastItem}';
//
//     const getFirstResult = async () => {
//         setLoading(true);
//         const response = await fetch(FIRST_REQ);
//         const data = await response.json;
//         setItems(data);
//         setLoading(false)
//     };
//
//     const searchItems = async () => {
//         setError(false);
//         setLoading(true);
//         const response = await fetch(URL);
//         const data = await response.json();
//         if(search.trim() === '' &&!data.more){
//             setLoading(false);
//             setError(true);
//             return;
//         }
//         setItems(data.hits);
//         setLoading(false);
//     };
// */
//    /* const getItems = (e) => {
//         if (search.trim() === '') return;
//         setIsHidden(true);
//         searchItems();
//     }*/
//     /*useEffect(()=>{
//         getFirstResult();
//     },[])*/
//
//     //Actions
//     function deleteItem(id) {
//         setItems(items.filter((item)=>item.id !==id))
//     }
//     return (
//         <ItemsContext.provider value={{items, setItems, deleteItem ,search, setSearch, isHidden, error, loading}}>
//             {props.children}
//         </ItemsContext.provider>
//     )
// }