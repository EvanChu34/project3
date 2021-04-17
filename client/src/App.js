import React from "react";
import {Route} from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Nav';
import Login from './components/Login';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <>
  <CssBaseline />
  <Route path="/" component={Login} />
  <Route path="/Filler" component={Filler} />
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
