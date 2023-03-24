import React, { useState, useEffect } from "react";
import { BrowserRouter, useHistory } from "react-router-dom";
import Routes from "../Routes/Routes";
import JoblyApi from "../Api/api";
import userContext from "../UserContext";
import jwt_decode from "jwt-decode";
import NavBar from "../Components/NavBar";

function Jobly() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLasttName] = useState(null);
  const [email, setEmail] = useState(null);
  const [user, setUser] = useState(
    localStorage.getItem("currUser") || { token: null }
  );
  const [current, setCurrent] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const getLoggedUser = async () => {
      console.log("user", user);
      if (user) {
        let decoded = jwt_decode(user);
        JoblyApi.token = user;
        console.log("curr user check", user);
        let fetchUser = await JoblyApi.getUser(decoded.username);
        setCurrent(fetchUser);
      }
    };
    getLoggedUser();
  }, [user]);

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

  return (
    <BrowserRouter>
      <userContext.Provider value={{ user, current }}>
        <div>
          <NavBar setUser={setUser} />
          <Routes
            // handleLoginSubmit={handleLoginSubmit}
            handleLoginChange={handleLoginChange}
            handleSignupChange={handleSignupChange}
            username={username}
            password={password}
            setUser={setUser}
            current={current}
            setCurrent={setCurrent}
          />
        </div>
      </userContext.Provider>
    </BrowserRouter>
  );
}

export default Jobly;
