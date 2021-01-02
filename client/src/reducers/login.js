import initialState from "./initialState";
import { USER_LOGIN } from "../actions/types";

const loginReducer = (state = initialState.userData,action ) => {

    switch(action.type){

        case types.USER_LOGIN:
            return {

            };
          default:
            return {
              ...state,
            };
    }
}

export default loginReducer;