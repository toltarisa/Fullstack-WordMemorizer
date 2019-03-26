import React, { Component } from 'react';
import '../styles/App.css';
import Word from './pages/Words';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Word/>
      </div>
    );
  }
}

export default App;
