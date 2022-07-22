import React from "react";
import Buttons from "./Buttons";
import { NavLink } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";

const BasketContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 700px;
    background-color: #d1e6f0;
    margin: 30px;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 2px 2px 0px 0px #c0c0c0;
    @media (max-width: 450px) {
        width: 350px;
    }
    h2 {
        font-weight: 500;
        width: 100%;
        border-bottom: 1px solid black;
        padding-bottom: 10px;
    }
`;
const BasketBodyWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
const EmptyCartWrapper = styled.div`
    margin: 20px;
    font-size: 1.1rem;
`;
const BasketItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 660px;
    height: 80px;
    margin-top: 10px;
    border-bottom: 1px solid gray;
    img {
        width: 50px;
        height: 50px;
        border-radius: 5px;
    }
    @media (max-width: 450px) {
        display: flex;
        flex-direction: column;
        width: 300px;
        padding-bottom: 10px;
        height: auto;
    }
`;
const ProductPrice = styled.div`
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 450px){
        margin: 10px 0;
    }
`;
const ProductImageWrapper = styled.div`
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ShowPriceWrapper = styled.div`
    margin-top: 20px;
    font-size: 1.2rem;
    margin-left: 20px;
`;
const ProductNameWrapper = styled.div`
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 450px){
        width: 50%;
        margin: 10px 0; 
    }
`;
const BackToProductWrapper = styled.div`
    align-self: end;
    margin-right: 40px;
    a{
        color: blue;
        display: flex;
        text-align: center;
        align-items: center;
        span{
            margin-left: 5px;
            margin-bottom: 2px;
        }
    }
    @media (max-width: 450px){
        margin-right: 5px;
    }
`;
const PurchaseWrapper = styled.div`
    display: flex;
    align-self: center;
    background-color: orange;
    border: none;
    padding: 10px;
    border-radius: 5px;
    transition: all 0.3s ease;
    a{
        color: white;
    }
    &:hover{
        background-color: orangered;
    }
    @media (max-width: 450px){
        margin: 10px 0;
    }
`;

const Basket = ({ cartItems, addProductFunc, removeProductFunc }) => {
    const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0);
    const empty = (<EmptyCartWrapper> Basket is empty !</EmptyCartWrapper>);
    const showPrice = (<ShowPriceWrapper>Total Price : ${itemsPrice}</ShowPriceWrapper>)
    const content = (
        <div>{cartItems.map((item) => (
            <BasketItemWrapper key={item.id}>
                <ProductImageWrapper><img src={item.image} alt="this is a product" /></ProductImageWrapper>
                <ProductNameWrapper>{item.name}</ProductNameWrapper>
                <Buttons addProductFunc={addProductFunc} removeProductFunc={removeProductFunc} item={item} />
                <ProductPrice>
                    ${item.price.toFixed(2)}
                </ProductPrice>
            </BasketItemWrapper>
        ))}
        </div>
    );
    return (
        <BasketBodyWrapper>
            <BasketContainerWrapper>
                <h2> Cart Items </h2>
                {cartItems.length === 0 ? empty : content}
                {cartItems.length === 0 ? null : showPrice}
                <PurchaseWrapper>
                    <NavLink to="/sign-in">Purchase</NavLink>
                </PurchaseWrapper>
                <BackToProductWrapper>
                    <NavLink to="/products"> <BiArrowBack /><span>Back to Products</span></NavLink>
                </BackToProductWrapper>
            </BasketContainerWrapper>
        </BasketBodyWrapper>
    );
};

export default Basket;
