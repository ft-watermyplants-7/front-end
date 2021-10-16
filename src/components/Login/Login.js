import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "./Login.css";

const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
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
        <Button
          style={{ textAlign: "center", marginTop: "20px" }}
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
