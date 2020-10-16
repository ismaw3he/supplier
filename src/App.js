import React from 'react';
import './App.css';


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
