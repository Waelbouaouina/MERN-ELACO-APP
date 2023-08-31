import { SET_USER } from "../types";
import isEmpty from "../../util/isEmpty";

const initialState = {
    isConnected: false,
    user: {},
};

// Nommez la fonction ici (authReducer)
export function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                isConnected: !isEmpty(action.payload),
                user: action.payload,
            };
        default:
            return state;
    }
}

// Exportez la fonction nommée (authReducer) par défaut
export default authReducer;
