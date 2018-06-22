import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";

import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: 0,
      image_url: ""
    };
  }

  nameHandler = e => {
    this.setState({
      name: e.target.value
    });
  };

  addressHandler = e => {
    this.setState({
      address: e.target.value
    });
  };

  cityHandler = e => {
    this.setState({
      city: e.target.value
    });
  };

  stateHandler = e => {
    this.setState({
      state: e.target.value
    });
  };

  zipHandler = e => {
    this.setState({
      zipcode: e.target.value
    });
  };

  picHandler = e => {
    this.setState({
      image_url: e.target.value
    });
  };

  completeHandler = (name, address, city, state, zip, image_url) => {
    axios.post("/api/house", { name, address, city, state, zip, image_url });
  };

  render() {
    return (
      <div>
        <p>Wizard</p>
        <Link to="/">
          <button>Cancel</button>
        </Link>

        <div>
          Property Name
          <input
            onChange={e => this.nameHandler(e)}
            placeholder="name"
            value={this.state.name}
          />
        </div>
        {/* <p>{this.state.name}</p> */}
        <div>
          Address
          <input
            onChange={e => this.addressHandler(e)}
            placeholder="address"
            value={this.state.address}
          />
        </div>
        {/* <p>{this.state.address}</p> */}
        <div>
          City
          <input
            onChange={e => this.cityHandler(e)}
            placeholder="city"
            value={this.state.city}
          />
        </div>
        {/* <p>{this.state.city}</p> */}
        <div>
          State
          <input
            onChange={e => this.stateHandler(e)}
            placeholder="state"
            value={this.state.state}
          />
        </div>
        {/* <p>{this.state.state}</p> */}
        <div>
          Zip
          <input
            onChange={e => this.zipHandler(e)}
            placeholder="zipcode"
            value={this.state.zipcode}
          />
          <div>
            Picture
            <input
              onChange={e => this.picHandler(e)}
              placeholder="image"
              value={this.state.image_url}
            />
          </div>
          {/* <p>{this.state.image_url}</p> */}
        </div>
        {/* <div>
          Monthly Mortgage Amount
          <input />
        </div>
        <div>
          Desired Monthly Rent
          <input />
        </div> */}
        <Link to="/">
          <button
            onClick={() =>
              this.completeHandler(
                this.state.name,
                this.state.address,
                this.state.city,
                this.state.state,
                this.state.zipcode,
                this.state.image_url
              )
            }
          >
            Complete
          </button>
        </Link>
        {/* <Switch>
          <Route />
          <Route />
          <Route />
        </Switch> */}
      </div>
    );
  }
}

export default Wizard;
