import React from "react";
import Product from "./Product";
import productsList from "./products-list";
import { BiShoppingBag } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ProductContainerWrapper = styled.div`
    width: 100%;
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #eef4fe;
    div{
        flex-basis: 30%;
    }
`;
const BasketIconWrapper = styled.div`
    width: 60px;
    height: 60px;
    background-color: rgb(238, 38, 38);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 50%;
    position: fixed;
    bottom: 50px;
    right: 50px;
    transition: all 0.3s ease;
    &:hover{
        background-color: rgb(173, 11, 11);
        font-size: 1.1rem;
    }
    @media (max-width: 450px) {
        width: 45px;
        height: 45px;
        bottom: 40px;
        right: 40px;
    }
`;

const CartItemLengthWrapper = styled.div`
    position: absolute;
    color: white;
    @media (max-width: 450px) {
        position: absolute;
        color: white;
        font-size: 0.8rem;
    }
`;

const CartItemIcon = styled.div`
    position: absolute;
    bottom: px;
    right: px;
    font-size: 2.5rem;
    @media (max-width: 450px) {
        position: absolute;
        font-size: 2rem;
    }
`;

const Products = ({ addProductFunc, removeProductFunc, cartItems }) => {
    const basketIcon = (
        <NavLink to="/basket">
            <BasketIconWrapper>
                <CartItemIcon>
                    <BiShoppingBag />
                </CartItemIcon>
                <CartItemLengthWrapper>
                    {cartItems.length}
                </CartItemLengthWrapper>
            </BasketIconWrapper>
        </NavLink >
    );
    return (
        <ProductContainerWrapper>
            {
                productsList.map((product, index) =>
                    <Product
                        key={index}
                        product={product}
                        addProductFunc={addProductFunc}
                        removeProductFunc={removeProductFunc}
                        cartItems={cartItems}
                    />)
            }
            {
                cartItems.length === 0
                    ? null
                    : basketIcon
            }
        </ProductContainerWrapper>
    );
};

export default Products;
