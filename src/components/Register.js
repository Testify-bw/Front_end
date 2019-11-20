import React, { useState } from "react";

export default function Register() {
  const [user, setUser] = useState();

  const handleChange = e => {
    setUser(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
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
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </label>

          <button type="submit">Sign Up</button>
        </form>
      </section>
    </div>
  );
}
