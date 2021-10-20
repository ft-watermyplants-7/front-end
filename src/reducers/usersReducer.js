import { ADD_USER, SET_ACTIVE_USER } from "./../actions/userActions";

const initialState = {
  users: [],
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case SET_ACTIVE_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
