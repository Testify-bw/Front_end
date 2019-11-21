import React, { useState, useEffect } from 'react';
import McForm from "./McForm";
import FibForm from "./FibForm";
import { getPost } from '../../actions/index';

import { useDispatch, useSelector } from 'react-redux';


export default function TestPage() {


  return (
    <div className="testpage">
      <h2>Hello World</h2>
    </div>
  );
}

