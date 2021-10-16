import { ADD_USER } from "./../actions/userActions";

const initialState = {
  users: [
    {
      id: 1,
      username: "Kristian",
      password: "boo123",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};
export default reducer;
