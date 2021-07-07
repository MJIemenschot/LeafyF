import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";
import img from "../assets/img1.jpg";

export const ItemsContext = createContext({});

function ItemsContextProvider ({children}) {
    const [items, setItems] = useState([])
    const [url, setUrl] = useState(img);

    async function fetchData () {
        try {
            const result = await axios.get("http://localhost:8089/api/v1/items")
            const blob = new Blob([result.data.config], {
                type: 'image/jpg',
            });
            const objectUrl = URL.createObjectURL(blob);
            setUrl(objectUrl);
            setItems(result.data)
        } catch (e) {
            console.log("het is niet gelukt, error: " + e)
        }
    }

    console.log()

    const data = {
        items:items,
        picturePath: url
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <ItemsContext.Provider value={data}>
            {children}
        </ItemsContext.Provider>
    )
}

export default ItemsContext;
// import React, { useState, useEffect, createContext } from "react";
//
//
// export const ItemsContext = createContext();
//
// export const ItemsState = (props) => {
//     const [items, setItems] = useState([
//         {
//             id:1,
//             name:'een plant',
//             description: 'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proiden',
//             fav: true},
//         {
//             id:2,
//             name:'twee plant',
//             description:'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proiden',
//             fav: true},
//         {
//             id:3,
//             name:'drie plant',
//             description:'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proiden',
//             fav: true},
//     ]);
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