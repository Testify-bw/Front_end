import React, { useState, useEffect } from 'react';
import McForm from "./McForm";
import FibForm from "./FibForm";
import { getPost } from '../../actions/index';

import { useDispatch, useSelector } from 'react-redux';
import api from '../../utils/api';


export default function TestPage() {
  const [test, setTest] = useState({
    name: '',
  });


  const handleChange = e => {
    setTest({
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    api()
      .put(`/users/test/1`, test)
      .then(res => {
        console.log("put", res);

      })
      .catch(err => {
        console.log(err);
      })
  }


  return (
    <div className="testpage">
      <h2>Hello World</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          value={test.name}
          onChange={handleChange}
        />
        <button onClick={(e) => {
          api()
            .delete(`/users/test/2`)
            .then(res => {
              console.log("delete", res);
            })
            .catch(err => {
              console.log(err);
            })

        }}>DELETE!!!</button>
      </form>
    </div>
  );
}

