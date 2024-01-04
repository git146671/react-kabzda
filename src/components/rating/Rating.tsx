import React from "react";
import {RatingValueType} from "../../App";

type RatingPropsType = {
    value: RatingValueType;
    onClick: (value: 0 | 1 | 2 | 3 | 4 | 5) => void;
}

export const Rating = (props: RatingPropsType) => {
    return <div>
        <Star selected={props.value >= 1} value={1} onClick={props.onClick}/>
        <Star selected={props.value >= 2} value={2} onClick={props.onClick}/>
        <Star selected={props.value >= 3} value={3} onClick={props.onClick}/>
        <Star selected={props.value >= 4} value={4} onClick={props.onClick}/>
        <Star selected={props.value >= 5} value={5} onClick={props.onClick}/>
    </div>
}

type StarPropsType = {
    selected: boolean;
    value: RatingValueType;
    onClick: (value: RatingValueType) => void;
}
export const Star = (props: StarPropsType) => {
    return <span onClick={() => props.onClick(props.value)}>{props.selected ? <b>star </b> : 'star '}</span>;
}