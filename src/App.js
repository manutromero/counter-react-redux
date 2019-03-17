import React, { Component } from 'react';
import './App.css';
import CounterComponent from './components/CounterComponent';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>hola mundo</h1>
        <CounterComponent/>
      </div>
    );
  }
}

export default App;
