import React from 'react';
import './App.css';

let student: string = 'Jeff';
let age: number = 55;
let isSmart: boolean = true;

let students: string[] = ['Joe', 'Baiden', 'Trump', 'Obama'];
let fees: number[] = [12, 21, 14, 44, 55]; 

interface Person { // interface usually started with cpatal letter
  name: string,
  job?: string,
  employed?: string | boolean,
  age: number,
  location: string | number
}

const person: Person = {
  name: 'Bill Clinton',
  // job: 'Jobless',
  employed: true,
  location: 55,
  age: 85,
}

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
