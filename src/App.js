import logo from './logo.svg';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My Page</h1>
      </header>
    </div>
  );
}

export default App;
