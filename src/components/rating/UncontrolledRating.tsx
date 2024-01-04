import React, {useState} from "react";
import {RatingValueType} from "../../App";

export const UncontrolledRating = () => {
    let [value, setValue] = useState<RatingValueType>(3)

    return <div>
        <Star selected={value >= 1} onClick={() => setValue(1)}/>
        <Star selected={value >= 2} onClick={() => setValue(2)}/>
        <Star selected={value >= 3} onClick={() => setValue(3)}/>
        <Star selected={value >= 4} onClick={() => setValue(4)}/>
        <Star selected={value >= 5} onClick={() => setValue(5)}/>
    </div>
}

type StarPropsType = {
    selected: boolean;
    onClick: () => void;
}
export const Star = (props: StarPropsType) => {
    return <span onClick={() => props.onClick()}>{props.selected ? <b>star </b> : 'star '}</span>;
}