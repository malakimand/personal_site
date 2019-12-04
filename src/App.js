import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./components/actions/authActions";

import Navbar from "./components/view/Navbar";
import Landing from "./components/view/Landing";

import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";

import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/view/Dashboard";

import { Provider } from "react-redux";
import store from "./store";

// See if token is present
if (localStorage.jwtToken) {
  // add token to header
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // get info by decoding
  const decoded = jwt_decode(token);
  // dispatch to change state of user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// determine if expired or not
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // if expired then Logout user
    store.dispatch(logoutUser());
    // and redirect
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </Provider>
    );
  }
}
export default App;