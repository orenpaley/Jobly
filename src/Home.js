import React from "react";

function Home({ current }) {
  if (!current) {
    return (
      <div>
        <h2>Welcome To Jobly</h2>
        <h1>Sign up or Login to Get Started</h1>
      </div>
    );
  } else if (current) {
    return (
      <div>
        <h2>Welcome To Jobly, {current.firstName}</h2>
        <h1>You are logged in</h1>
      </div>
    );
  }
}

export default Home;
