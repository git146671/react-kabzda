import styled from "styled-components";
import {useState} from "react";

export const UncontrolledOnOff = () => {

    let [isOn, setIsOn] = useState<boolean>(true);

    return (
        <div>
            <StyledIndicator onClick={() => setIsOn(true)} bgc={isOn ? 'green' : 'grey'}>ON</StyledIndicator>
            <StyledIndicator onClick={() => setIsOn(false)} bgc={!isOn ? 'red' : 'grey'}>OFF</StyledIndicator>
            <StyledCircle bgc={isOn ? 'green' : 'red'}></StyledCircle>
        </div>
    )
}

type StyledIndicatorPropsType = {
    bgc:string;
}

const StyledIndicator = styled.span<StyledIndicatorPropsType>`
    border: 1px;
    width: 100px;
    height: 40px;
    background-color: ${props => props.bgc};
    `

type StyledCirclePropsType = {
    bgc:string;
}
const StyledCircle = styled.div<StyledCirclePropsType>`
    display: inline-block;
    margin-left: 3px;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: ${props => props.bgc};
    `