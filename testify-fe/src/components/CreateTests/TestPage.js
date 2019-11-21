import React from "react";
import McForm from "./McForm";
import FibForm from "./FibForm";
import { getPost } from '../../actions/index';
import { useDispatch, useSelector } from 'react-redux';

//
export default function TestPage() {


  return (
    <div className="testpage">
      <FibForm />
      <McForm />
    </div>
  );
}

