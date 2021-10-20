import React, { useState, useEffect } from "react";
import "./EditUserForm.css";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const EditUserForm = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userState);
  console.log("ACTIVE USER IN EDIT USER FORM: ", user);
  const { push } = useHistory();
  const { id } = useParams();

  const [editedUser, setEditedUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    // dispatch(getSingleUser(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (user) {
      setEditedUser({ ...user });
    }
  }, [user]);

  const handleChange = (e) => {
    setEditedUser({
      ...editedUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedUser.username === "" || editedUser.password === "") {
      setError("Username and Password are required fields");
    } else {
      //   dispatch(updateUser(editedUser, id));
      //   dispatch(setActiveUser(editedUser));
      push("/plants");
    }
  };
  return (
    <div className="edit-wrapper">
      <div className="edit-user-container">
        <h2>Edit User Info</h2>
        <form className="edit-user-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={editedUser.username || ""}
            name="username"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            value={editedUser.password || ""}
            name="password"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={editedUser.phone || ""}
            name="phone"
            onChange={handleChange}
          />
          <button
            style={{ marginTop: "20px" }}
            className="btn btn-primary"
            type="submit"
          >
            Update
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

export default EditUserForm;
