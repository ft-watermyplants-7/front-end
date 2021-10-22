import {
  ADD_PLANT,
  GET_PLANTS,
  DELETE_PLANT,
  EDIT_PLANT,
} from "../actions/plantActions";

const initialState = {
  plants: [
    {
      id: 1,
      nickname: "Test Nickname",
      species: "Test Species",
      h20Frequency: "daily",
      image: "https://i.gyazo.com/314a68a8a8020f16036a32afd2c45198.png",
    },
    {
      id: 2,
      nickname: "Plant 2",
      species: "Test Species2",
      h20Frequency: "twice daily",
      image: "https://i.gyazo.com/0c69bbb8ac59ca7be017b5d2f0e0c9a2.png",
    },
    {
      id: 3,
      nickname: "Plant 3 ",
      species: "Test Species3",
      h20Frequency: "twice a week",
      image: "https://i.gyazo.com/53cc855acc00b97259a167da1119d937.png",
    },
    {
      id: 4,
      nickname: "Plant 4",
      species: "Test Species4",
      h20Frequency: "once a week",
      image: "https://i.gyazo.com/1990684fbc95a91bc1b2e6ce6480055f.png",
    },
    {
      id: 5,
      nickname: "Test Nickname 5",
      species: "Test Species 5",
      h20Frequency: "daily",
      image: "https://i.gyazo.com/b0c37313ce6f34898918107b51863864.png",
    },
    {
      id: 6,
      nickname: "Test Nickname",
      species: "Test Species",
      h20Frequency: "daily",
      image: "https://i.gyazo.com/26273d25adc5b7bff47102d1e43afb34.png",
    },
  ],
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
        plants: [...state.plants, action.payload],
      };
    case DELETE_PLANT:
      return {
        ...state,
        plants: state.plants.filter((plant) => plant.id !== action.payload),
      };
    case EDIT_PLANT:
      return {
        ...state,
        plants: state.plants.map((plant) =>
          plant.id === action.payload.id ? action.payload : plant
        ),
      };
    default:
      return state;
  }
};
export default reducer;
