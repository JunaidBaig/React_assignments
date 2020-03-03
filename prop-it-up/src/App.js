import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard'

function App() {
    return ( 
    <div className = "App" >
        <PersonCard firstName="Doe" lastName="Jane" age={45} hairColor="Black"/>
        <PersonCard firstName="Smith" lastName="john" age={88} hairColor="Brown"/>
        <PersonCard firstName="Fillmore" lastName="Millard" age={50} hairColor="Brown"/>
        <PersonCard firstName="Smith" lastName="Maria" age={62} hairColor="Brown"/>
    </div>
    );
}

export default App;