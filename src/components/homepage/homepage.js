import React, { useState } from 'react';
import Login from '../login/login';
import "./homepage.css";

export default function Homepage() {
  const [showLogin, setShowLogin] = useState(false);

  const handleSignIn = () => {
    setShowLogin(true);
  };

  if (showLogin) {
    return <Login />;
  }

  return (
    <div className='homepage'>
      <h4>This is Homepage.</h4>
      <button type="button" className="button" onClick={handleSignIn}>
        Sign In
      </button>
    </div>
  );
}
