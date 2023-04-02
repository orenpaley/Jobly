import React from "react";
import JoblyApi from "../Api/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobCard from "../Components/JobCard";

function Company({ compHandle, current }) {
  let companyHandle = useParams(compHandle);
  const [company, setCompany] = useState("");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getCompany = async () => {
      let fetchCompany = await JoblyApi.getCompany(companyHandle.compHandle);
      setCompany(fetchCompany);
    };
    const getJobs = async () => {
      let fetchJobs = await JoblyApi.getJobs(companyHandle.compHandle);
      setJobs(fetchJobs);
    };
    getCompany();
    getJobs();
  }, [companyHandle.compHandle]);

  return (
    <div>
      <h1>{company.name}</h1>
      <p>handle: {company.handle}</p>
      <p>num of employees: {company.numEmployees}</p>
      <p>description: {company.description}</p>

      <h2>Available Jobs</h2>
      {jobs
        .filter((j) => j.companyHandle === companyHandle.compHandle)
        .map((j) => (
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

export default Company;
