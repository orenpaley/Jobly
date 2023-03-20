import JoblyApi from "./api";
import { useHistory } from "react-router-dom";

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
    console.log("newUserToken", newUserToken);
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" onChange={handleChange} />
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" onChange={handleChange} />
      <label htmlFor="lastName">LastName</label>
      <input type="text" id="lastName" onChange={handleChange} />
      <label htmlFor="email">LastName</label>
      <input type="email" id="email" onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
}

export default SignupForm;
