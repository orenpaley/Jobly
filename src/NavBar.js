import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import userContext from "./UserContext";
// import JoblyApi from "./api";

// this component renders the nav and allows for active hovering
function NavBar({ handleLogout }) {
  let user = React.useContext(userContext);
  console.log("Navbar user", user);

  if (!user.token) {
    return (
      <div>
        <Navbar expand="md">
          <NavLink exact to="/" className="navbar-brand">
            Home
          </NavLink>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/signup">Signup</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/login">Login</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  } else if (user.token) {
    return (
      <div>
        <Navbar expand="md">
          <NavLink exact to="/" className="navbar-brand">
            Home
          </NavLink>

          <Nav className="ml-auto" navbar>
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
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
