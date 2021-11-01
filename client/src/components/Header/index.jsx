import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { MdWest as BackArrow } from "react-icons/md";
import Chevron from '../../assets/icons/chevron-down-icon.svg';
import { StatusButton, ThemeButton, Dropdown, DropdownItem } from "../";
import icon from '../../assets/icons/info-icon.svg';
import { useDispatch } from "react-redux";
import { openAddCampaignModalRequest } from '../../redux/actions/campaignsActions';
import { Header, Nome, Produto, Cliente, Status, InfoIcon, BackButton } from './styles';



export const CampaignHeader = ({ data }) => {

    const history = useHistory();
    const [ isShown, setIsShown ] = useState(false);
    const [ result, setResult ] = useState({});

    const handleClickOnBackButton = () => {
        history.push("/home")
    }

    useEffect(() => {
        data().then( result => {
            setResult(result)
        }).catch( e => console.log(e))
    },[data])
   
    return (
        <Header>
            <BackButton>
                <BackArrow onClick={handleClickOnBackButton} style={{"color":"white", "fontSize": "1.6rem"}}></BackArrow>
            </BackButton>
            <Nome>
                <h1>{result.nome}</h1>
                <InfoIcon>
                    <img src={icon} alt="status" />
                </InfoIcon>
            </Nome>
            <Produto>
                <p>{result.produto}</p>
            </Produto>
            <Cliente>
                <p>{result.cliente}</p>
            </Cliente>
            <Status isShown={isShown} onMouseOver={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                <StatusButton IconRight={Chevron} DotLeft status={result.status}>{result.status}</StatusButton>
                <Dropdown isShown={isShown} right="0" top="46px">
                    <DropdownItem>Finalizada</DropdownItem>
                    <DropdownItem>Em produção</DropdownItem>
                </Dropdown>
            </Status>
        </Header>
    )
}

export const HomeHeader = (props) => {

    const dispatch = useDispatch()

    const handleCreateCampaignClick = () => {
        dispatch(openAddCampaignModalRequest())
    }
   
    return (
        <Header>
            <h1>Campanhas</h1>
            <ThemeButton onClick={handleCreateCampaignClick}>+ Adicionar campanha</ThemeButton>
        </Header>
    )
}


