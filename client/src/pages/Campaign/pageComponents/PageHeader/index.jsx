import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { MdWest as BackArrow } from "react-icons/md";
import chevron from '../../../../assets/icons/chevron-down.svg';
import icon from '../../../../assets/icons/info.svg';
import { StatusButton, Dropdown, DropdownItem, Select } from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { Header, Nome, Produto, Cliente, Status, InfoIcon, BackButton } from './styles';
import { Heading1 } from '../../../../components/Typography';
import { StyledStatusButton } from '../../../../components/Button/styles';



export const PageHeader = ({id}) => {

    const dispatch = useDispatch();
    const { campaigns } = useSelector( state => state.campaigns )
    const { token } = useSelector( state => state.authentication )
    const { currentPageCampaign } = useSelector( state => state.campaigns )


    const history = useHistory();
    const [ isShown, setIsShown ] = useState(false);
    const [ result, setResult ] = useState({});

    const handleClickOnBackButton = () => {
        history.push("/home")
    }

    // Store current campaign data
    const { nome, status, cliente, produto} = currentPageCampaign

    const findCampaign = async () => {
        const filtered = await campaigns.filter(item => item._id === id)
        return {...filtered[0]}
    }

    useEffect(() => {
        findCampaign().then( result => {
            if (result) {
                setResult(result)
            }
        }).catch( e => console.log(e))
    },[])
   
    return (
        <Header>
            <BackButton>
                <BackArrow onClick={handleClickOnBackButton} style={{"color":"white", "fontSize": "1.6rem"}}></BackArrow>
            </BackButton>
            <Nome>
                <Heading1>{nome}</Heading1>
                <InfoIcon>
                    <img src={icon} alt="status" />
                </InfoIcon>
            </Nome>
            <Produto>
                <p>{produto}</p>
            </Produto>
            <Cliente>
                <p>{cliente}</p>
            </Cliente>
            <Status isShown={isShown} onMouseOver={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                
                <Select 
                variation="outline"
                colorMode="dark"
                options={[' 🔴 Finalizada', '🟢 Em produção']} value={status} />
              
            </Status>
        </Header>
    )
}


