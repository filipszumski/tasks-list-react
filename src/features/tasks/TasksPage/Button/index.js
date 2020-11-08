import styled, { css } from "styled-components";

export const Button = styled.button`
    margin-left: 10px;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.button};
    transition: filter 0.3s;

    ${({ error }) => error && css`
        color: crimson;
    `};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        flex-basis: 100%;
        margin: 20px 0px 0px 0px;
    }

    &:hover {
        filter: brightness(115%);
    }
    &:active {
        filter: brightness(130%);
    }
    &:disabled {
        color: ${({ theme }) => theme.colors.disabled};
    }
`;