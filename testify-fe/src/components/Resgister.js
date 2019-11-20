import React, { useState } from "react";

export default function Register() {
  const [user, setUser] = useState();

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // api()
    //   .post('/register', user)
    //   .then(res => {
    //     console.log("login data", res)
    //     localStorage.setItem('token', res.data.token)
    //     // props.history.push('/test')
    //   })
    //   .catch(err => {
    //     console.log(err)
    //     // setError('Unable to create user.')
    //   })
  };

  return (
    <div>
      <section className="register_section">
        <h2>Register</h2>
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
          <label>
            Select your Role:
            <select value="role" onChange={handleChange}>
              <option value="instructor">instructor</option>
              <option value="student">student</option>
            </select>
          </label>

          <button type="submit">Sign Up</button>
        </form>
      </section>
    </div>
  );
}
