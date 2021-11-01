import styled from 'styled-components';


export const Header = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    gap: 2rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export const Nome = styled.div`
    position: relative;
    flex-grow: 0;
    text-align: left;
    flex-basis: auto;
    flex-shrink: 0;
    display: inline-flex;
`

export const Produto = styled.div`
    position: relative;
    color: white;
    flex-grow: 0;
    text-align: left;
    flex-basis: auto;
    flex-shrink: 0;

    & > p {
        font-size: 0.875rem;
        margin: 0;
    }

`

export const Cliente = styled.div`
    position: relative;
    color: white;
    text-align: left;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;

    & > p {
        font-size: 0.875rem;
        margin: 0;

    }

`

export const Status = styled.div`
    text-align: right;
    flex-grow: 1;
    flex-shrink: 1;
    color: white;
    position: relative;
    justify-content: flex-end;
    display: flex;
`

export const InfoIcon = styled.div`
    position: relative;
    display: inline;
    align-self: center;
    margin-left: 1rem;
    opacity: .5;
`

export const BackButton = styled.div`
    width: 48px;
    height: 48px;
    position: relative;
    padding: .5rem;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 0.125rem;
    cursor: pointer;

    svg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
    }

    &:hover {
        background: rgba(255,255,255,.05);
    }
`