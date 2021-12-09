import React, {useContext, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {AuthContext} from "./context/AuthContext";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import './App.css';
import UserPortal from "./pages/UserPortal/UserPortal";
import Profile from "./components/Profile/Profile";
import DataProvider from "./context/DataContext";
import About from "./pages/About/About";
import EasyPlants from "./pages/Plants/EasyPlants";
import ShadowPlants from "./pages/Plants/ShadowPlants";
import DryPlants from "./pages/Plants/DryPlants";
import Plants from "./pages/Plants/Plants";
import Plant from "./pages/Plant/Plant";
import PlantEdit from "./components/PlantForms/PlantEdit";
import PlantAdd from "./components/PlantForms/PlantAdd";
import {EditPlant} from "./components/PlantForms/EditPlant";
import UsersList from "./pages/UsersList/UsersList";
import UserUpdate from "./components/UserForms/UserUpdate";
import UserDetail from "./pages/UserDetail/UserDetail";
import UserEdit from "./components/UserForms/UserEdit";
import UserDelete from "./components/UserDelete/UserDelete";
import TopBar from "./components/Topbar/TopBar";
import SearchResults from "./pages/SearchResults/SearchResults";
import SearchRes from "./pages/SearchResults/SearchRes";



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
          <TopBar/>
        <Nav />
          {authData.user ?<Profile />:<></>}
        {/*<SearchBar term={term}*/}
        {/*           setTerm={setTerm}*/}
        {/*/>*/}
          <Switch>
          <Route exact path='/user-portal' component={UserPortal}/>
          <Route path='/plant-add' component={PlantAdd}/>
          <Route exact path='/users' component={UsersList}/>
          <Route path='/user/:username' component={UserDetail}/>
          <Route path='/user-update/:username' component={UserUpdate}/>
          <Route path='/user-edit/:username' component={UserEdit}/>
          {/*<Route exact path={`/search-res/:?query=${term}`} component={SearchRes}/>*/}
          <Route exact path='/search-res' component={SearchRes}/>
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
