import React, { Component } from 'react';
import './App.css';

import PersonList from './Components/PersonList';
import PersonInput from './Components/PersonInput';

class App extends Component {
  render() {
    return (
    <div>
      <PersonList/>
      <PersonInput/>
    </div>
    );
  }
}

export default App;
