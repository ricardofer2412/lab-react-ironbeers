import React, { Component } from 'react';
import axios from 'axios';

class Beers extends Component {
  state = {
    beerList: [],
  };

  componentDidMount() {
    console.log('List');
    this.getAllBeer();
  }

  getAllBeer = () => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then((res) => {
      const beers = res.data;
      console.log(beers);
      this.setState({ beerList: beers });
    });
  };
  render() {
    return (
      <div>
        {this.state.beerList.map((beer) => (
          <div className="beerList">
            <div>
              <img src={beer.image_url} width="60px" height="125px" />
            </div>
            <div className="beerInfo">
              <h3>{beer.name}</h3>
              <h4>{beer.tagline}</h4>
              <p>Created by: {beer.contributed_by}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Beers;
