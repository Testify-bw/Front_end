//a form for creating a true or false question will be created here
//then the data can be push to ?? BE or to TestPage to then be posted to BE??

//dependicies
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
// import * as actionType from '../actions';
import api from '../../utils/api';

const initialState = {
    questions: [{
        short_answer: true,
        question_text: '',
        answer: '',
        question_choices: [{
            choice: 'Correct Answer'
        },
        {
            choice: 'Incorrect Answer 1'
        },
        {
            choice: 'Incorrect Answer 2'
        }]
    }]
}


function FibForm() {
    const [formInput, setFormInput] = useState(initialState)
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions)

    const addQuestion = questions => {
        dispatch({ type: `CREATE_QUESTION_LOADING` })
        api()
            .post('/???', questions)
            .then(res => {
                console.log()
                dispatch({ type: `CREATE_QUESTION_SUCCESS`, payload: res.data })
            })
            .catch(err => dispatch({ type: `CREATE_QUESTION_FAILURE`, payload: err }))
    }

    return (
        <>
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
        </>

    )
}

export default FibForm;
//handle changes

//Creat question .post

//form