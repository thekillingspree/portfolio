import React, { Component } from 'react';
import styled from 'styled-components';
import { slideInAnim } from '../styles';

const Links = styled.span`
    display: flex;
    align-items:center;
    transition: all 0.5s ease;
    a {
        margin-right: 20px;
        text-decoration: none;
        color: #2d2d2d;
    }
    @media only screen and (max-width: 800px) {
        display: none;
    }
`

const Hamburger = styled.section`
    display: none;
    transition: all 0.5s ease;
    width: 30px;
    flex-direction: column;
    justify-content: space-evenly;
    height: 30px;
    
    span{
        background-color: #2d2d2d;
        width: 100%;
        height: 2px;
        transition: all 0.2s ease;
    }
    .top {
    transform: ${props => props.active ? 'rotateZ(45deg) translate(5px, 6px)' : 'rotateZ(0) translate(0,0)'};
    }
    .mid {
    transform: ${props => props.active ? 'scale(0)' : 'scale(1)'};
    }
    .bottom {
    transform: ${props => props.active ? 'rotateZ(-45deg) translate(5px, -6px)' : 'rotateZ(0) translate(0,0)'};
    }
    @media only screen and (max-width: 800px) {
        display: flex;
    }
`

const MobileMenu = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        font-size: 1.5rem;
        text-decoration: none;
        margin: 20px 0;
        opacity: 0;
        color: #2d2d2d;
    }

`

const NavContent = styled.nav`
    width: 100vw;
    display: flex;
    height: 68px;
    align-items: center;
    background-color: #fff;
    transition: opacity 0.3s ease;
    z-index: 10;
    position: fixed;
    top: 0;
    justify-content: space-between;
    padding-right: 20px;
`

const Nav = styled.header`
    width: 100vw;
    height: ${props => props.active ? '100vh' : '68px'};
    display: flex;
    flex-direction: column;
    background: ${props => props.show ? '#fff' : props.active && '#fff'};
    z-index: 10;
    position: fixed;
    top: 0;
    transition: height 0.3s ease;
    justify-content: column;

    ${NavContent} {
        box-shadow: ${props => props.active ? 'none' : '0 3px 9px 0px #35353530'};
        opacity: ${props => props.show ? 1 : props.active ? 1 : 0};
    }

    ${MobileMenu} {
        display: ${props => props.active ? 'flex' : 'none'};
        a {
        animation: ${slideInAnim} 0.4s ease-in-out forwards;
        }
    }
`


const Logo = styled.a`
    color: #2d2d2d;
    text-decoration: none;
    font-size: 2rem;
    height: 100%;
    width: 100%;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 68px;
    img {
        height: 50%;
        width: 50%;
    }
`



class Navbar extends Component {

    state = {
        show: false,
        menuOpen: false
    }

    componentDidMount() {
        const aboutSection = document.querySelector('#about');
        
        window.addEventListener('scroll', () => {
            const show = aboutSection.getBoundingClientRect().top <= 64;
            if (show) this.setState({show})
            else this.setState({show: false})
        })
    }

    handleHam = () => {
        const {menuOpen} = this.state;
        this.setState({menuOpen: !menuOpen});
    }

    render() {
        const {show, menuOpen} = this.state;
        return (
            <Nav show={show} active={menuOpen}>
                <NavContent>
                    <Logo onClick={() => this.setState({menuOpen: false})} href="#">
                        <img src="img/logo.png" alt="logo"/>
                    </Logo>
                    <Links>
                        <a href="#about">ABOUT</a>
                        <a href="#projects">PROJECTS</a>
                        <a href="#contact">CONTACT</a>
                        <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://resume.ajesh.dev">
                            RESUME
                        </a>
                    </Links>
                    <Hamburger active={menuOpen} onClick={this.handleHam}>
                        <span className="top">&nbsp;</span>
                        <span className="mid">&nbsp;</span>
                        <span className="bottom">&nbsp;</span>
                    </Hamburger>
                </NavContent>
                <MobileMenu> 
                    <a
                    onClick={() => this.setState({menuOpen: false})} 
                    href="#about">
                        ABOUT
                    </a>
                    <a
                    style={{animationDelay: '100ms'}} 
                    onClick={() => this.setState({menuOpen: false})} 
                    href="#projects">
                        PROJECTS
                    </a>
                    <a
                    style={{animationDelay: '200ms'}} 
                    onClick={() => this.setState({menuOpen: false})} 
                    href="#contact">
                        CONTACT
                    </a>
                    <a
                    style={{animationDelay: '200ms'}} 
                    onClick={() => this.setState({menuOpen: false})} 
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://resume.ajesh.dev">
                        RESUME
                    </a>
                </MobileMenu>
            </Nav>
        )
    }
}

export default Navbar;
