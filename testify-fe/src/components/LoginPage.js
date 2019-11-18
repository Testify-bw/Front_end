import React, { useState } from "react";
import api from '../utils/api';

export default function Login() {
  const [error, setError] = useState()
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    api()
      .post('/login', state)
      .then(res => {
        console.log("login data", res)
        localStorage.setItem('token', res.data.token)
        // props.history.push('/test')
      })
      .catch(err => {
        console.log(err)
        setError('Unable to authenticate user.')
      })
  };

  return (
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
  );
}