import React, { useState } from "react";
import styled from "styled-components";

const SignInWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #eef4fe;
`;
const LoginWrapper = styled.div`
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
`;
const FormWrapper = styled.div`
    position: relative;
    background: #d1e6f0;
    border-radius: 10px;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
`;
const FormInputWrapper = styled.input`
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    border-radius: 5px;
    margin: 15px 0 2px 0;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    &:fucos{
    background: #dbdbdb;
    };
`;
const FormButtonWrapper = styled.button`
    text-transform: uppercase;
    outline: 0;
    background: #005691;
    width: 100%;
    border: 0;
    border-radius: 5px;
    padding: 15px;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
    margin-top: 20px;
    &:active{
        background: #013d65;
    };
`;
const TitleSpanWrapper = styled.div`
    display: block;
    font-size: 60px;
    color: #005691;
    margin-bottom: 30px;
`;
const TextInputSpan = styled.div`
    font-size: 1rem;
    color: #005691;
    margin: 0 0 3px 0;
`;

const SignIn = () => {
    const [usernameInputValue, setUsernameInputValue] = useState("");
    const [passwordInputValue, setPasswordInputValue] = useState("");
    const submitForm = () => {
        setPasswordInputValue("");
        setUsernameInputValue("");
        if (usernameInputValue.length > 8 && passwordInputValue.length > 6) {
            alert(`welcome ${usernameInputValue}`);
        } else {
            alert(` Please enter valid Username Or Password`)
        }
    }
    return (
        <>
            <SignInWrapper>
                <LoginWrapper>
                    <FormWrapper>
                        <TitleSpanWrapper>Welcome</TitleSpanWrapper>
                        <FormInputWrapper onChange={(e) => setUsernameInputValue(e.target.value)}
                            value={usernameInputValue} type="text" placeholder="username" />
                        <TextInputSpan className="span">username must be 8 characters</TextInputSpan>
                        <FormInputWrapper onChange={(e) => setPasswordInputValue(e.target.value)}
                            value={passwordInputValue} type="password" placeholder="password" />
                        <TextInputSpan className="span">password must be 6 characters</TextInputSpan>
                        <FormButtonWrapper onClick={() => submitForm()}>login</FormButtonWrapper>
                    </FormWrapper>
                </LoginWrapper>
            </SignInWrapper>
        </>
    );
};

export default SignIn;
