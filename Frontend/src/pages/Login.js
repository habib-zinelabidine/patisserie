import React, { useEffect, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Login.css'
import { Link } from "react-router-dom";

import useAxios from '../hooks/useAxios';

import { UserContext } from "../context/UserContext";


const Login = () => {
  const usercontext = useContext(UserContext)
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {fetchData, loading, error} = useAxios();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const response = await fetchData({url: "/login", data: {email, password}});
    console.log(response);

    if(response) {
      const {data} = response;
    usercontext.login({token: data.token, user: {id: data.id, email: data.email}})    };
    
  }
  
  useEffect(() => {
    if(usercontext.loggedin) navigate('/home');
  }, [usercontext.loggedin]);

  
  return (

    <div className="bg">
      <div className="container">
        <div className="first"> </div>
        <form className="second" onSubmit={handleSubmit}>
          <h1>Login</h1>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="UserEmail"
              required
            ></input>
            { error?.response?.data &&  <small style={{color: "red"}}>{error.response.data}</small>}
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            ></input>
            <Link to="/register">Create account</Link>
            <button type="submit">{loading ? 'Loading ...': 'Login'}</button>
          </form>
      </div>
    </div>
  );
};

export default Login;
