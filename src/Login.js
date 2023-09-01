import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your login logic
    console.log('Username:', username);
    console.log('Password:', password);
  };
  return (
    <div className="container">
        <h2>JAIS SERVICE CENTER</h2>
      <h3>login</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Username:</label>
          <input className="input" type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label className="label">Password:</label>
          <input className="input" type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button className="button" type="submit">Login</button>
        <button className="button button-secondary">Signup</button>
      </form>
    </div>
  );
}
export default Login;
