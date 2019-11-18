import React, { useState } from "react";

export default function Login() {
  const [state, setState] = useState();

  const handleChange = e => {
    setState(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
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
        type="text"
        name="password"
        //   value={data}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
