import JoblyApi from "../Api/api";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

function LoginForm({ handleChange, setUser }) {
  const history = useHistory();
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const currentUser = await JoblyApi.login(
      e.target.username.value,
      e.target.password.value
    );
    localStorage.setItem("currUser", currentUser);
    setUser(currentUser);
    history.push("/companies");
    history.go(0);
  };
  return (
    <form
      onSubmit={handleLoginSubmit}
      className="row g-3 needs-validation"
      noValidate
    >
      <div className="col-md-4">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          onChange={handleChange}
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={handleChange}
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <Button color="info" className="button">
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
