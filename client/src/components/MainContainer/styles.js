import styled from 'styled-components';

export const Hero = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: ${ props => props.padding || 0 };
`

