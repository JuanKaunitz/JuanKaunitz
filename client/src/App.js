import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './components/Landing.jsx';
import Home from './components/Home.jsx';
import Details from './components/Details.jsx';
import MakeYourMeal from './components/MakeYourMeal.jsx';

import './App.css';        

class App extends Component {
  render() {
  return (
    <Router>      
      <div className="App"> 

        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/home" exact component={Home} />
          <Route path="/details" exact component={Details} />
          <Route path="/makeYourMeal" exact component={MakeYourMeal} /> 
        </Switch>
      </div>
    </Router>
  );
  }
}
          

export default App;
