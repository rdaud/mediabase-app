import { COLOR } from "../../../../tokens/colors";
import styled from 'styled-components';
import { relativeTimeRounding } from "moment";


export const Wrapper = styled.div`
    width: 100%;
    margin-bottom: 3rem;
    height: 100%;
    padding: 0 2rem;
    position: relative;
    overflow-y: scroll;
`

export const ActionsWrapper = styled.div`
    position: relative;
    display: inline-flex;
    width: 100%;
    gap: 1rem;
    justify-content: flex-start;

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
    title: {
      style: {
        fontColor: 'red',
        fontWeight: '900',
      }
    },
    headRow: {
      style: {
        borderBottomColor: `${COLOR.black}`
      }
    },
    subHeader: {
      style: {
        backgroundColor: 'transparent',
        minHeight: '52px',
        marginBottom: '1rem',
        padding: 0,
        position: 'relative'
      },
    },
    highlightOnHoverStyle: {
        border: `1px solid ${COLOR.brandRed90}`,
        outline: 'none'
    },
    rows: {
      style: {
        backgroundColor: `${COLOR.gray80}`,
        cursor: 'pointer',
        '&:not(:last-of-type)': {
        borderBottomColor: `${COLOR.black}`,
        },
      }
    },
    table: {
        style: {
            background: 'transparent',
        }
    }
}
