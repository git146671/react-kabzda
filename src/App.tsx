import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {OnOff} from "./components/onOff/OnOff";
import {UncontrolledAccordion} from "./components/accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/rating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/onOff/UncontrolledOnOff";
import {Select} from "./components/select/Select";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

function App() {

    let [isOn, setIsOn] = useState<boolean>(true);
    let [rating, setRating] = useState<RatingValueType>(2)
    let [collapsed, setCollapsed] = useState<boolean>(false);
    let accordionItems = [
        {"title": "1", "value": "v1"},
        {"title": "2", "value": "v2"},
        {"title": "3", "value": "v3"}
    ];

    const accordionOnBodyClick = (value: string) => {
        console.log(value);
    }

    return (
        <div className="App">
            - APP -
            <Rating value={rating} onClick={(newRating) => setRating(newRating)}/>
            <UncontrolledRating/>
            <Accordion titleValue='---Menu---' collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}
                       items={accordionItems} onBodyClick={accordionOnBodyClick}/>
            <UncontrolledAccordion titleValue='---U-Menu---'/>
            <OnOff isOn={isOn} changeIsOn={(on) => setIsOn(on)}/>
            <UncontrolledOnOff/>
            <Select value={"value1"} onChange={()=>{}} items={
                [
                    {title:"value1",value:"value1"},
                    {title:"value2",value:"value2"},
                    {title:"value3",value:"value3"}
                ]
            }/>
        </div>
    );
}

export default App;

