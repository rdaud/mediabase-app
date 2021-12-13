import styled from "styled-components" 
import { COLOR } from "../../tokens/colors"

export const Styles = styled.div`
  display: block;
  max-width: 100%;
  width: 100%;

  /* This will make the table scrollable when it gets too small */
  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    border-bottom: 1px solid black;
  }


  table {
    border-spacing: 0;
    width: 100%;

    tbody {
      tr {
        border-bottom: 1px solid ${COLOR.gray100};
        position: relative; 
        :hover {
          border: 1px solid ${COLOR.brandRed90} !important;
          cursor: pointer;
        }
      }
    }

    tr {
      color: ${COLOR.white};
      :last-child {
          td {
            border-bottom: 0;
          }
        }
      }

    th {
      background: ${COLOR.gray70};
      color: ${COLOR.white};
      padding: 1rem;
      text-transform: uppercase;
      font-size: 12px;
      :last-child {
        text-align: right;
      }
    }


    td {
      margin: 0;
      padding: 1rem;
      :last-child {
        text-align: right;
      }

      /* The secret sauce */
      /* Each cell should grow equally */
      width: 1%;
      /* But "collapsed" cells should be as small as possible */
      &.collapse {
        width: 0.0000000001%;
      }

    }
  }

`