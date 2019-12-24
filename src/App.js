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

import Leetcode from "./components/content/Leetcode";
import LeetcodeEntry from "./components/content/LeetcodeEntry";
import LeetcodeForm from "./components/form/LeetcodeForm";
import EditLeetcodeForm from "./components/form/EditLeetcodeForm";

import AboutMe from "./components/content/Aboutme";
import NBAfeed from "./components/content/NBAfeed";

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
          <Route exact path="/leetcode/:page" component={Leetcode} />
          <Route exact path="/leetcodeEntry" component={LeetcodeEntry} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/nba" component={NBAfeed} />
          <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard}/>
              <PrivateRoute exact path="/leetcodeform" component={LeetcodeForm}  />
              <PrivateRoute exact path="/editleetcodeform" component={EditLeetcodeForm}  />
          </Switch>
        </div>
      </Router>
    </Provider>
    );
  }
}
export default App;