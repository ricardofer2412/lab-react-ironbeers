import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Beers from './Components/Beers';
import NewBeer from './Components/NewBeer';
import RandomBeer from './Components/RandomBeer';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" component={NavBar} />
          <Route exact path="/" component={Home} />
          <Route exact path="/allbeer" component={Beers} />
          <Route path="/randombeer">
            <RandomBeer />
          </Route>
          <Route path="/newbeer">
            <NewBeer />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
