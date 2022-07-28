import React from "react";
import styled from "styled-components";

const SocialContainer = styled.section`
    // display: flex;
    // justify-content: center;
    // align-items: center;
    margin-top: 100px;
    margin-bottom: 100px;
`;

const SocialCard = styled.div`
    background: red;
    width: fit-content;
    margin: 0 
`;

const Socials = () => (
    <SocialContainer>
        <SocialCard>Reach us @ </SocialCard>
    </SocialContainer>
);

export default Socials;
