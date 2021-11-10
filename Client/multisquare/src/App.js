import React from "react";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Authentication/Login";
import "./App.css";
import SignUp from "./components/Authentication/Signup";

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Products />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
