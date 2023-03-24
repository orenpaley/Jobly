import React, { useState, useEffect } from "react";
import JoblyApi from "../Api/api";

import userContext from "../UserContext";
import JobCard from "./JobCard";

import "./Applications.css";

function Applications() {
  const { current } = React.useContext(userContext);
  const [applied, setApplied] = useState([]);
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    setJobs(
      current.applications.map(async (a) => {
        return await JoblyApi.getJob(a);
      })
    );
    console.log("jobs?", jobs);
  };

  const getWithPromiseAll = async () => {
    console.time("promise all");
    let data = await Promise.all(
      current.applications.map(async (a) => {
        return await JoblyApi.getJob(a);
      })
    );
    console.timeEnd("promise all");
    setJobs(data);
  };

  useEffect(() => {
    getWithPromiseAll();
  }, []);

  return (
    <div className="home-container">
      <h2>Applications</h2>
      {jobs.map((a) => (
        <div>
          <JobCard
            id={a.id}
            title={a.title}
            salary={a.salary}
            handle={a.companyHandle}
            current={current}
          />
        </div>
      ))}
    </div>
  );
}

export default Applications;
