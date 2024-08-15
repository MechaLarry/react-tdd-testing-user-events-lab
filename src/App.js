import React, { useState } from 'react';
import './App.css'; 
import larryImage from './assets/larry.jpeg';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((interest) => interest !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <h1>Hi, I'm Larry</h1>
      <img alt="My profile pic" src={larryImage} />
      <h2>About Me</h2>
      <p>
        I'm a computer science graduate increasing my coding skills to be a certified software engineer. I enjoy being creative and flexxing my skills.
      </p>

      <div>
        <a href="https://github.com/MechaLarry">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      {/* Newsletter Signup Form */}
      <form onSubmit={handleSubmit}>
        <h2>Sign up for the Newsletter</h2>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <label>
            <input
              type="checkbox"
              value="Technology"
              onChange={handleCheckboxChange}
            />
            Technology
          </label>
          <label>
            <input
              type="checkbox"
              value="Health"
              onChange={handleCheckboxChange}
            />
            Health
          </label>
          <label>
            <input
              type="checkbox"
              value="Travel"
              onChange={handleCheckboxChange}
            />
            Travel
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Display message on submit */}
      {submitted && (
        <div>
          <h2>Thank you, {name}!</h2>
          <p>Your subscription to our newsletter has been received.</p>
          {interests.length > 0 && (
            <p>Your interests: {interests.join(', ')}</p>
          )}
        </div>
      )}
    </main>
  );
}

export default App;
