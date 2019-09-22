import * as React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {LandingPage, PostDetailed} from "./pages";

function App() {
  return (
    <BrowserRouter
 
    >
       
        <Switch>
          <Route path="/" 
          // render={(props) => <Dashboard {...props} isAuthed={true} />}
          exact  component={LandingPage} />
          <Route path="/post" exact component={PostDetailed} 
          // render={(props) => <Dashboard {...props} isAuthed={true} />}
          />

          <Route    
        // render={(props) => <Dashboard {...props} isAuthed={true} />}
          component={() => (<div>404 Not found </div>)} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;


