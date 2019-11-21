//dependencies
import api from '../utils/api';
import axios from 'axios';

// note to self i may need to add a completed task

//LOGIN???? 

// FETCH_TEST .GET

export const FETCH_TEST_LOADING = 'FETCH_TEST_LOADING';
export const FETCH_TEST_SUCCESS = 'FETCH_TEST_SUCCESS';
export const FETCH_TEST_FAILURE = 'FETCH_TEST_FAILURE';

// export const getPost = () => {
//     console.log(getPost)
//     return dispatch => {
//         dispatch({ type: FETCH_TEST_LOADING });
//         api()
//             .get('/users/test/:id')
//             .then(res => {
//                 console.log('Get Response', res)
//                 dispatch({ type: FETCH_TEST_SUCCESS, payload: res.data });
//             })
//             .catch(err => dispatch({ type: FETCH_TEST_FAILURE, payload: err }));
//     };
// };

export const getPost = () => {
    console.log(getPost)
    return dispatch => {
        dispatch({ type: FETCH_TEST_LOADING });
        axios
            .get('https://opentdb.com/api_config.php')
            .then(res => {
                console.log('Get Response', res)
                dispatch({ type: FETCH_TEST_SUCCESS, payload: res.data });
            })
            .catch(err => dispatch({ type: FETCH_TEST_FAILURE, payload: err }));
    };
};

// CREATE_TEST .POST

export const CREATE_TEST_LOADING = 'CREATE_TEST_LOADING';
export const CREATE_TEST_SUCCESS = 'CREATE_TEST_SUCCESS';
export const CREATE_TEST_FAILURE = 'CREATE_TEST_FAILURE';

export const addPost = (post) => {
    console.log('actions', post)
    return dispatch => {
        dispatch({ type: CREATE_TEST_LOADING });
        api()
            .post(
                '/users/test/add',
                post
            )
            .then(res => {
                dispatch({ type: CREATE_TEST_SUCCESS, payload: res.data });
            })
            .catch(err => dispatch({ type: CREATE_TEST_FAILURE, payload: err.res }));
    };
};

// EDIT_TEST .PUT

export const EDIT_TEST_LOADING = 'EDIT_TEST_LOADING';
export const EDIT_TEST_SUCCESS = 'EDIT_TEST_SUCCESS';
export const EDIT_TEST_FAILURE = 'EDIT_TEST_FAILURE';

// DELETE_TEST .DELETE

export const DELETE_TEST_LOADING = 'DELETE_TEST_LOADING';
export const DELETE_TEST_SUCCESS = 'DELETE_TEST_SUCCESS';
export const DELETE_TEST_FAILURE = 'DELETE_TEST_FAILURE';


// FETCH_QUESTION .GET

export const FETCH_QUESTION_LOADING = 'FETCH_QUESTION_LOADING';
export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const FETCH_QUESTION_FAILURE = 'FETCH_QUESTION_FAILURE';

// CREATE_QUESTION .POST

export const CREATE_QUESTION_LOADING = 'CREATE_QUESTION_LOADING';
export const CREATE_QUESTION_SUCCESS = 'CREATE_QUESTION_SUCCESS';
export const CREATE_QUESTION_FAILURE = 'CREATE_QUESTION_FAILURE';

// EDIT_QUESTION .PUT

export const EDIT_QUESTION_LOADING = 'EDIT_QUESTION_LOADING';
export const EDIT_QUESTION_SUCCESS = 'EDIT_QUESTION_SUCCESS';
export const EDIT_QUESTION_FAILURE = 'EDIT_QUESTION_FAILURE';

// DELETE_QUESTION  .DELETE

export const DELETE_QUESTION_LOADING = 'DELETE_QUESTION_LOADING';
export const DELETE_QUESTION_SUCCESS = 'DELETE_QUESTION_SUCCESS';
export const DELETE_QUESTION_FAILURE = 'DELETE_QUESTION_FAILURE';


export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';