import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const backendHost = process.env.REACT_APP_BACKEND;

function App() {

  const [serverBranch, setServerBranch] = useState('[loading]');

  useEffect(() => {

    axios.get(`${backendHost}/branch`)
    .then(res => {
      setServerBranch(res.data.branch);
    });
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This react project is on the `main` branch
        </p>
        <p>The server branch is on the {serverBranch} branch</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
