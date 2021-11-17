import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openAddFormatModalRequest } from '../../../../redux/actions/campaignsActions';
import { FormatsSection,
    ActionsWrapper,
    FormatosList,
    EmptyStateContainer,
    Button,
    FormatWrapper,
    Checkbox,
    FormatName,
    ButtonWrapper
 } from './styles';
import DataTable from 'react-data-table-component';
import chevron from '../../../../assets/icons/chevron-down.svg';
import filter from '../../../../assets/icons/filter.svg';
import plus from '../../../../assets/icons/plus.svg';
import { ThemeButton, RegularButton, Search, Info1 } from '../../../../components';
import { ImCheckboxUnchecked, ImCheckboxChecked} from "react-icons/im";
import { COLOR } from '../../../../tokens/colors';



const MeioGroup = ({ nome, children }) => {

    const [ isChecked, setIsChecked ] = useState(false);

    return ( 
        <>
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
        {children}
        </>
    
    );
}

const Formato = ({ nome }) => {

    const [ isChecked, setIsChecked ] = useState(false);

    return ( 
    
        <FormatWrapper>
            <Checkbox onClick={() => setIsChecked(!isChecked)}>
                { isChecked ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/> }
            </Checkbox>
            <Info1 color="white">
                { nome }
            </Info1>
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

    //
    const removedDuplicates = () => {
        let arr = []
        formatos.forEach( item => arr.push(item.Meio))
        return [ ...new Set(arr)]
    }

    const columns = React.useMemo(
        () => [
            {
                name: 'Veículo',
                selector: row => row.Veículo,
                maxWidth: '600px',
            },
            {
                name: 'Specs',
                selector: row => row.Specs,
                sortable: true,
            },
            {
                name: 'Prazo',
                selector: row => row.Prazo,
                sortable: true,
        
            },
            {
                name: 'Status',
                selector: row => row.Status,
                sortable: true,
        
            },
        ],
        []
      )

      const data = [
          {
              id: 1,
              Veiculo: 'Google',
              Specs: 'JPG, MOV',
              Prazo: '12/12/2021',
              Status: 'Finalizada'
          }
      ]

 
    return (
        <>
        { formatos !== undefined && formatos.length > 0  ?  <FormatsSection>
            <ActionsWrapper>
                <div>
                    <Search lighter/>
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
               
                 {removedDuplicates().map((item,index) => {
                    return (
                        <MeioGroup key={index} nome={item}>
                        {formatos.map((formato,key) => {
                            if (item === formato.Meio) {
                                return (
                                    // <Formato key={key} nome={formato.Formato}/>
                                    <DataTable
                                    columns={columns}
                                    data={data}
                                    theme="dark"
                                    highlightOnHover="true"
                                    selectableRows
                                    // onSelectedRowsChange={handleSelectedRows}
                                    />
                                )
                            }
                            return
                           
                        })}
                        </MeioGroup>
                    )
                })}
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
             <EmptyStateContainer>
                <p>Essa campanha ainda não possuí nenhum formato. Clique em <span onClick={handleClick}>Adicionar formatos</span> para iniciar.</p>
             </EmptyStateContainer>
        </FormatsSection>
        
        }
 
        </>
    )
}