import styled from "styled-components";
import React from "react";

const FooterWrapper = styled.div`
    width: 100%;
    height: 100px;
    background: black;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <p>@ 2022 Copywrite: McMaster University</p>
        </FooterWrapper>
    );
};

export default Footer;
