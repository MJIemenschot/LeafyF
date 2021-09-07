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
// import Image from "./components/Image";




function App() {
    const authData = useContext(AuthContext);
    console.log("wat zijn de authData", authData);

  return (
       <ItemProvider>
      <>

        <Nav />
          <UserPortal />

          <Profile />
          {/*<Switch>*/}
          {/*<Route path='/add-item'>*/}

          <AddItem />
          {/*</Route>*/}
          <ItemOvervieuw />
          {/*<PostOvervieuw />*/}
          <ItemsList />
          {/*<Items />*/}
          {/*</Switch>*/}
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Footer />
      </>

       </ItemProvider>

  );
}

export default App;
