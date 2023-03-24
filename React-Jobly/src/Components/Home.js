import React, { useContext } from "react";
import userContext from "../UserContext";
import Applications from "./Applications";
import "./Home.css";

function Home() {
  const { current } = useContext(userContext);
  console.log("current", current, "current");
  if (!current) {
    return (
      <div>
        <h2 className="title welcome-new">
          Welcome To <span className="jobly-span">Jobly</span>
        </h2>
        <section className="subheader-container">
          <h1 className="signup-new">Sign up or Login to Get Started</h1>
        </section>
      </div>
    );
  } else {
    return (
      <>
        <div className="title">
          <h2>Welcome To Jobly, {current.firstName}</h2>
          <h1>You are logged in</h1>
        </div>
        <Applications />
      </>
    );
  }
}

export default Home;
