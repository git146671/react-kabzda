import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {OnOff} from "./components/onOff/OnOff";
import {UncontrolledAccordion} from "./components/accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/rating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/onOff/UncontrolledOnOff";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

function App() {

    let [isOn, setIsOn] = useState<boolean>(true);
    let [rating, setRating] = useState<RatingValueType>(2)
    let [collapsed, setCollapsed] = useState<boolean>(false);

    return (
        <div className="App">
            - APP -
            <Rating value={rating} onClick={(newRating) => setRating(newRating)}/>
            <UncontrolledRating/>
            <Accordion titleValue='---Menu---' collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}/>
            <UncontrolledAccordion titleValue='---U-Menu---'/>
            <OnOff isOn={isOn} changeIsOn={(on) => setIsOn(on)}/>
            <UncontrolledOnOff/>
        </div>
    );
}

export default App;

