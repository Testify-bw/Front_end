import React from "react";
import styled from "styled-components";

const Test = styled.div`
  margin: 0 auto;
  width: 50%;
  text-align: center;
  margin-top: 20px;
  background: #c2b9b0;
  padding-bottom: 20px;
  border-radius: 20px;
  border: 2px solid #7e685a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default function TestCard(props) {
  return (
    <Test>
      <h2>Title: {props.data.answer}</h2>
      <h3>Answer:</h3>
      {/* <p>A: {props.data.answerA}</p>
      <p>B: {props.data.answerB}</p>
      <p>C: {props.data.answerA}</p> */}
      {/* <h3>Correct answer: {props.data.correct}</h3> */}
    </Test>
  );
}
