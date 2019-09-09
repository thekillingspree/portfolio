import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { slideInAnim } from '../styles';


const Icon = styled(FontAwesomeIcon)`
    margin-right: 20px;
    opacity: 0;
    color: #2d2d2d;
    transition: color, opacity, transform  0.4s ease;
    animation: ${slideInAnim} 0.5s ease-in-out 0.3s forwards;
    &:hover {
        cursor: pointer;
        color: #f97057;
    }

    .reverse & {
        color: #fff;
        font-size: 3rem !important;
        &:hover {
            color: #fff;
        }
        @media only screen and (max-width: 800px) {
            font-size: 2rem !important;
        }
    }
`


const Social = ({reverse}) => {
    return (
        <section className={reverse && 'reverse'}>
            <a href="http://github.com/thekillingspree" target="_blank" rel="noopener noreferrer">
                <Icon icon={faGithubSquare} size="2x"/>
            </a>
            <a href="https://www.linkedin.com/in/ajeshds" target="_blank" rel="noopener noreferrer">
                <Icon icon={faLinkedin} size="2x"/>
            </a>
            <a href="https://twitter.com/thekillingspre3" target="_blank" rel="noopener noreferrer">
                <Icon icon={faTwitterSquare} size="2x"/>
            </a>
            <a href="http://instagram.com/thekillingspree" target="_blank" rel="noopener noreferrer">
                <Icon icon={faInstagram} size="2x"/>
            </a>
            <a href="mailto:iam@ajesh.dev" target="_blank" rel="noopener noreferrer">
                <Icon icon={faEnvelope} size="2x"/>
            </a>
        </section>
    );
}

export default Social
