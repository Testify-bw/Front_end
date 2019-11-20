import React from "react";
import { Link } from "react-router-dom";

export default function TestPage() {
  return (
    <div>
      <form>
        <label>
          Question:
          <textarea type="text" placeholder="Input your question here" />
          <label>
            Answers
            <input
              type="text"
              name="answerA"
              placeholder="input answer for A"
            />
            Answers
            <input
              type="text"
              name="answerB"
              placeholder="input answer for B"
            />
            Answers
            <input
              type="text"
              name="answerC"
              placeholder="input answer for C"
            />
            Answers
            <input
              type="text"
              name="answerD"
              placeholder="input answer for D"
            />
          </label>
        </label>
      </form>
    </div>
  );
}

//create button from TestList will take you to this page/compoenet

//where a form of input for test title will be created

//i want to load questions from forms here undert the created test name

//this is where the test questions will load (does this need to be in a seperate component??)

//and the question forms will also be imported on this page so see all the actions here

//the finish button will post the test  and questions to the BE??
