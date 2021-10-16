import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, InputGroupText } from "reactstrap";
import "./Login.css";
import axios from "axios";
import { addUser } from "./../../actions/userActions";
import { connect } from "react-redux";

const Login = (props) => {
  const { addUser } = props;
  const { push } = useHistory();
  const [state, setState] = useState({
    id: Date.now(),
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  //this isn't working atm, need working endpoint that returns a jwt token
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.username === "" || state.password === "") {
      setError("Username and Password are required feilds");
    } else {
      addUser(state);
      push("/plants");
    }
    // axios
    //   .post(`api/login`, state)
    //   .then((res) => {
    //     // console.log(res);
    //     localStorage.setItem("token", res.data.token);
    //     push("/view");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setError(err.message);
    //   });
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

export default connect(null, { addUser })(Login);
