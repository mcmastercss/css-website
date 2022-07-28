import React from "react";
import styled from "styled-components";
import { device } from "../device";

import ContentWrapper from "./ContentWrapper";

import fireball from "../assets/images/logo.svg";

import {
    FaInstagram,
    FaFacebookF,
    FaDiscord,
    FaLinkedin,
} from "react-icons/fa";

const NavbarContainer = styled.div`
    position: fixed;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
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
    width: 50px;
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
                <Fireball src={fireball} />
                {/* <Navitem>Home</Navitem>
                <Navitem>About</Navitem> */}
            </NavButtons>
            <Social>
                <a
                    href="https://www.instagram.com/mcmastercss/"
                    target="_blank"
                >
                    <FaInstagram />
                </a>
                <a href="https://discord.gg/YKPN7wX" target="_blank">
                    <FaDiscord />
                </a>
                <a
                    href="https://www.linkedin.com/company/mcmastercs/"
                    target="_blank"
                >
                    <FaLinkedin />
                </a>
            </Social>
        </NavbarContentWrapper>
    </NavbarContainer>
);

export default Navbar;
