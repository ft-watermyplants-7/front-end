import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../../actions/userActions";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  useEffect(() => {
    localStorage.removeItem("token");
    dispatch(logout());
    push("/");
  }, [dispatch, push]);
  return <div></div>;
};

export default Logout;
