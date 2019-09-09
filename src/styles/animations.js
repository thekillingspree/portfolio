import styled, {keyframes} from 'styled-components';

const upDown = keyframes`
    from {
        transform: translatey(0)
    }

    to {
        transform: translateY(20px)
    }
`
const upDownLong = keyframes`
    from {
        transform: translatey(0)
    }

    to {
        transform: translateY(130px)
    }
`

export const UpDown = styled.div.attrs(props => ({
    duration: props.long ? '15s' : '5s',
    anim: props.long ? upDownLong : upDown
}))`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    animation: ${props => props.anim} ${props => props.duration} ease-in-out infinite alternate;
`
export const slideInAnim = keyframes`
    from {
        opacity: 0;
        transform: translate(-100px, 0);
    }
    to {
        opacity: 1;
        transform: translate(0, 0)
    }
`
