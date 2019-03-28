import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './Components/About';
import Career from './Components/Career';
import TechStack from './Components/TechStack';
import Projects from './Components/Projects';
import Navigation from './Components/Navigation';
import ErrorPage from './Components/ErrorPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
        <Navigation />
        <Switch>
          <Route path="/" render={About} exact/>
          <Route path="/Career" render={Career}/>
          <Route path="/TechStack" render={TechStack}/>
          <Route path="/Projects" render={Projects}/>
          <Route render={ErrorPage}/>
        </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
