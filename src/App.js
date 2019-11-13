import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js';
import Landing from './components/Landing.js';
import ContactMe from './components/ContactMe.js';

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/blog'>
            <NavBar currentPage='Blog'/>
            <h1>Blog placeholder</h1>
          </Route>
          <Route path='/projects'>
            <NavBar currentPage='Projects'/>
            <h1>Projects placeholder</h1>
          </Route>
          <Route path='/contact'>
            <NavBar currentPage='Contact Me'/>
            <ContactMe/>
          </Route>
          <Route path='/'>
            <NavBar currentPage='Home'/>
            <Landing/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
