import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: ""
    };
  }

  picHandler = e => {
    this.setState({
      image_url: e.target.value
    });
  };

  render() {
    return (
      <div>
        <div>
          Picture
          <input
            onChange={e => this.picHandler(e)}
            placeholder="image"
            value={this.state.image_url}
          />
        </div>
        <Link to="/wizard/step1">
          <button>Previous Step</button>
        </Link>
        <Link to="/wizard/step3">
          <button>Next Step</button>
        </Link>
      </div>
    );
  }
}

export default Step2;
