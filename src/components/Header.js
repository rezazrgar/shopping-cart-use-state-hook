import React from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import MenuItems from "./MenuItems";
import { FaReact } from "react-icons/fa";

const MenuItemsWrapper = styled.div`
    @media (max-width: 450px){
        flex-direction: column;
        display:none;
    }
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
    background-color: #005691;
    color: white;
`;
const HamburgureIcon = styled.div`
    display: none;
    height: 40px;
    width: 100%;
    @media (max-width: 450px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        background-color: #005691;
        color: white;
        font-size: 1.5rem;
    }
`;
const SignInWrapper = styled.div`
    margin-right: 20px;
    font-size: 2.8rem;
`;

const Header = () => {
    return (
        <>
            <HamburgureIcon><div><FaReact /></div><div><Hamburger /></div></HamburgureIcon>
            <MenuItemsWrapper>
                <SignInWrapper>
                    <FaReact />
                </SignInWrapper>
                <MenuItems />
            </MenuItemsWrapper >
        </>
    );
};

export default Header;
