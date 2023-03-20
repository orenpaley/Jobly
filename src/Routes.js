import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import PrivateRoute from "./PrivateRoute";

import NavBar from "./home_user/NavBar";
import Home from "./Home";
import Companies from "../companies/Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import Signup from "./login_signup/Signup";
import Login from "./Login";
import Profile from "./home_user/Profile";

function Routes({
  handleLoginChange,
  handleLoginSubmit,
  handleSignupChange,
  handleSignupSubmit,
  handleLogout,
  username,
  password,
  token,
  setToken,
  user,
  setUser,
  current,
  setCurrent,
}) {
  return (
    <BrowserRouter>
      <NavBar handleLogout={handleLogout} token={token} setUser={setUser} />
      <Switch>
        <Route exact path="/">
          <Home current={current} />
        </Route>
        <Route exact path="/signup">
          <Signup
            handleChange={handleSignupChange}
            handleSubmit={handleSignupSubmit}
            setUser={setUser}
          />
        </Route>
        <Route exact path="/login">
          <Login
            handleSubmit={handleLoginSubmit}
            handleChange={handleLoginChange}
            username={username}
            password={password}
            token={token}
            setToken={setToken}
            setUser={setUser}
          />
        </Route>
        <PrivateRoute path="/companies/:compHandle">
          <Company current={current} />
        </PrivateRoute>
        <PrivateRoute exact path="/companies">
          <Companies current={current} />
        </PrivateRoute>
        <PrivateRoute exact path="/jobs">
          <Jobs current={current} />
        </PrivateRoute>
        <PrivateRoute exact path="/profile">
          <Profile current={current} setCurrent={setCurrent} />
        </PrivateRoute>
        <PrivateRoute
          exact
          path="/logout"
          onSubmit={handleLogout}
        ></PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
