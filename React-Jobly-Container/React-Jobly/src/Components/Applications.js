import React, { useState, useEffect } from "react";
import JoblyApi from "../Api/api";

import userContext from "../UserContext";
import JobCard from "./JobCard";

import "./Applications.css";

function Applications() {
  const { current } = React.useContext(userContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      console.time("promise all");
      let data = await Promise.all(
        current.applications.map(async (a) => {
          return await JoblyApi.getJob(a);
        })
      );
      console.timeEnd("promise all");
      setJobs(data);
    };
    getJobs();
  }, [current.applications]);

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
