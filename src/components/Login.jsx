import React, { useState } from "react";
import "./Login.css"; // Import CSS for styling

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }

    // Sample Validation (Replace with API call)
    if (email === "user@example.com" && password === "password123") {
      alert("Login Successful! 🎉");
      setError("");
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      
      {error && <p className="error">{error}</p>} {/* Show error if any */}

      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
