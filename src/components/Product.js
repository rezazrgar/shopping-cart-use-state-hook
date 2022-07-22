import React from "react";
import Buttons from "./Buttons";
import { NavLink } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import styled from "styled-components";

const ProductContainer = styled.div`
    background-color: #d1e6f0;
    margin: 30px;
    padding: 20px;
    text-align: center;
    border-radius: 20px;
    transition: all 0.3s ease;
    img {
        width: 250px;
        height: 250px;
        border-radius: 10px;
        margin: 10px 0;
    }
    &:hover{
        background-color: #bcd4e0;
    }
    p {
        margin: 15px 10px;
        text-align: start;
        display: flex;
    }
`;
const AddToCartButton = styled.button`
    display: flex;
    padding: 12px;
    align-self: center;
    border: none;
    border-radius: 8px;
    background-color: #004A7C;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        cursor: pointer;
        background-color: rgb(0, 89, 13);
        color: white;
    }
`;
const ButtonsContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: felx-start;
`
const LinkToBasket = styled.div`
    margin-left: 150px;
    @media (max-width: 450px) {
        margin-left: 70px;
    }
    a{  
        display: flex;
        align-items: center;
        color: blue;
        span {
            margin-right: 5px;
        }
    }
`;

const Product = ({ product, addProductFunc, removeProductFunc, cartItems }) => {
    const addToBasketButton = (
        <AddToCartButton className="add-to-cart-button" onClick={() => addProductFunc(product)}>
            Add To Basket </AddToCartButton>
    );
    const itemForButton = cartItems.find(item => item.id === product.id);
    const item = cartItems.some(item => item.id === product.id);
    const basket = (
        <LinkToBasket><NavLink to="/basket" ><span>View Basket</span><BiShoppingBag /></NavLink ></LinkToBasket>
    )
    return (
        <ProductContainer>
            <h3>{product.name}</h3>
            <img src={product.image} alt="products images" />
            <h3><span>price : $</span>{product.price}</h3>
            <p>{product.note}</p>
            <ButtonsContainer>
                {
                    item === false
                        ? addToBasketButton
                        : <Buttons
                            item={itemForButton}
                            addProductFunc={addProductFunc}
                            removeProductFunc={removeProductFunc} />
                }
                {
                    item === false
                        ? null
                        : basket
                }
            </ButtonsContainer>
        </ProductContainer>
    );
};

export default Product;
