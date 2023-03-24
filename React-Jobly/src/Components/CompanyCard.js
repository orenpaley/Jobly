import { Link } from "react-router-dom";

function CompanyCard({ handle, name, numEmployees, description, current }) {
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
      <div style={{ color: "red", margin: "12px" }}>{handle}</div>
      <div style={{ color: "green", margin: "12px" }}>{name}</div>
      <div style={{ color: "orange", margin: "12px" }}>{numEmployees}</div>
      <div style={{ color: "blue", margin: "12px" }}>{description}</div>
    </Link>
  );
}

export default CompanyCard;
