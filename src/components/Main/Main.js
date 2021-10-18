
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Plants from "../Plants";
import axios from "axios";
import EasyPlants from "../EasyPlants";
import DryPlants from "../DryPlants";
import Plant from "../Plant/Plant";

export default function Main(props) {
    //we could put state here to hold the list to share with children
    const { pathname } = useLocation();
    const [contents, setContents] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        async function fetchData () {
            setLoading(true);
            try {
                const res = await axios.get('http://localhost:8080/api/v1/plants')
                console.log("items van backend vanuit Main", res);
                const data = res.data;
                setContents(res.data);
            } catch (e) {
                console.log("het is niet gelukt, error: " + e)
            }
            setLoading(false);
        }
        fetchData()
    },[]);

    return (
         <div className="mainContent">
             <Switch>
                 <Route path="/">
                     <Plants />
                    {/* Plants holds state for fetch results */}
                    <Route path="/plant/:id">
                        <Plant
                            // list={plants}
                        />
                        {/* Plants is passed prop with fetch results */}
                    </Route>
                </Route>
                {/*<Route path="/makkelijk">*/}
                {/*    <EasyPlants list={easy}/>*/}
                {/*    /!* Planets holds state for fetch results *!/*/}
                {/*</Route>*/}

                {/*<Route path="/schaduw">*/}
                {/*    <ShadowPlants list={shadow} />*/}
                    {/* People is passed prop with fetch results */}
                    {/*<Route path="/people/:id">*/}
                    {/*    <Person list={people} />*/}
                    {/*    /!* Person is passed prop with fetch results *!/*/}
                    {/*</Route>*/}
                    {/*<Route path="/vergeet-deze">*/}
                    {/*    <DryPlants list={dry} />*/}
                        {/* People is passed prop with fetch results */}
                        {/*<Route path="/people/:id">*/}
                        {/*    <Person list={people} />*/}
                        {/*    /!* Person is passed prop with fetch results *!/*/}
                        {/*</Route>*/}
                {/*</Route>*/}

                {/*<Route*/}
                {/*    path="/"*/}
                {/*    exact*/}
                {/*    render={() => {*/}
                {/*        return <Plants />;*/}
                {/*    }}*/}
                {/*/>*/}

                {/*<Redirect to="/" />*/}
            </Switch>
        </div>
    );
}

