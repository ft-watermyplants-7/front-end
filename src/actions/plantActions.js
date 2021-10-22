import axios from "axios";
import { BASE_URL } from "../api/api";

export const ADD_PLANT = "ADD_PLANT";
export const GET_PLANTS = "GET_PLANTS";
export const DELETE_PLANT = "DELETE_PLANT";
export const EDIT_PLANT = "EDIT_PLANT";

export const fetchPlants = () => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        console.log("RESPONSE FROM FETCH PLANTS: ", res);
        dispatch(getPlants(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const postNewPlant = (plant) => {
  return (dispatch) => {
    axios
      .post(`eventual endpoint for post url`, plant)
      .then((res) => {
        console.log(res);
        dispatch(addPlant(plant));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addPlant = (plant) => ({ type: ADD_PLANT, payload: plant });
export const getPlants = (plants) => ({
  type: GET_PLANTS,
  payload: plants,
});
export const deletePlant = (id) => ({ type: DELETE_PLANT, payload: id });
export const editPlant = (plant) => ({ type: EDIT_PLANT, payload: plant });
