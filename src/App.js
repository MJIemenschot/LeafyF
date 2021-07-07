import React, { useContext } from 'react';
import {ItemProvider} from "./context/Itemcontext";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {AuthContext} from "./context/AuthContext";
import Nav from "./components/Nav";
import './App.css';
import ItemAdd from "./components/ItemAdd";
import Items from "./components/Items";
import UserPortal from "./pages/UserPortal";
import Profile from "./pages/Profile";



function App() {
    const authData = useContext(AuthContext);
    console.log("wat zijn de authData", authData);

  return (
      <ItemProvider>

        <Nav />
          <UserPortal />
          <Profile />
          <Switch>
          {/*<Route path='/add-item'>*/}
          <ItemAdd />
          {/*</Route>*/}

          <Items />

          </Switch>


       </ItemProvider>
  );
}

export default App;
