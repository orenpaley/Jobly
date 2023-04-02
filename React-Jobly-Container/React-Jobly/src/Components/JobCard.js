import { Link, useHistory } from "react-router-dom";
import JoblyApi from "../Api/api";
import { useEffect, useState } from "react";

function JobCard({ id, title, salary, equity, handle, current }) {
  const history = useHistory();
  const [found, setFound] = useState(null);
  useEffect(() => {
    if (!current) {
      console.log("loading user");
    } else {
      setFound(current.applications.includes(id || +id));
    }
  }, [current, id]);

  const handleClick = async (e) => {
    e.preventDefault();
    if (!found) {
      let res = await JoblyApi.applyJob(current.username, id.toString());
      history.go(0);
      return res;
    }
    if (found) {
      let res = await JoblyApi.unApplyJob(current.username, id);
      history.go(0);
      console.log("removed?");
      return res;
    }
  };

  if (found) {
    return (
      <Link
        to={`/companies/${handle}`}
        style={{
          display: "flex",
          flexDirection: "horizontal",
          justifyContent: "start",
          backgroundColor: "grey",
          margin: "3px",
          padding: "15px",
          textDecoration: "none",
        }}
      >
        <div style={{ display: "none" }}>{id}</div>
        <div style={{ color: "green", margin: "12px" }}>{title}</div>
        <div style={{ color: "orange", margin: "12px" }}>{salary}</div>
        <div style={{ color: "blue", margin: "12px" }}>{equity}</div>
        <div style={{ color: "pink", margin: "12px" }}>{handle}</div>
        <button
          onClick={handleClick}
          style={{ padding: "11px", color: "red", margin: "0 0 0 30px " }}
        >
          unApply
        </button>
      </Link>
    );
  } else {
    return (
      <Link
        to={`/companies/${handle}`}
        style={{
          display: "flex",
          flexDirection: "horizontal",
          justifyContent: "start",
          backgroundColor: "grey",
          margin: "3px",
          padding: "15px",
          textDecoration: "none",
        }}
      >
        <div style={{ display: "none" }}>{id}</div>
        <div style={{ color: "green", margin: "12px" }}>{title}</div>
        <div style={{ color: "orange", margin: "12px" }}>{salary}</div>
        <div style={{ color: "blue", margin: "12px" }}>{equity}</div>
        <div style={{ color: "pink", margin: "12px" }}>{handle}</div>
        <button
          style={{ padding: "11px", color: "green", margin: "0 0 0 30px " }}
          onClick={handleClick}
        >
          Apply
        </button>
      </Link>
    );
  }
}

export default JobCard;
