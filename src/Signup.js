import SignupForm from "./SignupForm";

function Signup({ handleSubmit, handleChange, setUser }) {
  return (
    <div>
      <h1>Signup</h1>
      <SignupForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        setUser={setUser}
      />
    </div>
  );
}

export default Signup;
