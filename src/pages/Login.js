import React, { useState } from "react";
import "../style/Login.css";
import { useHistory } from "react-router-dom";
import { auth } from "../utils/firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <h1>Login user</h1>
      <div className="login__container">
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={login} className="login__loginButton">
            Login
          </button>
          <p>By Signing-in you agree to our fake conditions. Happy Hacking!.</p>
          <button
            type="submit"
            onClick={signup}
            className="login__signinButton"
          >
            Create new account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
