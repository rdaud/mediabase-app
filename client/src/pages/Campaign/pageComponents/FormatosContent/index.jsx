import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openAddFormatModalRequest } from '../../../../redux/actions/campaignsActions';
import { FormatsSection,
    ActionsWrapper,
    FormatosList,
    DashedContainer,
    Button,
    FormatWrapper,
    Checkbox,
    FormatName,
    ButtonWrapper
 } from './styles';
import chevron from '../../../../assets/icons/chevron-down.svg';
import filter from '../../../../assets/icons/filter.svg';
import plus from '../../../../assets/icons/plus.svg';
import { ThemeButton, RegularButton, Search, } from '../../../../components';
import { ImCheckboxUnchecked, ImCheckboxChecked} from "react-icons/im";
import { COLOR } from '../../../../tokens/colors';



const FormatoItem = ({ nome }) => {

    const [ isChecked, setIsChecked ] = useState(false);

    return ( 
    
        <FormatWrapper>
            <Checkbox onClick={() => setIsChecked(!isChecked)}>
                { isChecked ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/> }
            </Checkbox>
            <FormatName>
                { nome }
            </FormatName>
            <Button>
                Expandir
                <span>
                    <img src={chevron} alt="" />
                </span>
            </Button>
        </FormatWrapper>
    
    );
}





export const Formatos = (props) => {

    const dispatch = useDispatch();
    const { formatos } = useSelector( state => state.campaigns.currentPageCampaign )
    const handleClick = () => {
        dispatch(openAddFormatModalRequest())
    }

 
    return (
        <>
        { formatos !== undefined && formatos.length > 0  ?  <FormatsSection>
            <ActionsWrapper>
                <div>
                    <Search />
                </div>
                    <div>
                        <RegularButton iconRight={chevron} iconLeft={filter}>
                        Filtrar
                        </RegularButton>
                   
                    </div>
                    <div>
                    <ThemeButton
                        cor={COLOR.brandRed90}
                        corDaOrelha={COLOR.gray100}
                        iconLeft={plus}
                        onClick={handleClick}>
                    Adicionar formato
                    </ThemeButton>
                </div>
            </ActionsWrapper>
            <FormatosList>
                <FormatoItem nome={props.nome || "Sem nome"}/>
            </FormatosList>
        </FormatsSection> : 
        
        <FormatsSection>
            <ActionsWrapper>
                <ButtonWrapper>
                    <Search />
                    </ButtonWrapper>
                    <ButtonWrapper>
                    <RegularButton iconRight={chevron} iconLeft={filter}>
                        Filtrar
                        </RegularButton>
                        </ButtonWrapper>
                        <ButtonWrapper>

                       
                    <ThemeButton
                        cor={COLOR.brandRed90}
                        corDaOrelha={COLOR.gray100}
                        iconLeft={plus}
                        onClick={handleClick}>
                    Adicionar formato
                    </ThemeButton>
                    </ButtonWrapper>
             </ActionsWrapper>
             <DashedContainer>
                <p>Essa campanha ainda não possuí nenhum formato. Clique em <span onClick={handleClick}>Adicionar formatos</span> para iniciar.</p>
             </DashedContainer>
        </FormatsSection>
        
        }
 
        </>
    )
}