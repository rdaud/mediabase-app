import { COLOR } from "../../tokens/colors";
import styled from 'styled-components';


export const Hero = styled.div`
    width: 100%;
    margin-bottom: 3rem;
    height: 100%;
    position: relative;
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
    highlightOnHoverStyle: {
        backgroundColor: `${COLOR.gray100}`,
        borderBottomColor: `${COLOR.black}`,
        outline: 'none'
    },
    rows: {
      style: {
        backgroundColor: `${COLOR.gray100}`,
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
