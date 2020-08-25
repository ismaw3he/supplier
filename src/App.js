import React from 'react';
import './App.css';
import SingIn from "./components/signIn/SignIn"
import SignUp from "./components/signUp/SignUp"
import Main from "./components/main/Main"

import { Provider } from "react-redux";
import store from "./redux/store"

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <SingIn />
        {/* <SignUp /> */}
        {/* <Main/> */}
      </div>
    </Provider>
  );
}

export default App;
