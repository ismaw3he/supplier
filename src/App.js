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
          
          <RenderRoutes routes={ROUTES} />
          
        </div>
  );
}

export default App;
