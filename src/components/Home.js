import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import img from "../assets/home-bg.jpeg";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 80px;
    background-image: url(${img});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 500px;
    align-items: flex-start; 
    p {
        width: 700px;
        word-wrap: break-word;
        font-weight: 500;
        font-size: 1.05rem;
        @media (max-width: 450px){
            width: auto;
        }
    }
    h2 {
        margin-bottom: 30px;
    }
    @media (max-width: 450px) {
        background-image: url("https://wallpaper.dog/large/10828.jpg");
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        padding: 10px;
        margin: 0;
    }
`;
const LinkToProductsWrapper = styled.div`
    align-self: flex-end;
    font-size: 1.5rem;
    font-weight: 600;
        a{
            margin: 0 10px;
            transition: all 0.5s ease;
            border-radius: 10px;
            padding: 3px;
            color: #005691;
            @media (max-width: 450px) {
                margin: 0;
            }
            &:hover {
                background-color: #005691;
                color: white;
             }
 }
`;

const Home = () => {
    return (
        <HomeContainer>
            <h2>About Website</h2>
            <p>
                Hello , my name is seyed reza zargar.
                <br />
                Welcome to My Website.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum ex illum minima odit consequuntur, sit nemo expedita iure, mollitia maxime corporis, id quae consequatur repudiandae. Ratione adipisci ipsa accusantium!
            </p>
            <br />
            <p>
                Consectetur ut esse id nisi proident ea consectetur exercitation. Consectetur duis velit ea commodo consequat velit ut ad. In nisi laborum adipisicing ad do tempor deserunt anim eu id esse exercitation velit. Qui ipsum est eiusmod commodo esse ipsum cillum veniam. Nostrud mollit ex et sit esse consequat et ullamco minim culpa veniam tempor elit tempor. Quis dolor ipsum labore tempor nisi ut esse veniam commodo duis et commodo Lorem.
            </p>
            <br />
            <p>
                Id reprehenderit voluptate sint ipsum consectetur adipisicing ipsum adipisicing ex magna occaecat Lorem cillum ut. Commodo exercitation labore esse id excepteur enim incididunt incididunt. Ex duis ut deserunt tempor dolor sunt qui voluptate sint in voluptate officia magna reprehenderit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, perspiciatis!
            </p>
            <br />
            <p>
                Voluptate laboris incididunt ea officia elit ullamco laborum laborum adipisicing nulla ipsum. Eiusmod commodo anim ut occaecat veniam irure cupidatat magna ut tempor deserunt esse aliqua. Mollit enim quis dolor magna sunt et voluptate excepteur tempor fugiat laborum quis anim consequat. Non aute anim culpa ad velit ullamco sint consequat excepteur nulla cupidatat. Voluptate tempor ipsum quis quis.
            </p>
            <br />
            <br />
            <LinkToProductsWrapper> Click<NavLink to="/products"> Here  </NavLink> To See All Products...</LinkToProductsWrapper>
        </HomeContainer >
    );
};

export default Home;
