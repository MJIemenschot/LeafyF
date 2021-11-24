import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";


export const DataContext = createContext({});

function DataProvider (props) {
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('albums');
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
            } catch (e) {
                console.log("Geen planten, error: " + e.res.data)
            }
            setLoading(false);
        }
        fetchData()
    },[]);
//Delete
//     useEffect(()=>{
//         async function deletePlant (id) {
//         try{
//             const response = await axios.delete(`http://localhost:8080/api/v1/plants/files/${id}`)
//             const newItemList = (contents.filter((item)=>item.id !==id));
//             //console.log('id in deleteItemHandler in context',id)
//             console.log('newItemlist in deletehandler',newItemList)
//
//         }catch (e) {
//             console.log("het is niet gelukt, error: " + e)
//         }
//     }
//     deletePlant()
//
//     },[]);

//sorteer
    useEffect(() => {
        const sortArray = type => {
            const types = {
                name: 'name',
                latinName: 'latinName',
                uploadedDate: 'uploadedDate',
            };
            const sortProperty = types[type];
            const sorted = [...contents].sort((a, b) => b[sortProperty] - a[sortProperty]);
            setData(sorted);
        };
        sortArray(sortType);
    }, [sortType]);


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
                console.error('Er zijn helaas geen planten die nauwelijks water nodig hebben gevonden, error: ' + e.message)

                setError(e.message);

            }
        }
        fetchDry()
    },[])



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
