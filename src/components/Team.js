import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { device } from "../device";
import ContentWrapper from "./ContentWrapper";

import omar from "../assets/team/omar.jpg";
import geon from "../assets/team/geon.jpg";
import haley from "../assets/team/haley.jpg";
import youcef from "../assets/team/youcef.jpg";
import insiyah from "../assets/team/insiyah.jpg";
import nihal from "../assets/team/nihal.jpg";
import proyetei from "../assets/team/proyetei.jpg";
import arian from "../assets/team/arian.jpg";
import placeholder from "../assets/team/placeholder.jpg";
import arruran from "../assets/team/arruran.jpg";
import haq from "../assets/team/haq.jpg";
import esha from "../assets/team/esha.jpg";
import sohaib from "../assets/team/sohaib.jpg";
import khai from "../assets/team/khai.jpg";

const TeamContentWrapper = styled(ContentWrapper)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    column-gap: 100px;
    row-gap: 50px;
    margin-bottom: 50px;
`;

const Person = styled.img`
    width: 150px;
    border-radius: 50%;
    margin-bottom: 10px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.4);
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
const TitleContainer = styled.div`
    margin-bottom: 80px;
`;

const TitleDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 2.5em;
`;

const CurvedUnderline = styled.div`
    background-color: #5b87fd;
    height: 10px;
    border-radius: 20px;
`;

const Team = () => (
    <div>
        <TitleDiv>
            <TitleContainer>
                <Title>Our Team</Title>
                <CurvedUnderline></CurvedUnderline>
            </TitleContainer>
        </TitleDiv>
        <TeamContentWrapper>
            <PersonContainer>
                <Person src={omar} />
                <Name>Omar Alkersh</Name>
                <Position>President</Position>
            </PersonContainer>
            <PersonContainer>
                <Person src={arian} />
                <Name>Arian Ahmadinejad</Name>
                <Position>Technical Manager</Position>
            </PersonContainer>
            <PersonContainer>
                <Person src={geon} />
                <Name>Geon Youn</Name>
                <Position>Director of Student Affairs</Position>
            </PersonContainer>
            <PersonContainer>
                <Person src={nihal} />
                <Name>Nihal Singh</Name>
                <Position>Director of Academics</Position>
            </PersonContainer>
            <PersonContainer>
                <Person src={proyetei} />
                <Name>Proyetei Akanda</Name>
                <Position>Director of Marketing</Position>
            </PersonContainer>
            <PersonContainer>
                <Person src={youcef} />
                <Name>Youcef Boumar</Name>
                <Position>Academic Manager</Position>
            </PersonContainer>
            <PersonContainer>
                <Person src={haley} />
                <Name>Haley Johnson</Name>
                <Position>Social Media Manager</Position>
            </PersonContainer>
            <PersonContainer>
                <Person src={insiyah} />
                <Name>Insiyah Ujjainwala</Name>
                <Position>Social Media Manager</Position>
            </PersonContainer>
            <PersonContainer>
                <Person src={esha} />
                <Name>Esha Pisharody</Name>
                <Position>Director of Administration</Position>
            </PersonContainer>
            <PersonContainer>
                <Person src={arruran} />
                <Name>Arruran Kamalavannan</Name>
                <Position>Director of Finance</Position>
            </PersonContainer>
            <PersonContainer>
                <Person src={sohaib} />
                <Name>Sohaib Ahmed</Name>
                <Position>Director of Marketing</Position>
            </PersonContainer>
            <PersonContainer>
                <Person src={haq} />
                <Name>Mohammed Haq</Name>
                <Position>Graphics Designer</Position>
            </PersonContainer>
            <PersonContainer>
                <Person src={khai} />
                <Name>Khai</Name>
                <Position>Graphics Designer</Position>
            </PersonContainer>
        </TeamContentWrapper>
    </div>
);

export default Team;
