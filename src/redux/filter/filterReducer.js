import { STATUSCHANGED } from "./actionType";
import inialState from "./initialState";

const filterReducer = (state = inialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
export default filterReducer;
