import JoblyApi from "../Api/api";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

function SignupForm({ setUser, handleChange }) {
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitting");
    const newUserToken = await JoblyApi.register(
      e.target.username.value,
      e.target.password.value,
      e.target.firstName.value,
      e.target.lastName.value,
      e.target.email.value
    );
    // console.log("newUserToken", newUserToken);
    JoblyApi.token = newUserToken;
    const currentUser = await JoblyApi.login(
      e.target.username.value,
      e.target.password.value
    );
    localStorage.setItem("currUser", currentUser);
    setUser(currentUser);
    history.push("/");
    return { success: currentUser };
  };
  return (
    <form onSubmit={handleSubmit} className="row g-3 needs-validation">
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
          id="validationCustom02"
          onChange={handleChange}
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom02"
          onChange={handleChange}
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom02"
          onChange={handleChange}
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="validationCustom02"
          onChange={handleChange}
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <Button color="info" className="button">
        Register
      </Button>
    </form>
  );
}

export default SignupForm;
