import { Link } from "react-router-dom";
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
    border-bottom: 2px solid ${({ theme }) => theme.colors.background};
  
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
    color: ${({ theme }) => theme.colors.buttonInside};
    width: 30px;
    height: 30px;

    ${({ done }) => done && css`
        background-color: ${({ theme }) => theme.colors.ckeck};
        transition: filter 0.5s;

    &:hover {
        filter: brightness(115%);
    }
    &:active {
        filter: brightness(130%);
    }
    `}

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.colors.remove};
        transition: filter 0.5s;

    &:hover {
        filter: brightness(115%);
    }
    &:active {
        filter: brightness(130%);
    }
    `}
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.button};

    &:hover {
        border-bottom: 1px solid;
    }
`;