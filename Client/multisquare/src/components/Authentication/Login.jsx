import React, { useState } from "react";
import "./Login.css";
import firebase from "firebase/compat/app";
import { auth } from "../../firebase";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [err, setErr] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErr("");
      await login(email.current.value, pass.current.value);
    } catch (error) {
      email.current.value = "";
      pass.current.value = "";
      return setErr("Incorrect Credentials");
    }
  };
  const email = useRef();
  const pass = useRef();

  return (
        <div className="main-login">
        <div className="container-login">
          <form onSubmit={handleSubmit}>
            <h2>Log In</h2>
            {err && <h6 style={{ color: "red", textAlign: "start" }}>{err}</h6>}
            <div className="email">
              <label htmlFor="email">Email</label>

              <input type="text" name="email" ref={email} />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>

              <input type="password" name="password" ref={pass} />
            </div>
            <button className="login" type="submit">
              Log In
            </button>
            <div className="ind">
              <hr />
              <h6>or</h6>
            </div>
          </form>
          <button
            className="Google"
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
            }
          >
            Continue with Google
          </button>
        </div>
        <h6>
          Need an account? <Link to="/signup">Sign Up</Link>
        </h6>
      </div>
  );
};

export default Login;
