import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import MenuItems from "./MenuItems";
import styled from "styled-components";

const BurguerWrapper = styled.div`
    font-size: ${({ open }) => open ? "3rem" : "1.7rem"};
    color: ${({ open }) => open ? "yellow" : "white"};
    transition: all 0.5s ease;
    z-index: 10;
    position: fixed;
    right: 10px;
    top: 5px;
`;

const Hamburger = () => {
    const [open, setOpen] = useState(false);
    const setOpenHandler = (state) => {
        setOpen(state);
    }
    return (
        <>
            <BurguerWrapper open={open} onClick={() => setOpen(!open)}>
                {open ? <BiX /> : <BiMenu />}
            </BurguerWrapper>
            <MenuItems setOpenHandler={setOpenHandler} open={open} />
        </>
    );

};

export default Hamburger;
