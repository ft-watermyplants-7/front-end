import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "./Login.css";
import { setActiveUser } from "./../../actions/userActions";
import { useDispatch } from "react-redux";
import axios from "axios";
import { API_AUTH } from "../../api/api";

const Login = (props) => {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    id: Date.now(),
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.username === "" || state.password === "") {
      setError("Username and Password are required feilds");
    } else {
      axios
        .post(`${API_AUTH}/login`, state)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          dispatch(setActiveUser(state));
          push("/plants");
        })
        .catch((err) => {
          console.log(err);
        });
      // dispatch(login(state));
      // localStorage.setItem
      // push("/plants");
    }
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-header">
          <h2>Login</h2>
          <Link to="/signup">
            <h6 className="login-signup">/Sign Up</h6>
          </Link>
        </div>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={state.username}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={state.password}
            />
          </FormGroup>
          <Button style={{ width: "100%" }} type="submit" color="primary">
            Submit
          </Button>
        </Form>
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
