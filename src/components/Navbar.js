import React from "react";
import styled from "styled-components";
import { device } from "../device";

import ContentWrapper from "./ContentWrapper";

import fireball from "../assets/images/fireball.png";

import {FaInstagram, FaFacebookF, FaDiscord, FaLinkedin} from "react-icons/fa";

const NavbarContainer = styled.div`
    position: fixed;
	width: 100%;
	box-shadow: 0 1px 3px rgba(0,0,0,.2);
	background-color: #fff;
`;

const NavbarContentWrapper = styled(ContentWrapper)`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
    justify-content: space-between;
`;

const NavButtons = styled.div`
    display: flex;
	align-items: center;
    column-gap: 15px;
`;

const Social = styled.div`
    display: flex;
	align-items: center;
    column-gap: 15px;
`;

const Fireball = styled.img`
    width: 40px;
    margin-right: 10px;
`;

const Navitem = styled.a`
    margin-right: 7px;
    font-size: 1.1em;
`;



const Navbar = () => (
    <NavbarContainer>
        <NavbarContentWrapper paddingTopBot="10px">
            <NavButtons>
                <Fireball src={fireball}/>
                {/* <Navitem>Home</Navitem>
                <Navitem>About</Navitem> */}
            </NavButtons>
            <Social>
                <a href="https://instagram.com/mcmastercs">
                <FaInstagram/>
                </a>
                <a href="https://facebook.com/mcmastercs">
                <FaFacebookF/>
                </a>
                <a href="https://discord.gg/YKPN7wX">
                <FaDiscord/>
                </a>
                <a href="https://www.linkedin.com/company/mcmastercs/">
                <FaLinkedin/>
                </a>
            </Social>
        </NavbarContentWrapper>
    </NavbarContainer>
);

export default Navbar;