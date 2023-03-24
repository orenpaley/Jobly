import "./NavBar.css";
import React from "react";
import { NavLink } from "react-router-dom";

import { Nav, NavItem } from "reactstrap";

// this component renders the nav and allows for active hovering
function NavBar() {
  function isLoggedIn() {
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
            <NavLink activeClassName="is-active" to="/companies">
              Companies
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink activeClassName="is-active" to="/jobs">
              Jobs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink activeClassName="is-active" to="/profile">
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/logout">Logout</NavLink>
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

  return localStorage.getItem("currUser") ? isLoggedIn() : notLoggedIn();
}

export default NavBar;
