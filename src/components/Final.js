import React from 'react'
import styled from 'styled-components';
import { Container, Title, Text } from '../styles';
import Social from './Social';

const FooterWrapper = styled.footer`
    background-color: #f97057;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 80px;
    height: 60vh;
    @media only screen and (max-width: 800px) {
        align-items: center;
        height: 100vh;
        padding: 20px;
    }
`

const Footer = () => {
    return (
        <FooterWrapper id="contact">
            <Container data-aos="fade-right">
                <Title>Let's Talk!</Title>
                <Text data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement="top-bottom">Feel free to contact me if you are interested in working on a project together.</Text>
                <Social data-aos="fade-right" data-aos-delay="300" data-aos-anchor-placement="top-bottom" reverse/>
            </Container>
        </FooterWrapper>
    )
}

export default Footer
