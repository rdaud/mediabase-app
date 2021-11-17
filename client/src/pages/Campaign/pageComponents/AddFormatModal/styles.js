
import styled from 'styled-components'


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
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};