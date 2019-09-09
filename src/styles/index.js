import styled from 'styled-components';
export * from './animations'

export const Container = styled.section`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
`

export const Button = styled.a`
    text-decoration: none;
    border-radius: 4px;
    border: 1px solid #2d2d2d;
    padding: 10px 20px;
    font-size: 1.6rem;
    text-align: center;
    display: inline-block;
    transition-property: all !important;
    width: 200px;
    margin-top: 20px;
    color: #2d2d2d;
    background-color: #fff;
    transition: all 0.3s ease;
    &:hover{
        border-color: #f97057;
        background: #f97057;
        color: #fff;
    }

    @media only screen and (max-width: 800px){
        font-size: 1rem;
        width: 150px;
    }
`
export const ReverseButton = styled(Button)`
    border: 1px solid #fff;
    color: #fff;
    background-color: #f97057;
    transition: all 0.3s ease;
    &:hover{
        background: #fff;
        color: #f97057;
    }
`

export const Text = styled.p.attrs(props => ({
    color: props.variant === 'light' ? '#2d2d2d': '#fff'
}))`
    color: ${props => props.color};
    font-size: 1.4rem;
    margin-bottom: 30px;
    @media only screen and (max-width: 800px) {
        font-size: 0.8rem;
        margin-bottom: 15px;
    }
`

export const Title = styled(Text).attrs(props => ({
    
    underline: props.variant === 'light' ? '#f97057' : '#fff'
}))`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
    &:after {
        margin-bottom: 40px;
        display: block;
        content: " ";
        width: 40px;
        color: ${props => props.underline};
        border: 3px solid ${props => props.underline};
    }
    @media only screen and (max-width: 800px) {
        font-size: 1.7rem;
        &:after {
            margin-bottom: 20px;
        }
    }
`

export const Subtitle = styled(Title)`
    font-size: 1.5rem;
    @media only screen and (max-width: 800px) {
        font-size: 1rem;
    }
`