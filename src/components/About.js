import React from 'react';
import styled from 'styled-components';
import { Container, ReverseButton, Title, Text, Subtitle } from '../styles';


const AboutWrapper = styled.section`
    min-height: 100vh;
    position: relative;
    display: flex;
    padding: 80px 30px;
    flex-direction: column;
    justify-content: center ;
    &::selection {
        background-color: #fffffffc !important;
        color: #f97057 !important;

    }
`
const AboutBG = styled.div`
    background-color: #f97057;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
`





const About = props => {
    return (
        <section id="about">
            <AboutWrapper>
                <Container style={{zIndex: 1}}>
                    <Title data-aos="fade-right">About Me</Title>
                    <Text data-aos-delay="100" data-aos="fade-right">
                    I'm a Support Engineer at the Azure App Service team at Microsoft. 
                    <br/>
                    I'm passionate about creating web apps and native mobile apps with beautiful UI.
                    </Text>
                    <Title data-aos="fade-right">Skills</Title>
                    <Subtitle data-aos="fade-right">Front-End</Subtitle>
                    <Text data-aos="fade-right">
                       HTML5, CSS3, Sass, Javascript (ES6), React, React Native 
                    </Text>
                    <Subtitle data-aos="fade-right" data-aos-anchor-placement="top-bottom">Back-End</Subtitle>
                    <Text data-aos="fade-right" data-aos-anchor-placement="top-bottom">
                        Node.js, Express, GraphQL, MongoDB, SQL, Python, Flask
                    </Text>
                    <Subtitle data-aos="fade-right" data-aos-anchor-placement="top-bottom">Tools</Subtitle>
                    <Text data-aos="fade-right" data-aos-anchor-placement="top-bottom">
                        Azure, Docker, Adobe Illustrator, Adobe XD
                    </Text>
                    <ReverseButton data-aos-delay="100" href="#projects">My Projects</ReverseButton>
                </Container>
                <AboutBG />
            </AboutWrapper>
        </section>
    )
}

export default About
