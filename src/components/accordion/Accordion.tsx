import React from "react";

type AccordionTitlePropsType = {
    titleValue: string;
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.titleValue}</h3>;
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
}
export const Accordion = (props: AccordionPropsType) => {
    return <div>
        <AccordionTitle titleValue={props.titleValue}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}