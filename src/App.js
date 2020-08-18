import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from "../src/components/LoginComponent"
function App() {
  return (
    <div className="App">
      <LoginComponent/>
    </div>
  );
}

export default App;
