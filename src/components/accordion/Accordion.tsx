import React from "react";

type AccordionTitlePropsType = {
    titleValue: string;
    onClick: () => void;
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}>{props.titleValue}</h3>;
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    onClick: () => void;
}
export const Accordion = (props: AccordionPropsType) => {
    return <div>
        <AccordionTitle titleValue={props.titleValue} onClick={props.onClick}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}