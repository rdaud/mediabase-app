import styled from 'styled-components';
import { COLOR } from '../../tokens/colors';

export const Hero = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${COLOR.black};

`
export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const TextWrapper = styled.div`

`
export const Wrapper = styled.div`
    box-shadow: 0px 30px 200px 20px rgba(0,0,0,.3);
    padding: 3rem;
    display: flex;
    width: 600px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`
export const FormContainerWrapper = styled.div`
`

export const Logo = styled.div`
    position: relative;

    img {
        display: inline;
        margin: 0 auto;
        transform: scale(.8);
    }
  
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
`

export const FormContainer = styled.div`
    width: 400px;
    margin: auto;
    transition: all 0.3s;
    display: flex;
    background: transparent;
    flex-direction: column;
    gap: 1rem;
`

export const Tabs = styled.div`
    display: inline-flex;
    justify-content: flex-start;
    gap: 1rem;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const FormField = styled.div`

`