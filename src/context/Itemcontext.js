import {useState, createContext} from "react";
import img from "../assets/img1.jpg";

//create context
export const ItemContext = createContext();
//Provider component
export const ItemProvider = (props) => {
    const [items, setItems] = useState([
        {
            id:1,
            name:'een plant',
            description: 'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proiden',
            img: 'img',
            fav: true},
        {
            id:2,
            name:'twee plant',
            description:'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proiden',
            img: '',
            fav: true},
        {
            id:3,
            name:'drie plant',
            description:'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proiden',
            img: '',
            fav: true},
    ]);

    //Actions
     /*const searchItems= async () =>{
         setError(false);
         setLoading(true);
         const response = await
     }*/

    /*const [isLoading, setIsLoading]= useState(true);*/

    // useEffect(() => {
    //     console.log('fetch items here');
    //
    //     async function fetchItems(){
    //         const data = await axios.get('https://fakestoreapi.com/products');
    //
    //         console.log("de hek", data.data);
    //     }
    //     fetchItems()
    //
    //
    // },[]);


    function deleteItem(id) {
        setItems(items.filter((item)=>item.id !==id))
    }

    return (
        <ItemContext.Provider value ={[items, setItems,]  }>
            {props.children}

        </ItemContext.Provider>
    )
}
