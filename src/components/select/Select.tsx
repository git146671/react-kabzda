import {type} from "node:os";
import styled from "styled-components";
import {useState} from "react";
import {func} from "prop-types";

type ItemType = {
    title: string;
    value: any;
}

type SelectPropsType = {
    value: any;
    onChange: (value: any) => void;
    items: ItemType[];
}


export function Select(props: SelectPropsType) {
   // const selectedValue = props.items.find(i => i.value === props.value);

    let [isItemsVisible, setIsItemsVisible] = useState<boolean>(false)
    let [headerTitle, setHeaderTitle] = useState<string>(props.items[0].title);

    function itemClickHandler(itemTitle: string) {
        setHeaderTitle(itemTitle);
        setIsItemsVisible(false);
    }

    return (
        <StyledContainer>
            <h3 onClick={() => setIsItemsVisible(!isItemsVisible)}>{headerTitle}</h3>
            <StyledItemsWrapper isItemsVisible={isItemsVisible}>
                {props.items.map(i => <StyledItem onClick={()=>itemClickHandler(i.title)}>{i.title}</StyledItem>)}
            </StyledItemsWrapper>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    border: 1px solid black;
    width: 500px;
  //  padding: 5px;
`

type StyledItemsWrapperPropsType = {
    isItemsVisible: boolean;
}

const StyledItemsWrapper = styled.div<StyledItemsWrapperPropsType>`
    border: 1px solid black;
    position: absolute; 
    width: 500px;
    display: ${props => props.isItemsVisible ? "block" : "none"};
   // padding: 5px;
`
const StyledItem = styled.div`
    
    &:hover {
        background-color: orangered;
    }
    
    `