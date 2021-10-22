import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./Login.css";
import { setActiveUser } from "./../../actions/userActions";
import { useDispatch } from "react-redux";
import axios from "axios";
import { API_AUTH } from "../../api/api";

const Login = (props) => {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const [loggedUser, setLoggedUser] = useState({
    id: Date.now(),
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loggedUser.username === "" || loggedUser.password === "") {
      setError("Username and Password are required feilds");
    } else {
      axios
        .post(`${API_AUTH}/login`, loggedUser)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          dispatch(setActiveUser(loggedUser));
          push("/plants");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleChange = (e) => {
    setLoggedUser({
      ...loggedUser,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="login-wrapper">
      <div className="login-plant-container">
        <div className="login-header">
          <h2>Login</h2>
          <Link to="/signup">
            <h6 className="login-signup">/Sign Up</h6>
          </Link>
        </div>
        <form className="login-plant-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={loggedUser.username}
            name="username"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={loggedUser.password}
            name="password"
            onChange={handleChange}
          />
          <button
            style={{ marginTop: "20px" }}
            className="btn btn-primary"
            type="submit"
          >
            Login
          </button>
        </form>
        {error ? (
          <p style={{ color: "red", fontSize: "16px", marginTop: "20px" }}>
            {error}
          </p>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Login;
