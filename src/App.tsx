import * as React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {LandingPage, PostDetailed, CreatePostPage} from "./pages";
import {GlobalStyle} from "./lib/style/index"

function App() {
  return (
    <BrowserRouter
    basename={process.env.PUBLIC_URL}
    >
      <GlobalStyle/>
        <Switch>
          <Route path="/" 
          // render={(props) => <Dashboard {...props} isAuthed={true} />}
          exact  component={LandingPage} />
          <Route path="/post" exact component={PostDetailed} 
          // render={(props) => <Dashboard {...props} isAuthed={true} />}
          />
             <Route path="/create-post" exact component={CreatePostPage} 
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


