import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { updateProperty } from "../..ducks/reducer";

class Step1 extends Component {
  constructor(props) {
    super(props);
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

  //   picHandler = e => {
  //     this.setState({
  //       image_url: e.target.value
  //     });
  //   };

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          Property Name
          <input
            onChange={e => this.nameHandler(e)}
            placeholder="name"
            value={this.state.name}
          />
        </div>
        <div>
          Address
          <input
            onChange={e => this.addressHandler(e)}
            placeholder="address"
            value={this.state.address}
          />
        </div>
        <div>
          City
          <input
            onChange={e => this.cityHandler(e)}
            placeholder="city"
            value={this.state.city}
          />
        </div>
        <div>
          State
          <input
            onChange={e => this.stateHandler(e)}
            placeholder="state"
            value={this.state.state}
          />
        </div>
        <div>
          Zip
          <input
            onChange={e => this.zipHandler(e)}
            placeholder="zipcode"
            value={this.state.zipcode}
          />
        </div>
        <Link to="/wizard/step2">
          <button
            onClick={() =>
              updateProperty(
                this.state.propertyName,
                this.state.address,
                this.state.city,
                this.state.state,
                this.state.zip
              )
            }
          >
            Next Step
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { name, address, city, state, zipcode, image_url } = state;
  return {
    name,
    address,
    city,
    state,
    zipcode,
    image_url
  };
};

export default connect(
  mapStateToProps,
  { updateProperty }
)(Step1);
