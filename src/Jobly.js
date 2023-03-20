import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import JoblyApi from "./api";
import userContext from "./UserContext";
import jwt_decode from "jwt-decode";

function Jobly() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLasttName] = useState(null);
  const [email, setEmail] = useState(null);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(localStorage.getItem("currUser") || null);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    console.log("side effect currUser running");
    setUser(localStorage.getItem("currUser"));
  }, []);

  useEffect(() => {
    const getLoggedUser = async () => {
      if (user) {
        let decoded = jwt_decode(user);
        JoblyApi.token = user;
        console.log("curr user check", user);
        let fetchUser = (await JoblyApi.getUser(decoded.username)) || null;
        setCurrent(fetchUser);
      }
    };
    getLoggedUser();
  }, []);

  const handleLoginChange = (e) => {
    e.preventDefault();
    if (e.target.id === username) {
      setUsername(e.target.value);
    } else if (e.target.id === password) {
      setPassword(e.target.value);
    }
  };

  const handleSignupChange = (e) => {
    e.preventDefault();
    if (e.target.id === username) {
      setUsername(e.target.value);
    } else if (e.target.id === password) {
      setPassword(e.target.value);
    } else if (e.target.id === firstName) {
      setFirstName(e.target.value);
    } else if (e.target.id === lastName) {
      setLasttName(e.target.value);
    } else if (e.target.id === email) {
      setEmail(e.target.value);
    }
  };

  const handleLogout = (e) => {
    // e.preventDefault();
    JoblyApi.token = null;
    setToken(null);
    localStorage.removeItem("currUser");
    setUser(null);
    setCurrent(null);
    return;
  };

  return (
    <userContext.Provider
      value={{
        token: localStorage.getItem("currUser") || null,
      }}
    >
      <Routes
        // handleLoginSubmit={handleLoginSubmit}
        handleLoginChange={handleLoginChange}
        handleSignupChange={handleSignupChange}
        username={username}
        password={password}
        handleLogout={handleLogout}
        token={token}
        setToken={setToken}
        setUser={setUser}
        current={current}
        setCurrent={setCurrent}
      />
    </userContext.Provider>
  );
}

export default Jobly;
