import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Task2 from './Components/Task2';
import Task3 from './Components/Task3'
import Task4 from './Components/Task4'
import Age from './Components/Age';
import Task5 from './Components/Task5';

function App() {
  return (
    <div className="App">
     <Router>  
      <switch> 
      {/* <Route exact path='/' component={Age}></Route>
      <Route exact path='/task2' component={Task2}></Route>
      <Route exact path='/task3' component={Task3}></Route> */}
         {/* <Route exact path='/task4' component={Task4}></Route> */}
         <Route exact path='/task5' component={Task5}></Route>
         </switch>
        </Router>
    </div>
  );
}

export default App;
