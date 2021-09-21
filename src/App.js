import React, { useContext } from 'react';
import {ItemProvider} from "./context/Itemcontext";


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {AuthContext} from "./context/AuthContext";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import './App.css';
 import ItemAdd from "./components/ItemAdd";

import UserPortal from "./pages/UserPortal";
import Profile from "./pages/Profile";
import AddItem from "./components/AddItem";

import ItemsList from "./components/ItemsList";
import ItemOvervieuw from "./components/ItemOvervieuw";

import AddPost from "./components/AddPost";
import PostOvervieuw from "./components/PostOvervieuw";
import Items from "./components/Items";
import ItemsProvider from "./context/ItemsContext";
import ItemDetails from "./components/ItemDetails";
import Item from "./components/Item";
import ItemUpdate from "./components/reusableComponents/ItemUpdate";
import About from "./pages/About";
import DifficultyList from "./components/DifficultyList";
import EasyPlants from "./components/EasyPlants";
import ShadowPlants from "./components/ShadowPlants";
import DryPlants from "./components/DryPlants";
//import Item from "./components/Item";
// import Image from "./components/Image";




function App() {
    const authData = useContext(AuthContext);
    console.log("wat zijn de authData", authData);

  return (
       <ItemsProvider>
      <>

        <Nav />
          <Route exact path='/' component={ItemsList}/>
          <Route exact path='/makkelijk' component={EasyPlants}/>
          <Route excact path='/vergeet-deze' component={DryPlants}/>
          <Route exact path='/shadow' component={ShadowPlants}/>
          <Route exact path='/user-portal' component={UserPortal}/>
          <Route exact path='/profile' component={Profile}/>
          {/*<Switch>*/}
          <Route path='/add-item' component={AddItem}/>

          <Route exact path='/item/:id' component={Item}/>
          <Route exact path='/update-item' component={ItemUpdate}/>
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
