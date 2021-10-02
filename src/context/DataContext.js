import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";
import pic from "../assets/img1.jpg";

export const DataContext = createContext({});

function DataProvider (props) {

    const [contents, setContents] = useState([])
    const [deleteIt, setDeleteIt] = useState([])
    const [update, setUpdate] = useState([])
    const [easy, setEasy] = useState([])
    const [shadow, setShadow] = useState([])
    const [light, setLight] = useState([])
    const [dry, setDry] = useState([])

    // const [imgUrl, setImgUrl] = useState(pic);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(()=>{
        async function fetchData () {
            setLoading(true);
            try {
                const res = await axios.get("http://localhost:8080/api/v1/plants")
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
        fetchData()
    },[])


    useEffect(()=>{
        async function fetchShadow(){
            try{
                const res = await axios.get("http://localhost:8080/api/v1/plants/byL/SHADOW");
                console.log("de data van byD easy api",res);
                const data = res.data;
                setShadow(res.data);

            } catch (e) {
                console.error("Er zijn helaas geen planten gevonden gevonden die je in het donker kan zetten, error: " + e)
            }
        }
        fetchShadow()
    },[])




        useEffect(()=>{
            async function fetchEasy(){
                try{
                    const res = await axios.get("http://localhost:8080/api/v1/plants/byD/EASY");
                    console.log("de data van byD easy api",res);
                    const data = res.data;
                    setEasy(res.data);

                } catch (e) {
                    console.error("Er zijn helaas geen makkelijke planten gevonden gevonden, error: " + e)
                }

            }
            fetchEasy()
        },[])


    useEffect(()=>{
        async function fetchDry(){
            try{
                const res = await axios.get("http://localhost:8080/api/v1/plants/byW/MONTH");
                console.log("de data van byD easy api",res);
                const data = res.data;
                setDry(res.data);

            } catch (e) {
                console.error("Er zijn helaas geen planten die nauwelijks water nodig hebben gevonden gevonden, error: " + e)
            }
        }
        fetchDry()
    },[])


    // useEffect(()=>{
        async function deleteItemHandler (id) {
        try{
            await axios.delete(`http://localhost:8080/api/v1/plants/files/${id}`)
            const newItemList = (contents.filter((item)=>item.id !==id));
            console.log('id in deleteItemHandler in context',id)
        }catch (e) {
            console.log("het is niet gelukt, error: " + e)
        }
    }
    // deleteItemHandler()
    // },[])

    // useEffect(() => {
    //     async function deleteItemHandler() {
    //         console.log("Hebben we hier een itemId in component deleteItem?",contents.id)
    //         try {
    //             await axios.delete(`http://localhost:8080/api/v1/items/${id}`);
    //
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     }
    //     deleteItemHandler()
    // },[])
    ////standard deletefunction for local update:
    // function deleteItem(id) {
    //     setItems(items.filter((item)=>item.id !==id))
    // }
    ////zonder usestate?:
    // function deleteItemHandler(itemId){
    //     setDeleteIt(prevItems =>{
    //         return prevItems.filter(item => item.id !== item.id)
    //     });
    // }
    // function updateItemHandler(itemId){
    //     setUpdate(prevItems =>{
    //         return prevItems.filter(item => item.id !== item.id)
    //     });
    // }

    return (
        <DataContext.Provider value={ {contents, easy, shadow, dry, error, loading } }>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;
