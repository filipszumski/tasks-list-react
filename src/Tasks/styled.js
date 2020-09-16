import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style-type: none;
    padding: 0px;
    margin: 0px;
`;

export const Item = styled.li`
    padding: 10px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    border-bottom: 2px solid #eee;
  
    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    overflow-wrap: anywhere;

    ${({ done }) => done && css`
        overflow-wrap: anywhere;
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    color: white;
    width: 30px;
    height: 30px;

    ${({ done }) => done && css`
        background-color: green;
        transition: background 0.5s;

    &:hover {
        background-color: hsl(120, 100%, 30%);
    }
    &:active {
        background-color: hsl(120, 100%, 35%);
    }
    `}

    ${({ remove }) => remove && css`
        background-color: red;
        transition: background 0.5s;

    &:hover {
        background-color: hsl(0, 100%, 45%);
    }
    &:active {
        background-color:  hsl(0, 100%, 40%);
    }
    `}
`;