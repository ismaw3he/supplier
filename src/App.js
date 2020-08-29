import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LogIn from "./pages/logIn/LogIn"
import SignUp from "./pages/signUp/SignUp"
import Main from "./pages/main/Main"
import Verification from "./pages/verification/Verification"
import Profile from "./pages/profile/Profile"

import { Provider } from "react-redux";
import store from "./redux/store"
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Provider store={store} >
      <Router basename="/supplier">
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/logIn">Log In</Link>
              </li>
              <li>
                <Link to="/signUp">Sign Up</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <PrivateRoute path="/profile" isAuthenticated={false}>
              <Profile />
            </PrivateRoute>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <Route path="/logIn">
              <LogIn />
            </Route>
            <Route path="/verification">
              <Verification />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
