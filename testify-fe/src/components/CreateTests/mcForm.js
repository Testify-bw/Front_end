import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import * as actionType from "../actions";

const initialState = {
  questions: [
    {
      short_answer: false,
      question_text: "",
      answer: "",
      question_choices: [
        {
          choice: "Correct Answer"
        },
        {
          choice: "Incorrect Answer 1"
        },
        {
          choice: "Incorrect Answer 2"
        }
      ]
    }
  ]
};

export default function McForm() {
  const [formInput, setFormInput] = useState(initialState);
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questions);

  return (
    <div>
      <form>
        <label>
          Question: Fi
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
          </label>
        </label>
      </form>
    </div>
  );
}
