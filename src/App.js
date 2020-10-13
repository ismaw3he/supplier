import React, {useEffect} from 'react';
import './App.css';

import localGetter from "./generals/localGetter";

import {RenderRoutes} from "./routing/RenderRoutes";
import ROUTES from "./routing/routes";

function App() {
  useEffect(()=>{
    localGetter();
  }, [])
  return (
        <div className="App">
          <RenderRoutes routes={ROUTES} />
        </div>
  );
}

export default App;
