import React from "react";

function AccordionTitle() {
    return <h3>Menu</h3>;
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export const Accordion = () => {
    return <div>
        <AccordionTitle/>
        <AccordionBody/>
    </div>
}