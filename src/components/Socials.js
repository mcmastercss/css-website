import React from "react";
import styled from "styled-components";
import InstagramLogo from "../assets/images/instagram.svg";
import DiscordLogo from "../assets/images/discord.svg";
import LinkedinLogo from "../assets/images/linkedin.svg";
import EmailLogo from "../assets/images/email.svg";
import { device } from "../device";

const SocialContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4em 0;
    @media ${device.mobileS} {
        font-size: 8px;
    }
    @media ${device.mobileS} {
        font-size: 10px;
    }
    @media ${device.threshold} {
        font-size: 16px;
    }
`;

const SocialCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    background: #5b87fd;
    color: white;
    padding: 0.5em 0.7em;
    border-radius: 3em;
    width: fit-content;
    font-weight: 600;
    font-size: 1.4em;
`;
const InstagramLink = styled.a`
    text-decoration: none;
`;
const DiscordLink = styled.a`
    text-decoration: none;
`;
const LinkedinLink = styled.a`
    text-decoration: none;
`;
const EmailLink = styled.a`
    text-decoration: none;
`;

const Instagram = styled.img`
    width: 1.4em;
    height: auto;
`;
const Discord = styled.img`
    width: 1.4em;
    height: auto;
`;
const Linkedin = styled.img`
    width: 1.2em;
    height: auto;
`;
const Email = styled.img`
    width: 1.8em;
    height: auto;
`;

const Socials = () => (
    <SocialContainer>
        <SocialCard>
            Reach us @{" "}
            <InstagramLink href="https://www.instagram.com/mcmastercss/">
                <Instagram src={InstagramLogo} alt="Instagram Logo" />
            </InstagramLink>
            <DiscordLink href="https://discord.gg/YKPN7wX">
                <Discord src={DiscordLogo} alt="Discord Logo" />
            </DiscordLink>
            <LinkedinLink href="https://www.linkedin.com/company/mcmastercs">
                <Linkedin src={LinkedinLogo} alt="LinkedIn Logo" />
            </LinkedinLink>
            <EmailLink href="mailto:mcss@mcmaster.ca">
                <Email src={EmailLogo} />
            </EmailLink>
        </SocialCard>
    </SocialContainer>
);

export default Socials;
