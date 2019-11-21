import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import api from "../../utils/api";
import TestCard from "./TestCard";

const Main = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
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

const Logout = styled.button`
  background: #c2b9b0;
  border: 2px solid #7e685a;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  padding: 20%;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin-left: 2%;
`;

export default function TestList() {
  const [test, setTest] = useState([]);

  useEffect(() => {
    api()
      .get("/users/test/1")
      .then(response => {
        console.log(response.data.questions);
        // setTest([...test, response.data]);
        setTest(response.data.questions);
      })
      .catch(error => {
        console.error(error.message);
      });
  }, []);

  return (
    <Main>
      <Header>
        <Link to="/TestPage">
          <Button type="submit">Create New Test</Button>
        </Link>
        <Link to="/TestList">
          <Button>Current Test List</Button>
        </Link>
        <Link to="/">
          <Logout>Logout</Logout>
        </Link>
      </Header>
      <h2>Current Tests</h2>
      <List>
        {test.map(data => (
          <TestCard data={data} />
        ))}
      </List>
    </Main>
  );
}
