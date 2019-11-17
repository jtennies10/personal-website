import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js';
import Landing from './components/Landing.js';
import BlogHome from './components/BlogHome.js';
import Projects from './components/Projects.js';


function App() {
  return (
      <Router>
        <Switch>
          <Route path='/blog'>
            <NavBar/>
            <BlogHome/>
          </Route>
          <Route path='/projects'>
            <NavBar/>
            <Projects/>
          </Route>
          <Route path='/'>
            <NavBar/>
            <Landing/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
