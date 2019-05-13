import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

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

//print the real time
function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    // highlight-next-line
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);
  