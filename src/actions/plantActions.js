import axios from "axios";

export const ADD_PLANT = "ADD_PLANT";
export const FETCH_PLANTS = "FETCH_PLANTS";
export const DELETE_PLANT = "DELETE_PLANT";
export const EDIT_PLANT = "EDIT_PLANT";

//thunk action for posting a new plant
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
export const fetchPlants = (plants) => ({
  type: FETCH_PLANTS,
  payload: plants,
});
export const deletePlant = (id) => ({ tyle: DELETE_PLANT, payload: id });
export const editPlant = (plant) => ({ tyle: EDIT_PLANT, payload: plant });
