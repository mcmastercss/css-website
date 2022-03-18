import React from "react";
import styled from "styled-components";
import { device } from "../device";

import ContentWrapper from "../components/ContentWrapper";

import cssLogo from "../assets/images/cssLogo.png";

const ShowcaseContentWrapper = styled(ContentWrapper)`
    padding-top: 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 100px;
    row-gap: 60px;
`;

const CssLogo = styled.img`
    width: 200px;
    height: 200px;
    margin: 0 100px;
    display: inline-block;
    vertical-align: -25px;
`;

const ShowcaseText = styled.div`
    text-align: left;
    width: 400px;
`;

const Title = styled.h1`
    font-size: 1.9em;
    font-weight: 700;
`;

const Subtitle = styled.h2`
    font-size: 1.2em;
    font-weight: 300;
`;

const Paragraph = styled.p`
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 1.1em;
    font-weight: 300;
`;

const DiscordLink = styled.a`
    font-weight: 500;
    text-decoration: none; 
    color: blue;
`;

const Showcase = () => (
    <ShowcaseContentWrapper paddingTopBot="100px">
        <CssLogo src={cssLogo}/>
        <ShowcaseText>
            <Title>McMaster CS Society</Title>
            <Subtitle>We bring students together</Subtitle>
            <Paragraph>
            Join the McMaster Computer Science Discord server to get notified of our events
             and connect with fellow Computer Science Students!
            </Paragraph>
            <DiscordLink href="https://discord.gg/YKPN7wX">
                Learn More
            </DiscordLink>
        </ShowcaseText>

    </ShowcaseContentWrapper>
);

export default Showcase;