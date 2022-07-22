import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const DivsWrapper = styled.div`
    height: 64px;
    width: 400p;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0 20px;
    @media (max-width: 450px) {
        width: 100%;
        font-size: 1rem;
        justify-content: flex-start;
        border-bottom: 1px solid darkblue;
        padding: 10px;
        font-weight: 400;
        margin: 0;
    }
`;
const NavlinksWrapper = styled.div`
        width: 20%;
        display: flex;
        justify-content: space-between;
        z-index: 1;
        @media (max-width: 450px) {
            justify-content: flex-start;
            align-items: flex-start;
            flex-flow: column nowrap;
            position: fixed;
            top: 0;
            right: 0;
            width: 250px;
            height: 100vh;
            padding: 40px 20px;
            transform: ${({ open }) => open ? "translateX(0)" : "translateX(100%)"};
            background-color: #005691;
            transition: all 0.3s ease;
            margin-top: 20px;
        };
    `;

const MenuItems = ({ open, setOpenHandler }) => {
    return (
        <NavlinksWrapper open={open}>
            <DivsWrapper onClick={() => setOpenHandler(false)}>
                <NavLink style={({ isActive }) => {
                    return ({ color: isActive ? "#FFEA11" : "white" });
                }} to="/" >Home</NavLink>
            </DivsWrapper>
            <DivsWrapper onClick={() => setOpenHandler(false)}>
                <NavLink style={({ isActive }) => {
                    return ({ color: isActive ? "#FFEA11" : "white" });
                }} to="/products" >Products</NavLink>
            </DivsWrapper>
            <DivsWrapper onClick={() => setOpenHandler(false)}>
                <NavLink style={({ isActive }) => {
                    return ({ color: isActive ? "#FFEA11" : "white" });
                }} to="/basket" >Basket</NavLink>
            </DivsWrapper>
            <DivsWrapper onClick={() => setOpenHandler(false)}>
                <NavLink style={({ isActive }) => {
                    return ({ color: isActive ? "#FFEA11" : "white" });
                }} to="/sign-in">Login</NavLink>
            </DivsWrapper>
        </NavlinksWrapper>
    );
};

export default MenuItems;
