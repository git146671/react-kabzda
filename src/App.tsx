import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {OnOff} from "./components/onOff/OnOff";


function App() {

    let [isOn, setIsOn] = useState<boolean>(true);

    return (
        <div className="App">
            12345
            <Rating value={5}/>
            <Accordion titleValue='---Menu---' collapsed={false}/>
            <OnOff isOn={isOn} changeIsOn={(on) => setIsOn(on)}/>
        </div>
    );
}

export default App;

