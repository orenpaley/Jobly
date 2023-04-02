import React from "react";
import { useState, useEffect } from "react";
import JoblyApi from "../Api/api";
import JobCard from "./JobCard";

function Jobs({ current }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      let fetchJobs = await JoblyApi.getJobs();
      setJobs(fetchJobs);
    };
    getItems();
  }, []);
  console.log("jobs", jobs);

  return (
    <div>
      <h1>Jobs</h1>
      {jobs.map((j) => (
        <div>
          <JobCard
            id={j.id}
            title={j.title}
            salary={j.salary}
            description={j.equity}
            handle={j.companyHandle}
            current={current}
          />
        </div>
      ))}
    </div>
  );
}

export default Jobs;
