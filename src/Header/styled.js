import styled from "styled-components";

export const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
`;

export const Button = styled.button`
    align-self: center;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background: ${({theme}) => theme.colors.sectionBackground};
    color: ${({theme}) => theme.colors.button};
    transition: background 0.5s, transform 0.5s;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.05);
    }
    &:active {
        filter: brightness(120%);
        transform: scale(1.05);
    }
`;