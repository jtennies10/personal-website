import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing.js';
import BlogHome from './components/BlogHome.js';
import Projects from './components/Projects.js';


function App() {
  return (
      <Router>
        <Switch>
          <Route path='/blog' component={BlogHome}/>
          <Route path='/projects' component={Projects}/>
          <Route exact path='/' component={Landing}/>
          <Redirect from='*' to='/'/>
        </Switch>
      </Router>
  );
}

export default App;
