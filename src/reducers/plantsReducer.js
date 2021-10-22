import {
  ADD_PLANT,
  GET_PLANTS,
  DELETE_PLANT,
  EDIT_PLANT,
} from "../actions/plantActions";

const initialState = {
  plants: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLANT:
      return {
        ...state,
        plants: [...state.plants, action.payload],
      };
    case GET_PLANTS:
      return {
        ...state,
        plants: action.payload,
      };
    case DELETE_PLANT:
      return {
        ...state,
        plants: state.plants.filter(
          (plant) => plant.plant_id !== action.payload
        ),
      };
    case EDIT_PLANT:
      return {
        ...state,
        plants: state.plants.map((plant) =>
          plant.plant_id === action.payload.plant_id ? action.payload : plant
        ),
      };
    default:
      return state;
  }
};
export default reducer;
