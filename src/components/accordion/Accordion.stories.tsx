import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import {useState} from "react";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const CollapsedAccordion: Story = {
    render: () => <Accordion collapsed={true} titleValue='CollapsedAccordion' onClick={()=>{}}/>,
};

const onChangeHandler = action('12344')

export const OpenedAccordion: Story = {
    render: () => <Accordion collapsed={false} titleValue='OpenedAccordion' onClick={onChangeHandler}/>,
};

export const AccordionComponent = () => {
    let [collapsed, setCollapsed] = useState<boolean>(false);
    return (
        <Accordion collapsed={collapsed} titleValue='AccordionComponent' onClick={()=>setCollapsed(!collapsed)}/>
    )
};

// export const FirstStory: Story = {
//     args: {
//         collapsed: true,
//         titleValue: 'Accordion'
//         // onClick: () => {}
//     }
// }