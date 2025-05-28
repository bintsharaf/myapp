import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios'; // ✅ fixed typo here
import { RotatingLines } from 'react-loader-spinner'; // ✅ fixed typo here
import './App.css'; // ✅ fixed typo here

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetch delay
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {loading ? (
        // ✅ Show loader while loading
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <RotatingLines
            strokeColor="blue"
            strokeWidth="5"
            animationDuration="0.75"
            width="50"
            visible={true}
          />
        </div>
      ) : (
        // ✅ Show header when done loading
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to My Page</h1>
        </header>
      )}
    </div>
  );
}

export default App;