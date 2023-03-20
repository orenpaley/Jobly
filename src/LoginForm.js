import JoblyApi from "./api";
import { useHistory } from "react-router-dom";

function LoginForm({ handleChange, token, setToken, user, setUser }) {
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
    <form onSubmit={handleLoginSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
}

export default LoginForm;
