import React, { useState } from "react";
import api from "../utils/api";

//username: "t_wolsey",
//password: "password"

export default function Login(props) {
  const [error, setError] = useState();
  const [state, setState] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    api()
      .post("/login", state)
      .then(res => {
        console.log("login data", res);
        localStorage.setItem("token", res.data.token);
        props.history.push('/testlist')
      })
      .catch(err => {
        console.log(err);
        setError("Unable to authenticate user.");
      });
  };

  return (
    <div>
      <section>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            //   value={data}
            onChange={handleChange}
            placeholder="Username"
          />

          <input
            type="password"
            name="password"
            //   value={data}
            onChange={handleChange}
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      </section>
    </div>
  );
}
