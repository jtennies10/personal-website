import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js';
import HomePage from './components/HomePage.js';

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
            <h1>Contact me placeholder</h1>
          </Route>
          <Route path='/'>
            <NavBar currentPage='Home'/>
            <HomePage/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
