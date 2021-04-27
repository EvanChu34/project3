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
import Up from './components/Up/Up.js';
import Detail from './components/Detail/Detail.js'
import "@fontsource/monoton";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';




  const FredokaFont = createMuiTheme({
    typography: {
      fontFamily: [
        'Fredoka One',
        'cursive',
      ].join(','),
    },});

    const SigmarOneFont = createMuiTheme({
      typography: {
        fontFamily: [
          'Sigmar One',
          'cursive',
        ].join(','),
      },});

      const CodaCaptionFont = createMuiTheme({
        typography: {
          fontFamily: [
            'Coda Caption',
            'sans-serif',
          ].join(','),
        },});
    
        const JosefinSansFont = createMuiTheme({
          typography: {
            fontFamily: [
              'Josefin Sans',
              'sans-serif',
            ].join(','),
          },});

          const Orbitron = createMuiTheme({
            typography: {
              fontFamily: [
                'Orbitron',
                'sans-serif',
              ].join(','),
            },});

        


function App() {
  return (
    <>
  <CssBaseline />
  <Route exact path="/" component={Login} />
  <Route path="/Home" component={Home} />
  <Route path="/AboutUs" component={AboutUs} />
  <Route exact path ="/items/:id" >
    <Detail/>
  </Route>
  <Route path="/Contact" component={Contact} />
  <Route path="/Up" component={Up} />
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
