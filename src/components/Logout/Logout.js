import React, { useEffect } from "react";
import axiosWithAuth from "./../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const { push } = useHistory();
  useEffect(() => {
    axiosWithAuth()
      .post(`eventual logout endpoint goes here`)
      .then((res) => {
        localStorage.removeItem("token");
        push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
    push("/login");
  }, [push]);
  return <div></div>;
};

export default Logout;
