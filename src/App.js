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

import ItemsProvider from "./context/ItemsContext";

import Item from "./components/Item";
import ItemUpdate from "./components/reusableComponents/ItemUpdate";
import About from "./pages/About";

import EasyPlants from "./components/EasyPlants";
import ShadowPlants from "./components/ShadowPlants";
import DryPlants from "./components/DryPlants";
import EditItem from "./components/EditItem";

import ChangeItem from "./components/ChangeItem";






function App() {
    const authData = useContext(AuthContext);
    console.log("wat zijn de authData", authData);

  return (
       <ItemsProvider>
      <>

        <Nav />
          <Route exact path='/user-portal' component={UserPortal}/>
          <Route exact path='/profile' component={Profile}/>
          {/*<Switch>*/}
          <Route path='/add-item' component={AddItem}/>
          <Route exact path='/' component={ItemsList}/>
          <Route exact path='/makkelijk' component={EasyPlants}/>
          <Route excact path='/vergeet-deze' component={DryPlants}/>
          <Route exact path='/shadow' component={ShadowPlants}/>
          <Route exact path='/item/:id' component={Item}/>

          <Route exact path='/edit-item/:id' component={EditItem}/>
          <Route exact path='/update-item/:id' component={ItemUpdate}/>
          <Route exact path='/change-item/:id' component={ChangeItem}/>

          <Route exact path='/over-leafy' component={About}/>

          {/*<Items />*/}
          {/*</Switch>*/}
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Footer />
      </>

       </ItemsProvider>

  );
}

export default App;
