import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, InputGroupText } from "reactstrap";
import "./Login.css";
import axios from "axios";
import { connect } from "react-redux";

import { addUser } from "../../actions/userActions";

const Login = (props) => {
  const { users, addUser } = props;
  console.log("users in login", users);
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
    addUser(state);
    push("/plants");
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
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
          style={{
            color: "black",
            backgroundColor: "lightgray",
            marginTop: "20px",
          }}
          type="submit"
        >
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
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.userState.users,
  };
};
export default connect(mapStateToProps, { addUser })(Login);
