import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import TestPage from "./TestPage";

const Main = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 568px;
  background: #e7757d;
`;

const Header = styled.header`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  height: 65px;
  background: #c2cad0;
  mix-blend-mode: normal;
  border: 3px solid #7e685a;
  box-sizing: border-box;
  border-radius: 15px;
`;

const List = styled.div`
  margin: 0 auto;
  width: 47%;
  height: 95px;

  background: #c2cad0;
  border: 3px solid #7e685a;
  box-sizing: border-box;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin-top: 20px;
`;

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
`;

export default function TestList() {
  //   const [test, getTest] = useState;

  //   useEffect(() => {
  //     axios
  //       .get(``)
  //       .then(response => {
  //         console.log(response.data.results);
  //         getTest(response.data.results);
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });
  //   }, []);

  return (
    <Main>
      <Header>
        <Link to="/testpage">
          <Button type="submit">Create New Test</Button>
        </Link>
        <Link to="/">
          <h2>Test List</h2>
        </Link>
      </Header>
      <h2>Current Tests</h2>
      <List>Tests</List>


    </Main>
  );
}
