import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";

function App() {
  return (
    <div className="App">
      12345
      <Rating value={5}/>
      <Accordion/>
    </div>
  );
}

export default App;

