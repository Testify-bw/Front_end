import React from "react";

export default function McForm() {
  return (
    <div className="mcform">
      <form className="mcinputs">
        <label className="mclabel">
          Multiple Choice Question:
          <textarea
            className="mcthings"
            type="text"
            placeholder="Input your question here"
          />
          <label className="mclabel">
            Answers
            <input
              className="mcthings"
              type="text"
              name="answerA"
              placeholder="input answer for A"
            />
            <input
              className="mcthings"
              type="text"
              name="answerB"
              placeholder="input answer for B"
            />
            <input
              className="mcthings"
              type="text"
              name="answerC"
              placeholder="input answer for C"
            />
            <input
              className="mcthings"
              type="text"
              name="answerD"
              placeholder="input answer for D"
            />
          </label>
        </label>
        <button className="mcthings" type="submit">
          Submit Question
        </button>
      </form>
    </div>
  );
}

//a form for creating a true or false question will be created here

//then the data can be push to ?? BE or to TestPage to then be posted to BE??

//true and false goes here as well

//dependicies

//initial state

//handle changes

//Creat question .post

//form
