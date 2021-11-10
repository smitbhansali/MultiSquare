import React, { useState } from "react";
import "./Signup.css";
import firebase from "firebase/compat/app";
import { auth } from "../../firebase";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const SignUp = () => {
  const { signup } = useAuth();
  const [err, setErr] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pass.current.value !== passConfirm.current.value) {
      email.current.value = "";
      pass.current.value = "";
      passConfirm.current.value = "";
      return setErr("Passwords do not match");
    }
    if (pass.current.value.length <= 6) {
      email.current.value = "";
      pass.current.value = "";
      passConfirm.current.value = "";
      return setErr("Password should be atleast 6 charachters");
    }
    try {
      setErr("");
      console.log("email :", email.current.value);
      console.log("pass :", pass.current.value);
      await signup(email.current.value, pass.current.value);
    } catch (error) {
      console.log(error);
    }
  };
  const email = useRef();
  const pass = useRef();
  const passConfirm = useRef();
  return (
    <>
      <div className="main-signup">
        <div className="container-signup">
          <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            {err && <h6 style={{ color: "red", textAlign: "start" }}>{err}</h6>}
            <div className="email">
              <label htmlFor="email">Email</label>

              <input type="text" name="email" ref={email} />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>

              <input type="password" name="password" ref={pass} />
            </div>
            <div className="password">
              <label htmlFor="password-confirm">Confirm Password </label>

              <input
                type="password"
                name="password-confirm"
                ref={passConfirm}
              />
            </div>
            <button className="signup" type="submit">
              Sign Up
            </button>
            <div className="ind">
              <hr />
              <h6>or</h6>
            </div>
          </form>
          <button
            className="Google"
            onClick={() => {
              auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
              setErr("");
            }}
          >
            Continue with Google
          </button>
        </div>
        <h6>
          Already have an account? <Link to="/login">Login</Link>
        </h6>
      </div>
    </>
  );
};

export default SignUp;
