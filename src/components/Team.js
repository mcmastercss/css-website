import React, { useState, useEffect } from 'react'
import styled from "styled-components";

import { device } from "../device";
import ContentWrapper from "./ContentWrapper";

import placeholder from "../assets/team/placeholder.jpg";
import ali from "../assets/team/ali.jpg";
import jerry from "../assets/team/jerry.jpg";
import khizar from "../assets/team/khizar.jpg";
import nida from "../assets/team/nida.jpg";

const TeamContentWrapper = styled(ContentWrapper)`
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    column-gap: 100px;
    row-gap:50px;
    margin-bottom: 50px;
`;

const Person = styled.img`
    width: 200px;
    border-radius: 49%;
    margin-bottom: 10px;
`;

const PersonContainer = styled.div`
    text-align: center;
`;

const Name = styled.p`
    font-size: 1.1em;
    font-weight: 600;
`;

const Position = styled.p`
    font-size: 0.9em;
    font-weight: 400;
    font-style: italic;
`;

const Title = styled.h1`
    font-size: 2.5em;
    text-align: center;
    margin-bottom: 60px;
`;

const Team = () => (
    <div>
         <Title>Our Team</Title>
    <TeamContentWrapper>
       
        <PersonContainer>
            <Person src={nida}/>
            <Name>Nida Nasir</Name>
            <Position>President</Position>
        </PersonContainer>
        <PersonContainer>
            <Person src={ali}/>
            <Name>Ali Shahpurwala</Name>
            <Position>Vice President</Position>
        </PersonContainer>
        <PersonContainer>
            <Person src={khizar}/>
            <Name>Khizar Siddiqui</Name>
            <Position>Director of Marketing</Position>
        </PersonContainer>
        <PersonContainer>
            <Person src={placeholder}/>
            <Name>Naga Sasi Dhar</Name>
            <Position>Director of Administration</Position>
        </PersonContainer>
        <PersonContainer>
            <Person src={placeholder}/>
            <Name>Omar Alkersh</Name>
            <Position>Director of Academics</Position>
        </PersonContainer>
        <PersonContainer>
            <Person src={placeholder}/>
            <Name>Sammy Dods</Name>
            <Position>Director of Student Affairs</Position>
        </PersonContainer>
        <PersonContainer>
            <Person src={placeholder}/>
            <Name>Ibtehaaj Cheema</Name>
            <Position>Director of Finance</Position>
        </PersonContainer>
        <PersonContainer>
            <Person src={jerry}/>
            <Name>Jerry Li</Name>
            <Position>Director of Technology</Position>
        </PersonContainer>
    </TeamContentWrapper>
    </div>
);

export default Team;