
import styled from 'styled-components'
import { COLOR } from '../../../../tokens/colors'


export const TableWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

export const ActionsWrapper = styled.div`
    position: relative;
    display: inline-flex;
    width: 100%;
    gap: .5rem;  
    padding: 1rem 2rem;

    & > div:last-child {
        align-self: flex-end;
        flex-grow: 2;
        text-align: right;
    }
`

export const ButtonWrapper = styled.div`
    padding: 0 !important;
    margin: 0 !important;
    line-height: 0;
`

export const customStyles = {
    rows: {
        style: {
            minHeight: '56px', // override the row height
            padding: '0 1rem',
            background: `${COLOR.gray80} !important`,
            cursor: 'pointer',
            borderBottomColor: `${COLOR.gray70} !important`
        },
    },
    highlightOnHoverStyle: {
        background: `${COLOR.white} !important`,
    },
    subHeader: {
        style: {
            background: `${COLOR.gray90} !important`,
            padding: '0 !important'
        }
    },
    headRow: {
        style: {
            flex: 'inline-flex',
            overflow: 'visible',
            whiteSpace: 'normal',
            boxShadow: '0 10px 10px rgb(0 0 0 / 0.2)',
            background: `${COLOR.gray90} !important`,
            padding: '0 1rem',
            borderColor: 'transparent' 
        }
    },
};