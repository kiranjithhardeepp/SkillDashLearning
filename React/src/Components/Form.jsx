import React, { useEffect, useReducer, useState } from "react";

const initialState = {
  formData: {
    userName: "",
    password: "",
  },
  formError: {},
  isSubmit: false,
};


const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_INPUT":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };
    case "SET_ERRORS":
      return {
        ...state,
        formError: action.payload,
      };
    case "SET_SUBMIT_STATUS":
      return {
        ...state,
        isSubmit: action.payload,
      };
    default:
      return state;
  }
};

const Form = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "HANDLE_INPUT", payload: { name, value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(state.formData);
    dispatch({ type: "SET_ERRORS", payload: errors });
    dispatch({ type: "SET_SUBMIT_STATUS", payload: true });
  };

  // Validate form data
  const validate = (formValues) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formValues.password) {
      errors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      errors.password = "Password must be greater than 6 characters";
    }

    if (!formValues.userName) {
      errors.userName = "Username is required";
    }

    return errors;
  };

  useEffect(() => {
    if (state.isSubmit && Object.keys(state.formError).length === 0) {
      console.log("Form Data Submitted: ", state.formData);
    }
  }, [state.formError, state.isSubmit]);

  return (
    <div
      style={{ width: "auto", height: 500 }}
      className="bg-white d-flex justify-content-center align-items-center p-3 border rounded"
    >
      {Object.keys(state.formError).length === 0 && state.isSubmit ? (
        <div>
          <p>Signed up successfully!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="userName"
            placeholder="Enter username"
            value={state.formData.userName}
            onChange={handleChange}
          />
          <p className="text-danger">{state.formError.userName}</p>

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={state.formData.password}
            onChange={handleChange}
          />
          <p className="text-danger">{state.formError.password}</p>

          <br />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
