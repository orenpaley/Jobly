import "./NavBar.css";
import React from "react";
import { NavLink } from "react-router-dom";

import { Nav, NavItem } from "reactstrap";

import userContext from "../UserContext";

// this component renders the nav and allows for active hovering
function NavBar({ handleLogout }) {
  const { user } = React.useContext(userContext);

  function isLoggedIn() {
    return (
      <div>
        <Nav className="navbar" tabs color="info" justified>
          <NavLink exact to="/" className="navbar-brand">
            Home
          </NavLink>
          <NavItem>
            <NavLink to="/companies">Companies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/jobs">Jobs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/" onClick={handleLogout}>
              Logout
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }

  function notLoggedIn() {
    return (
      <div>
        <Nav className="navbar" tabs color="info" justified>
          <NavItem>
            <NavLink
              exact
              activeClassName="is-active"
              to="/"
              active="true"
              className="navlink"
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="navlink"
              activeClassName="is-active"
              to="/login"
            >
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="navlink"
              activeClassName="is-active"
              to="/signup"
            >
              Signup
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }

  return user ? isLoggedIn() : notLoggedIn();
}

export default NavBar;
