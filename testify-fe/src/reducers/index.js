import { combineReducers } from 'redux';
import testPageReducer from './testPageReducer';
import questionsReducer from './questionsReducer';


export const rootReducer = combineReducers({
    questions: questionsReducer,
    tests: testPageReducer,
})