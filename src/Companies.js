import React from "react";
import { useState, useEffect } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";

function Companies({ current }) {
  const [companies, setCompanies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setCompanies(await JoblyApi.getCompanies(e.target.value));
  };

  useEffect(() => {
    const getItems = async () => {
      let fetchCompanies = await JoblyApi.getCompanies();
      const setData = () => {
        setCompanies(fetchCompanies);
      };
      setData();
    };
    getItems();
  }, []);

  return (
    <div>
      <label htmlFor="filter">Filter</label>
      <input type="text" onChange={handleSearch} id="filter" />
      <h1>Companies</h1>
      {companies.map((c) => (
        <div>
          <CompanyCard
            id={c.id}
            handle={c.handle}
            name={c.name}
            numEmployees={c.numEmployees}
            description={c.description}
            current={current}
          />
        </div>
      ))}
    </div>
  );
}

export default Companies;
