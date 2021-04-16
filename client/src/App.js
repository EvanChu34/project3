import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

function App() {
  return (
    // <Router>
    //   <div>
    //     <Nav />
    //     <Switch>
    //       <Route exact path={["/", "/books"]}>
    //         <Books />
    //       </Route>
    //       <Route exact path="/books/:id">
    //         <Detail />
    //       </Route>
    //       <Route>
    //         <NoMatch />
    //       </Route>
    //     </Switch>
  //     </div>
  //   </Router>
  <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            
        </InfoWindow>
      </Map>
  );
}

// export default App;

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCyxlzFEbo5T--hz572BoW0NYxkujEzn_s")
})(App)
