import React from "react";

type AccordionPropsType = {
    titleValue: string;
}

function AccordionTitle(props: AccordionPropsType) {
    return <h3>{props.titleValue}</h3>;
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export const Accordion = (props: AccordionPropsType) => {
    return <div>
        <AccordionTitle titleValue={props.titleValue}/>
        <AccordionBody/>
    </div>
}