import * as actionType from '../actions';

const initialTest = {
    response_code: 0,
    test: [],
    error: null,
    isLoading: false
}
// deleting: {
//     isDeleting: false,
//     deleteErr: null,
//     test: {}
// },
// editing: {
//     isEditing: false,
//     editErr: null,
//     test: {}
// },
// creating: {
//     isCreating: false,
//     createErr: null,
//     test: {}
// }
// };


export const testReducer = (state = initialTest, action = {}) => {
    switch (action.type) {
        case actionType.FETCH_TEST_LOADING:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case actionType.FETCH_TEST_SUCCESS:
            return {
                ...state,
                test: action.payload,
                isLoading: false,
                error: "",
            };
        case actionType.FETCH_TEST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        case actionType.CREATE_TEST_LOADING:
            return {
                ...state,
                creating: {
                    ...state.creating,
                    isCreating: true,
                }
            }
        case actionType.CREATE_TEST_SUCCESS:
            return {
                ...state,
                creating: {
                    ...state.creating,
                    isCreating: false,
                },
                test: action.payload.newQuestion
            }
        case actionType.CREATE_TEST_FAILURE:
            return {
                ...state,
                creating: {
                    ...state.creating,
                    isCreating: false,
                }
            }

        case actionType.EDIT_TEST_LOADING:
            return {
                ...state,
                editing: {
                    ...state.editing,
                    isEditing: true,
                }
            }
        case actionType.EDIT_TEST_FAILURE:
            return {
                ...state,
                editing: {
                    ...state.editing,
                    isEditing: false,
                },
                test: action.payload.newQuestion
            }
        case actionType.EDIT_QUESTION_FAILURE:
            return {
                ...state,
                editing: {
                    ...state.editing,
                    isEditing: false,
                }
            }
        case actionType.DELETE_TEST_LOADING:
            return {
                ...state,
                deleting: {
                    ...state.deleting,
                    isDeleting: true,
                }
            }
        case actionType.DELETE_TEST_SUCCESS:
            return {
                ...state,
                test: action.payload.newQuestion,
                deleting: {
                    ...state.deleting,
                    isDeleting: false,
                }
            }
        case actionType.DELETE_TEST_FAILURE:
            return {
                ...state,
                test: action.payload
            }

        default:
            return state;
    }
}



export default testReducer;