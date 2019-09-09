import React from 'react'
import styled, {keyframes} from 'styled-components'

const cursorBlink = keyframes`
    0% {
        opacity: 0
    }
    50% {
        opacity: 1
    }
    100%{
        opacity: 0
    }
`

const Cursor = styled.div`
    height: 100%;
    width: 10px;
    font-size: 3rem;
    background-color: #f97057;
    animation: ${props => props.done && cursorBlink} 1s steps(1) infinite;
    @media only screen and (max-width: 800px) {
        width: 4px;
        font-size: 1rem;
    }
`

const HelloWrapper = styled.section`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const Text = styled.h1`
    font-family: 'Courier New', Courier, monospace;
    font-size: 3rem;
    @media only screen and (max-width: 800px) {
        font-size: 1rem;
    }
`


class Hello extends React.Component  {

    state = {
        text: ''
    }


    clear = () => {
        let count = this.state.text.length - 1;
        return new Promise(resolve => {
            const clsInterval = setInterval(() => {
                this.setState(({text}) => ({text: text.slice(0, count)}))
                if (count === 0) {
                    this.setState({done: true});
                    clearInterval(clsInterval)
                    setTimeout(() => {
                        this.setState({done: false});
                        resolve();
                    }, 1000);
                }
                count--;
    
            }, 50)
        })
    }

    writeText = async required => {
        if (this.state.text.length > 0) {
           await this.clear();
        }
        let count = 0;
        await new Promise(resolve => {
            const textInterval = setInterval(() => {
                this.setState({text: required.slice(0, count)})
                if (count === required.length) {
                    clearInterval(textInterval);
                    this.setState({done: true});
                    setTimeout(() => {
                        this.setState({done: false});
                        resolve();
                    }, 1000);
                }
                count++;
            }, 80);
        })
    }

    async componentDidMount() {
        while(true) {
            await this.writeText(`console.log('Hello');`);
            await this.writeText(`print('Hello')`);
            await this.writeText(`echo "Hello"`);
            await this.writeText(`printf("Hello");`);
            await this.writeText(`System.out.println("Hello");`);
        }
    }

    render() {
        const {text, done} = this.state;
        return (
            <HelloWrapper>
                <Text> {text}</Text><Cursor done={done}>&nbsp;</Cursor>
            </HelloWrapper>
        )
    }
}

export default Hello
