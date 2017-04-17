import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Keys from './components/Keys';
import Title from './components/Title';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Calculator!</h1>
        <div className="box">
          <div className="title">
            <Title />
          </div>
          <div className="display">
            <Display />
          </div>
          <div className="keys">
          <Keys />
          </div>
            </div>
          </div>
    );
  }
}

export default App;
