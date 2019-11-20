import React from "react";

export default function FibForm() {
  return (
    <div className="mcform">
      <form className="mcinputs">
        <label className="mclabel">
          Fill in the blank question
          <textarea
            className="mcthings"
            type="text"
            placeholder="Input your question here "
          />
        </label>
        <label className="mclabel">
          Answer
          <input
            className="mcthings"
            type="text"
            placeholder="Input your answer here"
          />
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

//dependicies

//initial state

//handle changes

//Creat question .post

//form
