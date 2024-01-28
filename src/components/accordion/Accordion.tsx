import React from "react";

type AccordionTitlePropsType = {
    titleValue: string;
    onClick: () => void;
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}>{props.titleValue}</h3>;
}

type AccordionBodyPropsType = {
    items: ItemType[];
    onBodyClick: (value: string) => void;
}

function AccordionBody(props:AccordionBodyPropsType) {
    return <ul>
        {props.items.map((item, index) => <li key={index} onClick={() => props.onBodyClick(item.value)}>{item.title}</li>)}
    </ul>
}

type ItemType = {
    title: string;
    value: string;

}
type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    onClick: () => void;
    items: ItemType[];
    onBodyClick: (value: string) => void;
}
export const Accordion = (props: AccordionPropsType) => {
    return <div>
        <AccordionTitle titleValue={props.titleValue} onClick={props.onClick}/>
        {!props.collapsed && <AccordionBody items={props.items} onBodyClick={props.onBodyClick}/>}
    </div>
}