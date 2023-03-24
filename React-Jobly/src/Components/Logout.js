import { useHistory } from "react-router-dom";
import JoblyApi from "../Api/api";

function Logout({ setUser, setCurrent }) {
  const history = useHistory();
  const handleLogout = (e) => {
    e.preventDefault();
    JoblyApi.token = null;
    localStorage.removeItem("currUser");
    setUser(null);
    setCurrent(null);
    history.push("/");
    history.go(0);
    return;
  };
  const handleCancel = () => {
    history.goBack();
  };

  return (
    <>
      <form onSubmit={handleLogout}>
        <h2>Are you sure you want to log out?</h2>
        <button>Logout</button>
      </form>
      <button onClick={handleCancel}>Cancel</button>
    </>
  );
}

export default Logout;
