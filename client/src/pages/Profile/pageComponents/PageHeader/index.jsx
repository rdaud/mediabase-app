import React from 'react';
import { useHistory } from "react-router-dom";
import { MdWest as BackArrow } from "react-icons/md";
import { Header, Nome, BackButton } from './styles';
import { Heading1 } from '../../../../components/Typography';


export const PageHeader = ({id}) => {
   
    const history = useHistory()

    const handleClickOnBackButton = () => {
        history.push("/home")
    }

    return (
        <Header>
            <BackButton>
                <BackArrow onClick={handleClickOnBackButton} style={{"color":"white", "fontSize": "1.6rem"}}></BackArrow>
            </BackButton>
            <Nome>
                <Heading1>Meu perfil</Heading1>
            </Nome>
        </Header>
    )
}


