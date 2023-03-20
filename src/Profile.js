import React from "react";
import JoblyApi from "./api";

function Profile({ current, setCurrent }) {
  console.log("current/Profile", current);
  const handleChange = (e) => {
    e.preventDefault();
    setCurrent({ ...current, [e.target.id]: e.target.value });
    console.log("current updated", current);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = await JoblyApi.patchUser(current.username, {
      firstName: current.firstName,
      lastName: current.lastName,
      email: current.email,
    });
    console.log("curr user patched", user);
    return user;
  };
  if (current) {
    return (
      <div>
        <h1>Profile</h1>
        <h2>Edit Profile Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={handleChange}
            value={current.firstName}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={handleChange}
            value={current.lastName}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="lastName"
            onChange={handleChange}
            value={current.email}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  } else {
    return <h2>Loading</h2>;
  }
}

export default Profile;
