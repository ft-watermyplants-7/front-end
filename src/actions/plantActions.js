export const PLANT_ADDED = "PLANT_ADDED";
export const PLANT_DELETED = "PLANT_DELETED";
export const PLANT_UPDATED = "PLANT_UPDATED";
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const plantAdded = () => ({ type: PLANT_ADDED });
export const plantDeleted = () => ({ type: PLANT_DELETED });
export const plantUpdated = () => ({ type: PLANT_UPDATED });

export const fetchStart = () => ({ type: FETCH_START });

export const fetchSuccess = (plants) => ({
  type: FETCH_SUCCESS,
  payload: plants,
});

export const fetchFail = (error) => ({ type: FETCH_FAIL, payload: error });
