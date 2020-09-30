import React from 'react';
import './App.css';
import Header from './components/header'
import AdTask from './components/AddTask'
import ListTask from './components/ListTask'

function App() {
  return (
    <div className="App">
        <Header />
        <AdTask />
         <ListTask />
       
    </div>
  );
}

export default App;
