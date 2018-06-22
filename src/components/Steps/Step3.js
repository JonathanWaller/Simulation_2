import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mortgage: 0,
      rent: 0
    };
  }

  mortgageHandler = e => {
    this.setState({
      mortgage: e.target.value
    });
  };

  rentHandler = e => {
    this.setState({
      rent: e.target.value
    });
  };

  completeHandler = (name, address, city, state, zip, image_url) => {
    axios.post("/api/house", { name, address, city, state, zip, image_url });
  };

  render() {
    return (
      <div>
        <div>
          Monthly Mortgage Amount
          <input
            onChange={e => this.mortgageHandler(e)}
            value={this.state.mortgage}
          />
        </div>
        <div>
          Desired Monthly Rent
          <input onChange={e => this.rentHandler(e)} value={this.state.rent} />
        </div>
        <Link to="/wizard/step2">
          <button>Previous Step</button>
        </Link>
        <Link to="/">
          <button
            onClick={() =>
              this.completeHandler(
                this.state.name,
                this.state.address,
                this.state.city,
                this.state.state,
                this.state.zipcode,
                this.state.image_url,
                this.state.mortgage,
                this.state.rent
              )
            }
          >
            Complete
          </button>
        </Link>
      </div>
    );
  }
}

export default Step3;
