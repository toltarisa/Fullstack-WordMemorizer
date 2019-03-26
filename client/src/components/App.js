import React, { Component } from 'react';
import '../styles/App.css';
//import Word from './pages/Words';
import MainPage from './pages/MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage/>
      </div>
    );
  }
}

export default App;
