import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
    this.getHouses = this.getHouses.bind(this);
    this.deleteHouse = this.deleteHandler.bind(this);
  }

  //   componentDidMount() {
  //     axios.get("/api/houses").then(response => {
  //       //   console.log(response);
  //       this.setState({
  //         houses: response.data
  //       });
  //     });
  //   }

  componentDidMount() {
    this.getHouses();
  }

  getHouses() {
    axios.get("/api/houses").then(response => {
      //   console.log(response);
      this.setState({
        houses: response.data
      });
    });
  }

  deleteHandler(id) {
    axios.delete(`/api/house/${id}`);
    this.getHouses();
  }

  render() {
    // console.log(this.state.houses);
    let myHouses = this.state.houses.map(house => {
      return (
        <div key={house.id}>
          {/* <House name={house.name} /> */}
          <House house={house} deleteHandler={this.deleteHandler} />
        </div>
      );
    });
    return (
      <div>
        <p>Dashboard</p>
        <Link to="/wizard/step1">
          <button>Add New Property</button>
        </Link>
        {myHouses}
        {/* <House /> */}
      </div>
    );
  }
}

export default Dashboard;
