import styled from "styled-components";
import { COLOR } from "../../tokens/colors";

export const FormWrapper = styled.div`
    position: relative;
    width: 50%;
`



export const Profile = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50rem;
    top: 20px;
    position: absolute;
    background: ${COLOR.gray90};
    border: 1px solid ${COLOR.gray100};
    box-shadow: 5px 5px 20px ${COLOR.gray90};
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    p {
        color: white;
        font-size: 12px;    
    }
`

export const ProfileWrapper = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    background: ${COLOR.gray90};
    position: relative;  
`

export const InnerWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 8rem;
    align-items: center;
    background: ${COLOR.gray80};
`