import React, { useState } from "react";
import api from "../utils/api";
import styled from "styled-components";

const Button = styled.button`
  background: #c2b9b0;
  border: 2px solid #7e685a;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  padding: 0.5%;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin-left: 2%;
  &.active {
    vertical-align: top;
    padding: 8px 13px 6px;
  }
`;

const LoginForm = styled.div`
  margin: 0 auto;
  width: 47%;
  height: 300px;
  background: #c2cad0;
  border: 3px solid #7e685a;
  box-sizing: border-box;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin-top: 20px;
`;

//username: "t_wolsey",
//password: "password"

export default function Login(props) {
  const [error, setError] = useState();
  const [state, setState] = useState({
    username: "",
    password: ""
  });

  // let validate = () => {
  //   let nameError = "";
  //   let passwordError = "";

  //   if (!state.username) {
  //     nameError = "Username is required";
  //   }
  //   if (!state.password) {
  //     passwordError = "password is required";
  //     return false;
  //   }

  //   return true;
  // };

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // e.validate();

    api()
      .post("/login", state)
      .then(res => {
        // console.log("login data", res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/testlist");
      })
      .catch(err => {
        console.log(err);
        setError("Unable to authenticate user.");
      });
  };

  return (
    <div>
      <LoginForm>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input
              type="text"
              name="username"
              value={state.username}
              onChange={handleChange}
              placeholder="Username"
            />
          </label>
          <div style={{ color: "red" }}> {state.nameError} </div>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </label>
          <div style={{ color: "red" }}> {state.passwordError} </div>
          <Button type="submit">Login</Button>
        </form>
      </LoginForm>
    </div>
  );
}
