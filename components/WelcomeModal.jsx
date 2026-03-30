'use client';

import { useState, useEffect } from 'react';

export default function WelcomeModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('welcomeDismissed');
    if (!dismissed) {
      setShow(true);
    }
  }, []);

  function handleClose() {
    setShow(false);
    sessionStorage.setItem('welcomeDismissed', 'true');
  }

  if (!show) return null;

  return (
    <div className="welcome-overlay" onClick={(e) => e.target === e.currentTarget && handleClose()}>
      <div className="welcome-box">
        <h2>Welcome!</h2>
        <p>
          Welcome to my portfolio website! Explore my skills, projects, and experience.
          Feel free to toggle dark mode, browse my GitHub repositories, and send me a message.
        </p>
        <button onClick={handleClose}>Continue</button>
      </div>
    </div>
  );
}
