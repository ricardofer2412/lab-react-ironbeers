import React, { Component } from 'react';
import NavBar from './NavBar';
import beerImg from '../assets/beers.png';
import randomImg from '../assets/random-beer.png';
import newBeerImg from '../assets/new-beer.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <img src={beerImg} height="150" />
            <div className="desc-div">
              <h2>
                <Link to="/allbeer">All Beer</Link>
              </h2>
              <p>
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of...
              </p>
            </div>
          </div>
          <div>
            <img src={randomImg} height="150" />
            <div className="desc-div">
              <h2>
                <Link to="/randombeer">Random Beer</Link>
              </h2>
              <p>
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of...
              </p>
            </div>
          </div>
          <div>
            <img src={newBeerImg} height="150" />
            <div className="desc-div">
              <h2>
                <Link to="/newbeer">New Beer</Link>
              </h2>
              <p>
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
