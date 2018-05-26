import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="App-container">
        <header className="App-header">
          <div className="App-logo"><img src="https://www.discoverwestworld.com/images/ww_logo_outline_100.png" /></div><br />
          <h1 className="App-title">Welcome to the World of the West Robots</h1>
        </header>
        <p className="App-intro">
          Welcome back, Dr. Ford.
        </p>
        <p className="App-robots">
        </p>
      </section>
    );
  }
}

export default App;
