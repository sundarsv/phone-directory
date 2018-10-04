import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="bodyContainer">
          <button className="addButton">Add</button>
          <div className="table">
            <span>Name</span>
            <span>Phone</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
