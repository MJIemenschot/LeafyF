import React, {useContext, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {AuthContext} from "./context/AuthContext";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import './App.css';
import UserPortal from "./pages/UserPortal";
import Profile from "./pages/Profile";
import DataProvider from "./context/DataContext";
import About from "./pages/About";
import EasyPlants from "./components/EasyPlants";
import ShadowPlants from "./components/ShadowPlants";
import DryPlants from "./components/DryPlants";
import Plants from "./components/Plants";
import Plant from "./components/Plant/Plant";
import PlantEdit from "./components/PlantForms/PlantEdit";
import PlantAdd from "./components/PlantForms/PlantAdd";
import {EditPlant} from "./components/PlantForms/EditPlant";
import UsersList from "./components/UsersList";
import UserUpdate from "./components/UserForms/UserUpdate";
import PasswordReset from "./components/PasswordReset";
import SearchBar from "./components/SearchBar/SearchBar";



function App() {
    const authData = useContext(AuthContext);
    console.log("wat zijn de authData", authData);
    const [terms, setTerms] = useState('');
    const[term,setTerm] = useState('')


    function addTerm(term) {
      let newTerms = new Set([term, ...terms]);
      setTerms(Array.from(newTerms));
    }

  return (
       <DataProvider>
      <>

        <Nav />

        <SearchBar term={term}
                   setTerm={setTerm}

        />

          <Route exact path='/user-portal' component={UserPortal}/>
          <Route exact path='/profile' component={Profile}/>

        <Switch>
          <Route path='/plant-add' component={PlantAdd}/>
          <Route exact path='/users' component={UsersList}/>
          <Route path='/user-update/:username' component={UserUpdate}/>
          <Route path='/reset-password/:username' component={PasswordReset}/>
          <Route exact path='/' component={Plants}/>

          <Route exact path='/makkelijk' component={EasyPlants}/>
          <Route excact path='/vergeet-deze' component={DryPlants}/>
          <Route exact path='/shadow' component={ShadowPlants}/>
          <Route exact path='/plant/:id' component={Plant}/>

          <Route exact path='/edit-plant/:id' component={EditPlant}/>
          <Route exact path='/plant-edit/:id' component={PlantEdit}/>
          <Route exact path='/over-leafy' component={About}/>


        </Switch>
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Footer />
      </>

       </DataProvider>

  );
}

export default App;
