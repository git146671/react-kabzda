import React, {useState} from "react";
import { action } from '@storybook/addon-actions';
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff stories',
    component: OnOff,
}
const callback = action("on or off clicked")
export const On = () => <OnOff isOn={true} changeIsOn={callback}/>
export const Off = () => <OnOff isOn={false} changeIsOn={callback}/>
export const OnOffComponent = () => {
    const [isOn, setIsOn] = useState<boolean>(true)
    return <OnOff isOn={isOn} changeIsOn={setIsOn}/>
}