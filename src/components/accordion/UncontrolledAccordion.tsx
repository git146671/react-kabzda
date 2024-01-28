import React, {useReducer} from "react";
import {accordionReducer, TOGGLE_CONST} from "./accordionReducer";

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

type UncontrolledAccordionPropsType = {
    titleValue: string;
}
export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {
    let [state, dispatch] = useReducer(accordionReducer, {collapsed: false})
    //let [collapsed, setCollapsed] = useState<boolean>(false);
    return <div>
        <AccordionTitle titleValue={props.titleValue} onClick={() => dispatch({type: TOGGLE_CONST})}/>
        {state.collapsed && <AccordionBody/>}
    </div>

}