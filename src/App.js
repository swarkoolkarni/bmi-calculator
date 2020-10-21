import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BMICalc from "./components/bmicalc";

function App() {
  return (
    <div className="App">
        <h1>BMI Calculator</h1>
         <BMICalc />
    </div>
  );
}

export default App;
