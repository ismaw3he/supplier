import React from 'react';
import './App.css';
import LogIn from "./components/logIn/LogIn"
import SignUp from "./components/signUp/SignUp"
import Main from "./components/main/Main"

import { Provider } from "react-redux";
import store from "./redux/store"

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <LogIn />
        {/* <SignUp /> */}
        {/* <Main/> */}
      </div>
    </Provider>
  );
}

export default App;
