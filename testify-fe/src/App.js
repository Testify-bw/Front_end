import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/LoginPage";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
// import Register from "./components/Register";
import TestList from "./components/CreateTests/TestList";
import TestPage from "./components/CreateTests/TestPage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/testlist" component={TestList} />
      {/* <TestList /> */}
      <Route exact path="/TestPage" component={TestPage} />
    </div>
  );
}

export default App;
