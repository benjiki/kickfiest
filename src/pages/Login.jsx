// Import necessary components and modules
import React, { useState } from "react";
import axios from "axios";
import Input from "../components/Input";

function Login(props) {
  // State variables for username, password, and error handling
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("your-api-endpoint/login", {
        username,
        password,
      });
      // Handle successful login, such as redirecting to another page
      console.log("Login Successful:", response.data);
    } catch (error) {
      // Handle login error, such as displaying an error message
      setError("Invalid username or password");
      console.error("Login Error:", error);
    }
  };

  // Return JSX for the Login component
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("/assets/bg2.jpg")` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center w-full h-full overflow-hidden shadow-2xl">
        <div className="border-2 border-white rounded-lg text-white w-[70%] h-[70%] flex flex-row">
          {/* image */}
          <div
            className="w-[60%] h-full bg-cover bg-center overflow-hidden rounded-l-lg shadow-xl"
            style={{
              backgroundImage: `url("/assets/livbg.jpg")`,
              backgroundSize: "cover",
            }}
          ></div>
          {/* Form container */}
          <div className="text-white font-sans w-[40%] px-10 pt-28">
            <h1 className="text-4xl text-center">Welcome back</h1>

            {/* Form */}
            <form className="flex flex-col gap-5 mt-20" onSubmit={handleLogin}>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit" // Specify button type as submit
                className="rounded-xl py-4 px-2 border-2 hover:bg-black duration-500 hover:text-white mt-10"
              >
                Login
              </button>
            </form>

            {/* Display error message if error state is set */}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
