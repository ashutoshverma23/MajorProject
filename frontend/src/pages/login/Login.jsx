import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="mt-40 ">
      <h2 className="text-center mb-5 text-3xl font-bold">
        Login to store the Results
      </h2>
      <form
        onSubmit={handleSubmit}
        className="container mx-auto mt-8 w-1/2 bg-orange-100 p-5 rounded-sm mb-8"
      >
        <div className="mb-4">
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-2"
          />
        </div>
        <div className="mt-2 mb-2">
          <Link to="/signup">{"Don't"} have an account? Sign up</Link>
        </div>

        <button
          type="submit"
          className="w-1/2 p-2 rounded-sm bg-blue-500 text-white hover:bg-blue-600 mx-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
