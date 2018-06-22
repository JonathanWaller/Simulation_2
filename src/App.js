import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
// import Dashboard from "./components/Dashboard/Dashboard";
// import Wizard from "./components/Wizard/Wizard";
import Header from "./components/Header/Header";
import routes from "./routes.js";
import store from "./ducks/store.js";

import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Header />
            {routes}
            {/* <Dashboard />
          <Wizard /> */}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
