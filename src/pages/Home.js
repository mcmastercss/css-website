import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Socials from "../components/Socials";

const LandingContainer = styled.section`
    display: block;
`;

const FooterWrapper = styled.div`
    width: 100%;
    height: 50px;
    padding: 10px;
    background: black;
    text-align: center;
`;
const Copyright = styled.p`
    color: grey;
`;

function getYear() {
    let d = new Date();
    let currentYear = d.getFullYear();
    return (
        // <Copyright>@ {currentYear} Copyright: McMaster University</Copyright>
        currentYear
    );
}
let currentYear = getYear();
const Home = () => (
    <LandingContainer>
        <Showcase />
        <Socials />
        <Team />
        <FooterWrapper>
            <Copyright>
                @ {currentYear} Copyright: McMaster University
            </Copyright>
        </FooterWrapper>
    </LandingContainer>
);

export default Home;
