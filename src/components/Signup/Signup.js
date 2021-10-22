import React, { useState, useEffect } from "react";
import "./Signup.css";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { API_AUTH } from "../../api/api";

const Signup = (props) => {
  const { push } = useHistory();
  const [newUser, setNewUser] = useState({
    id: Date.now(),
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {}, []);

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser.username === "" || newUser.password === "") {
      setError("Username, Password and Phone Number are required fields");
    } else {
      axios
        .post(`${API_AUTH}/register`, newUser)
        .then((res) => {
          console.log(res);
          push("/plants");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="signup-wrapper">
      <div className="signup-plant-container">
        <div className="signup-header">
          <h2>Sign Up</h2>
          <Link to="/">
            <h6 className="signup-login">/Login</h6>
          </Link>
        </div>
        <form className="signup-plant-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={newUser.username}
            name="username"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={newUser.password}
            name="password"
            onChange={handleChange}
          />
          <button
            style={{ marginTop: "20px" }}
            className="btn btn-primary"
            type="submit"
          >
            Sign Up!
          </button>
        </form>
        {error ? (
          <p
            style={{
              color: "red",
              fontSize: "16px",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            {error}
          </p>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Signup;
