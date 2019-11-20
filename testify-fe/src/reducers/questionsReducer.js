import * as actionType from '../actions';

const initialQuestion = {
    isLoading: false,
    error: "",
    questions: [{
        id: 33,
        short_answer: false,
        question_text: 'example question',
        answer: 'Correct Answer',
        question_choices: [{
            id: 1,
            choice: 'Correct Answer'
        },
        {
            id: 2,
            choice: 'Incorrect Answer 1'
        },
        {
            id: 3,
            choice: 'Incorrect Answer 2'
        }]
    }],
    deleting: {
        isDeleting: false,
        deleteErr: null,
        questions: {}
    },
    editing: {
        isEditing: false,
        editErr: null,
        questions: {}
    },
    creating: {
        isCreating: false,
        createErr: null,
        questions: {}
    }

};


export const questionsReducer = (state = initialQuestion, action = {}) => {
    switch (action.type) {
        case actionType.FETCH_QUESTION_LOADING:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case actionType.FETCH_QUESTION_SUCCESS:
            return {
                ...state,
                questions: action.payload,
                isLoading: false,
                error: "",
            };
        case actionType.FETCH_QUESTION_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        case actionType.CREATE_QUESTION_LOADING:
            return {
                ...state,
                creating: {
                    ...state.creating,
                    isCreating: true,
                }
            }
        case actionType.CREATE_QUESTION_SUCCESS:
            return {
                ...state,
                creating: {
                    ...state.creating,
                    isCreating: false,
                },
                questions: action.payload.newQuestion
            }
        case actionType.CREATE_QUESTION_FAILURE:
            return {
                ...state,
                creating: {
                    ...state.creating,
                    isCreating: false,
                }
            }

        case actionType.EDIT_QUESTION_LOADING:
            return {
                ...state,
                editing: {
                    ...state.editing,
                    isEditing: true,
                }
            }
        case actionType.EDIT_QUESTION_SUCCESS:
            return {
                ...state,
                editing: {
                    ...state.editing,
                    isEditing: false,
                },
                questions: action.payload.newQuestion
            }
        case actionType.EDIT_QUESTION_FAILURE:
            return {
                ...state,
                editing: {
                    ...state.editing,
                    isEditing: false,
                }
            }
        case actionType.DELETE_QUESTION_LOADING:
            return {
                ...state,
                deleting: {
                    ...state.deleting,
                    isDeleting: true,
                }
            }
        case actionType.DELETE_QUESTION_SUCCESS:
            return {
                ...state,
                questions: action.payload.newQuestion,
                deleting: {
                    ...state.deleting,
                    isDeleting: false,
                }
            }
        case actionType.DELETE_QUESTION_FAILURE:
            return {
                ...state,
                questions: action.payload
            }

        default:
            return state;
    }
}



export default questionsReducer;