import React from "react";
import { BiTrash } from "react-icons/bi";
import styled from "styled-components";

const ButtonsContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const PlusButtonWrapper = styled.button`
    width: 30px;
    height: 30px;
    color: white;
    background-color: rgb(41, 147, 9);
    border: none;
    border-radius: 8px;
    margin-right: 10px;
    transition: all 0.3s ease;
    &:hover{
        background-color: green;
        cursor: pointer;
    }
`;
const RemoveButtonWrapper = styled.button`
    width: 30px;
    height: 30px;
    color: white;
    background-color: rgb(244, 43, 43);
    border: none;
    border-radius: 8px;
    margin-left: 10px;
    transition: all 0.3s ease;
    &:hover{
        background-color: rgb(210, 22, 22);
        cursor: pointer;
    }
`;

const Buttons = ({ addProductFunc, removeProductFunc, item }) => {
    return (
        <>
            <ButtonsContainer>
                <PlusButtonWrapper className="plus-button" onClick={() => addProductFunc(item)}>
                    +
                </PlusButtonWrapper>
                <span>{item.qty}</span>
                <RemoveButtonWrapper className="remove-button" onClick={() => removeProductFunc(item)}>
                    {item.qty === 1 ? <BiTrash /> : '-'}
                </RemoveButtonWrapper>
            </ButtonsContainer>
        </>
    )
};

export default Buttons;
