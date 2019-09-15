import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {LandingPage, PostDetailed} from "../src/pages";

function App() {
  return (
    <BrowserRouter>
       
        <Switch>
          <Route path="/" exact  component={LandingPage} />
          <Route path="/post" exact component={PostDetailed} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
