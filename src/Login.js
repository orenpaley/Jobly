import LoginForm from "./LoginForm";

function Login({ handleChange, token, setToken, user, setUser }) {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm
        handleChange={handleChange}
        token={token}
        setToken={setToken}
        user={user}
        setUser={setUser}
      />
    </div>
  );
}

export default Login;
