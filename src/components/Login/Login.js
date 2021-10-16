import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, InputGroupText } from "reactstrap";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const { push } = useHistory();
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    //thunk action to fetch all plants
  }, []);

  //this isn't working atm, need working endpoint that returns a jwt token
  const handleSubmit = (e) => {
    e.preventDefault();
    // axios
    //   .post(`eventual backend endpoint goes here`, state)
    //   .then((res) => {
    //     // console.log(res);
    //     localStorage.setItem("token", res.data.token);
    //     push("/view");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setError(err.message);
    //   });
    push("/plants");
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
          {error && (
            <InputGroupText
              style={{
                marginTop: "20px",
                backgroundColor: "white",
                color: "red",
              }}
            >
              {error}
            </InputGroupText>
          )}
        </Form>
      </div>
    </div>
  );
};

export default Login;
