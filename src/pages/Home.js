import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import Team from "../components/Team";
import Footer from "../components/Footer";

const LandingContainer = styled.section`
    display: block;
`;

const FooterWrapper = styled.div`
    width:100%;
    height:50px;
    padding: 10px;
    background: black;
    text-align: center;
    
`;
const Copyright = styled.p`
    color: grey;    
`;

const Home = () => (
    <LandingContainer>
        <Navbar/>
        <Showcase />
        <Team />
        <FooterWrapper>
            <Copyright>
                @ 2022 Copyright: McMaster University 
            </Copyright>
        </FooterWrapper>
    </LandingContainer>
)

export default Home;