import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
          <div class="container-fluid">
            <Link to="/">Home</Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
