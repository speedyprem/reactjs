import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {HelloWorld()}
      </header>
    </div>
  );
}

export default App;

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Prem',
  lastName: 'Tiwari'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

function HelloWorld() {
  return(
    element
  );
}