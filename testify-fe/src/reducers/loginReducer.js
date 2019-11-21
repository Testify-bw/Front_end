import { LOGIN_SUCCESS } from '../actions/index';

const intitialState = {
    isAuthenticating: false,
    currentUser: [],
    username: "",
    password: ""
}

const loginReducer = (state = intitialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isAuthenticating: false,
                currentUser: action.payload
            }
    }
}

export default loginReducer;