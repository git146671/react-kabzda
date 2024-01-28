import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default { component: Select }
export const SelectWithValue = () => <Select value={"value1"} onChange={action("selected")} items={
    [
        {title:"t","value":"value1"}, 
        {title:"t2","value":"value2"}
    ]
}/>

export const SelectWithoutValue = () => <Select value={""} onChange={action("selected")} items={
    [
        {title:"t","value":"value1"},
        {title:"t2","value":"value2"}
    ]
}/>
