import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const signup = async (email, password) => {
    await auth.createUserWithEmailAndPassword(email, password);
  };

  const login = async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      console.log({ user });
      if (user) {
        history.push("/");
      }
    });
    return unsubscribe;
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider value={{ user, signup, login }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
