import React from "react";
import {Route} from 'react-router-dom';
//import './App.css';
// import Form from './components/Form';
// import Navbar from './components/Nav';
import Login from './components/Login/Login.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home/Home.js';
import AboutUs from './components/About/About.js';
//import LostItems from './components/Lost/Lost.js';
import Contact from './components/Contact/Contact.js';
import SignUp from './components/Up/Up.js';


function App() {
  return (
    <>
  <CssBaseline />
  <Route exact path="/" component={Login} />
  <Route path="/Home" component={Home} />
  <Route path="/AboutUs" component={AboutUs} />
  <Route path="/Contact" component={Contact} />
  <Route path="/SignUp" component={SignUp} />
   </>
  );
}

export default App;





//import React from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Books from "./pages/Books";
//import Detail from "./pages/Detail";
//import NoMatch from "./pages/NoMatch";
//import Nav from "./components/Nav";

//function App() {
//  return (
//    <Router>
//      <div>
//        <Nav />
//        <Switch>
//          <Route exact path={["/", "/books"]}>
//            <Books />
//          </Route>
//          <Route exact path="/books/:id">
//            <Detail />
//          </Route>
//          <Route>
//            <NoMatch />
//          </Route>
//        </Switch>
//      </div>
//    </Router>
//  );
//}

//export default App;
