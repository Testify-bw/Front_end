import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
// import * as actionType from '../actions';
import api from '../../utils/api';

const initialState = {
    questions: [{
        short_answer: false,
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


function McForm() {
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
        </>

    )
}

export default McForm;