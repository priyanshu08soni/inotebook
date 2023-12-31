import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [credentials,setCredentials]=useState({email:"",password:""})

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/auth/login");
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email:credentials.email,password:credentials.password}),

    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      //Save the auth token and redirect to login.
      localStorage.setItem('auth-token',json.authToken)
      props.showAlert("Successfully Logged in.","success")
      navigate("/")

    }else{
      props.showAlert("Invalid Details","danger")
    }
  };
  const onChange = (e) => {
    
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container mt-3">
      <h2>Login to Continue to iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelp"
            value={credentials.email}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;