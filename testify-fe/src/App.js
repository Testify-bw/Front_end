import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/LoginPage";
import "./App.css";
import PrivateRoute from './components/PrivateRoute';
// import Register from "./components/Register";
import TestList from "./components/CreateTests/TestList";
import TestPage from './components/CreateTests/TestPage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path='/testlist' component={TestList} />
      <Route exact path="/testpage" component={TestPage} />
      {/* <TestList /> */}
    </div>
  );
}

export default App;
