import React from 'react';
import './App.css';
import {
  Link
} from "react-router-dom";


import {RenderRoutes} from "./routing/RenderRoutes";
import ROUTES from "./routing/routes";

function App() {
  return (
        <div className="App">
          {/* <nav>
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
            
          </nav> */}
          <RenderRoutes routes={ROUTES} />
          
        </div>
  );
}

export default App;
