import React, { Component } from "react";
import "./App.css";
import AddProject from "./components/Project/AddProject";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />

            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="addProject" element={<AddProject />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
