import styled from "styled-components";

type OnOffPropsType = {
    isOn: boolean;
    changeIsOn: (on: boolean) => void;
}
export const OnOff = (props: OnOffPropsType) => {
    return (
        <div>
            <StyledIndicator onClick={() => props.changeIsOn(true)} bgc={props.isOn ? 'green' : 'grey'}>ON</StyledIndicator>
            <StyledIndicator onClick={() => props.changeIsOn(false)} bgc={!props.isOn ? 'red' : 'grey'}>OFF</StyledIndicator>
            <StyledCircle bgc={props.isOn ? 'green' : 'red'}></StyledCircle>
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