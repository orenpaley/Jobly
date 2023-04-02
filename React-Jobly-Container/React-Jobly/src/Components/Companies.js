import React from "react";
import { useState, useEffect } from "react";
import JoblyApi from "../Api/api";
import CompanyCard from "../Components/CompanyCard";
import { Label, Input } from "reactstrap";

import "./Companies.css";

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
      <div className="input-container">
        <Label htmlFor="filter" className="input-label">
          filter:
        </Label>
        <Input
          id="filter"
          name="filter"
          placeholder="abcdefg"
          type="text"
          onChange={handleSearch}
          className="filter-input"
        />
      </div>

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
