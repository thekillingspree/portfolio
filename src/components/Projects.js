import React from 'react';
import styled from 'styled-components';
import { Title, Container } from '../styles';
import projects from '../constants/projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectsContainer = styled.section`
    min-height: 100vh;
    padding: 108px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const ProjectsWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`

const ProjectCardContent = styled.article`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    padding: 40px;
    h2 {
        margin: 0 0 20px;
    }
    .p {
        margin: 0 0 30px;
        color: #a7a7a7;
        font-size: 1rem;
    }
    @media only screen and (max-width: 900px) {
        position: static;
        width: 100%;
    }
`

const ProjectCard = styled.article`
    width: 100%;
    position: relative;
    margin: 20px;
    border-radius: 4px;
    min-height: 400px;
    overflow: hidden;
    transition-property: opacity, transform, box-shadow !important;
    transition: box-shadow 0.3s ease;
    box-shadow: 0px 4px 12px -5px #2d2d2d47, 0px 0px 14px 1px #2d2d2d0d;
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 30%;
        height: 100%;
        object-fit: cover;
        object-position: 0px;
    }
    &:hover {
        box-shadow: 0px 10px 12px -5px #2d2d2d47, 0px 0px 14px 1px #2d2d2d0d;
    }
    @media only screen and (max-width: 900px) {
        img {
            width: 100%;
            height: 200px;
            position: static;
        }
        display: flex;
        flex-direction: column;
    }
`

const TechContainer = styled.span`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
`

const Tech = styled.p`
    padding: 10px 20px;
    border: 0.8px solid #a7a7a7;
    border-radius: 50px;
    margin-right: 10px !important;
    display: inline-block;
    font-size: 0.8rem;
    color: #a7a7a7 !important;
    @media only screen and (max-width: 900px) {
        margin-top: 10px;
    }

`

const Links = styled.span`
    display: flex;
    flex-wrap: wrap;
`
const LinkBtn = styled.a.attrs(({light}) => ({
    color: light ? '#f97057' : '#fff',
    background: light ? '#fff' : '#f97057',
    shadow: light ? '#b1b1b16e' : '#f970576e',
}))`
    background-color: ${props => props.background};
    color: ${props => props.color};
    padding: 10px 20px;
    margin-right: 30px ;
    text-decoration: none;
    width: 120px;
    text-align: center;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 3px 5px ${props => props.shadow};
    transition: all 0.2s ease;
    &:hover {
        box-shadow: 0px 6px 9px ${props => props.shadow};
        transform: translateY(-1px);
    }
    @media only screen and (max-width: 900px) {
        width: 100%;
        margin: 20px 0 0;
        justify-content:center;
        svg {
            margin-right: 10px;
        }
    }
`

const RenderProject = project => {
    const {title, description, image, tech, link, github, npm} = project;
    return (
        <ProjectCard  data-aos="fade-right">
            <img src={`img/${image}`} alt="screenshot"/>
            <ProjectCardContent>
                <h2>{title}</h2>
                <p className="p">{description}</p>
                <TechContainer>
                    {tech.map(t => <Tech>{t}</Tech>)}
                </TechContainer>
                <Links>
                    {link && <LinkBtn href={link} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faExternalLinkSquareAlt}/>
                        Live
                    </LinkBtn>}
                    {github && <LinkBtn light href={github} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} /> Code
                    </LinkBtn>}
                    {npm && <LinkBtn href={npm} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faNpm} /> NPM
                    </LinkBtn>}
                </Links>

            </ProjectCardContent>
        </ProjectCard>
    )
}

const Projects = () => {
    return (
        <section id="projects">
            <ProjectsContainer>
                    <Container>
                        <Title style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}} variant="light">Projects</Title>
                        <ProjectsWrapper>
                            {projects.map(project => RenderProject(project))}
                        </ProjectsWrapper>
                        <Title style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop:' 20px'}} variant="light">And Many More</Title>
                        <LinkBtn 
                        light 
                        style={{margin: '0 auto', width: '300px'}}
                        href="https://github.com/thekillingspree" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} /> View More on Github
                        </LinkBtn>
                    </Container>
            </ProjectsContainer>
        </section>
    )
}

export default Projects
