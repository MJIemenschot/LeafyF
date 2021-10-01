import React, { useContext } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {AuthContext} from "./context/AuthContext";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import './App.css';


import UserPortal from "./pages/UserPortal";
import Profile from "./pages/Profile";
import AddItem from "./components/AddItem";

import ItemsList from "./components/ItemsList";

import DataProvider from "./context/DataContext";

import Item from "./components/Item";
import ItemUpdate from "./components/reusableComponents/ItemUpdate";
import About from "./pages/About";

import EasyPlants from "./components/EasyPlants";
import ShadowPlants from "./components/ShadowPlants";
import DryPlants from "./components/DryPlants";
import EditItem from "./components/EditItem";

import ChangeItem from "./components/ChangeItem";
import Plants from "./components/Plants";
import Plant from "./components/Plant";
import PlantEdit from "./components/PlantEdit";
import PlantChange from "./components/PlantChange";
import PlantAdd from "./components/PlantAdd";






function App() {
    const authData = useContext(AuthContext);
    console.log("wat zijn de authData", authData);

  return (
       <DataProvider>
      <>

        <Nav />
          <Route exact path='/user-portal' component={UserPortal}/>
          <Route exact path='/profile' component={Profile}/>
          {/*<Switch>*/}
          <Route path='/plant-add' component={PlantAdd}/>
          <Route exact path='/' component={Plants}/>
          <Route exact path='/makkelijk' component={EasyPlants}/>
          <Route excact path='/vergeet-deze' component={DryPlants}/>
          <Route exact path='/shadow' component={ShadowPlants}/>
          <Route exact path='/plant/:id' component={Plant}/>

          <Route exact path='/plant-edit/:id' component={PlantEdit}/>
          <Route exact path='/plant-change/:id' component={PlantChange}/>

          <Route exact path='/over-leafy' component={About}/>

          {/*<Items />*/}
          {/*</Switch>*/}
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Footer />
      </>

       </DataProvider>

  );
}

export default App;
