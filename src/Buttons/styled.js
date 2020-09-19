import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        flex-basis: 100%;
    }
`;

export const StyledButton = styled.button`
    margin-left: 10px;
    background: transparent;
    border: none;
    color: ${({theme}) => theme.colors.button};

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        flex-basis: 100%;
        margin: 20px 0px 0px 0px;
    }

    &:hover {
        filter: brightness(110%)
    }
    &:active {
        filter: brightness(120%)
    }
    &:disabled {
        color: ${({theme}) => theme.colors.disabled};
    }
`;