import React from 'react'
import Hello from './Hello';
import styled from 'styled-components';
import { Container, slideInAnim, Button } from '../styles';
import Social from './Social';

const HeroContainer = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 50px;
    
`

const Greet = styled.h1`
    font-size: 4rem;
    opacity: 0;
    color: #2d2d2d;
    animation: ${slideInAnim} 0.5s ease-in-out 0.1s forwards;
    @media only screen and (max-width: 800px){
        font-size: 2rem;
    }
`
const Intro = styled.p`
    font-size: 1.3rem;
    color: #a7a7a7;
    margin: 20px 0;
    opacity: 0;
    animation: ${slideInAnim} 0.5s ease-in 0.2s forwards;
    @media only screen and (max-width: 800px) {
        font-size: 1rem;
    }

    a {
        color: #a7a7a7;
    }
`
const Btn = styled(Button)`
    opacity: 0;
    animation: ${slideInAnim} 0.5s ease-in 0.4s forwards;
`


const Hero = (props) => {
    return (
            <Container>
                <HeroContainer>
                    <Hello />
                    <Greet>I'm Ajesh</Greet>
                    <Intro>Azure App Service Support Engineer <a href="https://microsoft.com">@Microsoft</a></Intro>
                    <Social />
                    <Btn href="#about">Learn More</Btn>
                </HeroContainer>
            </Container>
    )
}

export default Hero
