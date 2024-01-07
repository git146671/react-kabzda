import React, {useState} from "react";
import { action } from '@storybook/addon-actions';
import {Rating} from "./Rating";
import {RatingValueType} from "../../App";

export default {
    title: 'Rating stories',
    component: Rating,
}

export const Rating0 = () => <Rating value={0} onClick={x=>x}/>
export const Rating1 = () => <Rating value={1} onClick={x=>x}/>
export const Rating2 = () => <Rating value={2} onClick={x=>x}/>
export const Rating3 = () => <Rating value={3} onClick={x=>x}/>
export const Rating4 = () => <Rating value={4} onClick={x=>x}/>
export const Rating5 = () => <Rating value={5} onClick={x=>x}/>
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(0);
    return <Rating value={rating} onClick={setRating}/>
}