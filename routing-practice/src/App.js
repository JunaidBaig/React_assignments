import React from 'react';
import './App.css';
import {Router} from '@reach/router'
import Home from './components/Home';
import Hello from './components/Hello';
import HelloNumber from './components/HelloNumber';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Hello path="/:id"/>
        <HelloNumber path='/:str/:color/:colorText'/>
      </Router>
      
    </div>
  );
}

export default App;
