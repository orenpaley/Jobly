import React from "react";

import { Route, Switch } from "react-router";
import PrivateRoute from "../Helpers/PrivateRoute";

import { useHistory } from "react-router";

import JoblyApi from "../Api/api";
import Home from "../Components/Home";
import Companies from "../Components/Companies";
import Company from "../Components/Company";
import Jobs from "../Components/Jobs";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import Logout from "../Components/Logout";
import Profile from "../Profile";

function Routes({
  handleLoginChange,
  handleLoginSubmit,
  handleSignupChange,
  handleSignupSubmit,
  username,
  password,
  setUser,
  current,
  setCurrent,
}) {
  return (
    <div>
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
        <PrivateRoute exact path="/logout">
          <Logout setUser={setUser} setCurrent={setCurrent} />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default Routes;
