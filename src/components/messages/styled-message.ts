import styled from "styled-components";

export const StyledMessage = styled.p<{ outlined?: boolean; elevated?: boolean }>`
    margin: 8px;
    padding: 12px 16px;
    border-radius: 4px;
    color: white;
    background-color: red;

    ${props => props.outlined && `outline: 2px solid rgb(237, 190, 190);`}
    ${props => props.elevated && `box-shadow: rgba(209, 58, 179, 0.2) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px,
    rgba(200, 47, 147, 0.12) 0px 1px 8px 0px;
    border-bottom: solid salmon;`}
`