//a form for creating a true or false question will be created here
//then the data can be push to ?? BE or to TestPage to then be posted to BE??

//dependicies
// import { useSelector, useDispatch } from "react-redux";
// import React, { useState } from "react";
// import * as actionType from "../actions";

// const initialState = {
//   questions: [
//     {
//       short_answer: true,
//       question_text: "",
//       answer: "",
//       question_choices: [
//         {
//           choice: "Correct Answer"
//         },
//         {
//           choice: "Incorrect Answer 1"
//         },
//         {
//           choice: "Incorrect Answer 2"
//         }
//       ]
//     }
//   ]
// };

// function shortAnswer() {
//   const [formInput, setFormInput] = useState(initialState);
//   const dispatch = useDispatch();
//   const questions = useSelector(state => state.questions);

//   const addQuestion = questions => {
//     dispatch({ type: `CREATE_QUESTION_LOADING` });
//     api()
//       .post("/???", questions)
//       .then(res => {
//         console.log();
//         dispatch({ type: `CREATE_QUESTION_SUCCESS`, payload: res.data });
//       })
//       .catch(err =>
//         dispatch({ type: `CREATE_QUESTION_FAILURE`, payload: err })
//       );
//   };

//   return <></>;
// }
//handle changes

//Creat question .post

//form
