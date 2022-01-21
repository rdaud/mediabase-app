import styled from "styled-components";
import plus from "../../../../assets/icons/plus.svg"
import criativo from "../../../../assets/icons/criativo.svg"
import { COLOR } from "../../../../tokens/colors";





export const ActionsWrapper = styled.div`
    position: relative;
    display: inline-flex;
    width: 100%;
    gap: 1rem;
    padding: 2rem 2rem 0 2rem;

    & > div:last-child {
        align-self: flex-end;
        flex-grow: 3;
        flex-shrink: 0;
        text-align: right;
    }
`

export const FormatosList = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    gap: 2rem;
    padding-left: 0 !important;
`


export const FormatWrapper = styled.li`
    display: inline-flex;
    gap: 2rem;
    justify-content: flex-start;
    border-bottom: 1px solid rgba(255,255,255,.1);
    padding-bottom: 2rem;
`



export const FormatName = styled.h5`
    margin-bottom: 0 !important;
`

export const Button = styled.div`
    aligns-self: flex-end;
    flex-grow: 2;
    text-align: right;
    color: white;
`

export const ButtonWrapper = styled.div`
    padding: 0 !important;
    margin: 0 !important;
    line-height: 0;
`



export const customStyles = {
  
    noData: {
		style: {
			display: 'flex',
            flexGrow: 2,
            background: `${COLOR.gray90}`
		},
	},
    table: {
        style: {
            height: '100%'
        }
    },
    headRow: {
      style: {
        borderBottomColor: `${COLOR.gray90}`,
        flex: 'inline-flex',
        overflow: 'visible',
        whiteSpace: 'normal',
        boxShadow: '0 10px 10px rgb(0 0 0 / 0.2)',
        background: `${COLOR.gray90} !important`,
        padding: '0 1rem'    
        },  
    },
    header: {
		style: {
        overflow: 'visible',
        whiteSpace: 'normal !important',           
		},
	},
    subHeader: {
      style: {
        backgroundColor: 'transparent',
        minHeight: '52px',
        marginBottom: '1rem',
        padding: 0,
        flexGrow: 0,
        alignItems: 'flex-start',
        position: 'relative',
      },
    },

    rows: {
      style: {
        backgroundColor: `${COLOR.gray80}`,
        cursor: 'pointer',
        padding: '0 1rem',
        border: `1px solid transparent`

      },
      highlightOnHoverStyle: {
        backgroundColor: `${COLOR.gray80}`,
        border: `1px solid ${COLOR.brandRed90}`
    },
    },
	expanderCell: {
		style: {
            order: 10,
		},
	},
    contextMenu: {
		style: {
			flexGrow: 2
        }
    }
}

const Criativo = styled.div`
    width: 12px;
    height: 12px;
    position: relative;
    background: ${COLOR.gray90};
    display: flex;
    align-items: center;
    justify-content: center;
    img:hover {
        filter: invert(30%) sepia(98%) saturate(4776%) hue-rotate(358deg) brightness(96%) contrast(93%);
    }
   
`

const Adicionar = styled.div`
    width: 12px;
    height: 12px;
    position: relative;
    background: ${COLOR.gray90};
    display: flex;
    align-items: center;
    justify-content: center;
    img:hover {
        filter: invert(30%) sepia(98%) saturate(4776%) hue-rotate(358deg) brightness(96%) contrast(93%);
    }
   
`

export const AdicionarCriativo = () => {

    return (
        <div style={{display: 'inline-flex', gap: '2px'}}>
            <Criativo>
                <img src={criativo} width="8" height="12"></img>
            </Criativo>
            <Adicionar>
                <img src={plus} width="12" height="12"></img>
            </Adicionar>
        </div>
    )
}

const AdicionarCriativoLargeWrapper = styled.div`
    display: inline-flex;
    gap: 2px;
    cursor: pointer;
    align-items: center;
`

const Menu = styled.div`
    background: ${COLOR.gray80};
    width: auto;
    max-width: 150px;
`

export const AdicionarCriativoLarge = () => {

    return (
        <>
            <AdicionarCriativoLargeWrapper>
                <Criativo style={{ width: '100%', padding: '0 8px', height: '24px', background: `${COLOR.gray100}`}}>
                    <p style={{ fontSize: '12px'}}>
                    Adicionar criativo
                    </p>
                </Criativo>
                <Adicionar style={{ width: '24px', padding: '0 8px', height: '24px', background: `${COLOR.gray100}`}}>
                    <img src={plus} width="16" height="16"></img>
                </Adicionar>
            </AdicionarCriativoLargeWrapper>
            <Menu></Menu>
        </>
    )
}

const Sangria = styled.div`
    position: relative;
    width: 48px;
    height: 48px;
    top: -20px;
    left: 24px; 
`

export const ExpandableRowsComponent = () => {

    return (
        <>
        <div style={{display: 'inline-flex', position: 'relative', background: `black`, height: '48px', width: '100%', overflow: 'hidden'}}>
           <Sangria>
                <svg width="20" height="47" viewBox="0 0 20 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0V40C1 43.3137 3.68629 46 7 46H20" stroke="#323232"/>
                </svg>
           </Sangria>
           <AdicionarCriativoLarge />
        </div>
    
      </>
    )
}