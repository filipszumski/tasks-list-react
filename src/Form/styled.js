import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.frame};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
`;

export const Button = styled.button`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.buttonInside};
    border: none;
    border-radius: 5px;
    transition: filter 0.5s, transform 0.5s;

    &:hover {
        filter: brightness(115%);
        transform: scale(1.05);
    }
    &:active {
        filter: brightness(130%);
        transform: scale(1.05);
    }
`;