import SignupForm from "./SignupForm";
import "./Signup.css";

function Signup({ handleSubmit, handleChange, setUser }) {
  return (
    <>
      <div className="signup-page">
        <SignupForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          setUser={setUser}
        />
      </div>
      <div className="signup-filler">
        Already have an account? <a href="/login">Login</a>
      </div>
    </>
  );
}

export default Signup;
