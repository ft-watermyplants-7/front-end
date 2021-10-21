import axios from "axios";
import { API_AUTH } from "../api/api";

export const ADD_USER = "ADD_USER";
export const SET_ACTIVE_USER = "SET_ACTIVE_USER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (user) => {
  return (dispatch) => {
    axios
      .post(`${API_AUTH}/login`, user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch(setActiveUser(user));
        window.location.href = "/plants";
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// export const logout = () => {
//   return (dispatch) => {
//     axiosWithAuth()
//       .post(`${API_AUTH}/logout`)
//       .then((res) => {
//         localStorage.removeItem("token");
//         dispatch(setActiveUser({}));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };
export const logout = () => ({ type: LOGOUT });
export const addUser = (user) => ({ type: ADD_USER, payload: user });
export const setActiveUser = (user) => ({
  type: SET_ACTIVE_USER,
  payload: user,
});
