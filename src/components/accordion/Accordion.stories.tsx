import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import {useState} from "react";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

let accordionItems = [
    {"title": "1", "value": "v1"},
    {"title": "2", "value": "v2"},
    {"title": "3", "value": "v3"}
];

export const CollapsedAccordion: Story = {
    render: () => <Accordion collapsed={true} titleValue='CollapsedAccordion' onClick={()=>{}} items={accordionItems}
                             onBodyClick={onBodyClickHandler}/>,
};

const onChangeHandler = action('12344');
const onBodyClickHandler = action('12344');

export const OpenedAccordion: Story = {
    render: () => <Accordion collapsed={false} titleValue='OpenedAccordion' onClick={onChangeHandler} items={accordionItems}
                             onBodyClick={onBodyClickHandler}/>,
};

export const AccordionComponent = () => {
    let [collapsed, setCollapsed] = useState<boolean>(false);
    return (
        <Accordion collapsed={collapsed} titleValue='AccordionComponent' onClick={()=>setCollapsed(!collapsed)}
                   items={accordionItems} onBodyClick={onBodyClickHandler}/>
    )
};

// export const FirstStory: Story = {
//     args: {
//         collapsed: true,
//         titleValue: 'Accordion'
//         // onClick: () => {}
//     }
// }