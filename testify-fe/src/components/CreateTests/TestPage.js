import React from "react";
import McForm from "./mcForm";
import {Link} from  "react-router-dom";
import styled from "styled-components";

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



export default function TestPage() {
  return (
    <Main >
      <Header>
        <Link to="/TestList">
      <Button>Current Test List</Button>
      </Link>
      <Link to="/">
          <Logout>Logout</Logout>
        </Link>

      </Header>
      <McForm />
    </Main>
  );
}

//create button from TestList will take you to this page/compoenet

//where a form of input for test title will be created

//i want to load questions from forms here undert the created test name

//this is where the test questions will load (does this need to be in a seperate component??)

//and the question forms will also be imported on this page so see all the actions here

//the finish button will post the test  and questions to the BE??
