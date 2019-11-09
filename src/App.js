import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/blog'>
          <h1>Blog placeholder</h1>
        </Route>
        <Route path='/projects'>
          <h1>Projects placeholder</h1>
        </Route>
        <Route path='/about'>
          <h1>About me placeholder</h1>
        </Route>
        <Route path='/'>
          <NavBar/>
        </Route>
        <Redirect from='*' to='/'/>
      </Switch>
    </Router>
  );
}

export default App;
