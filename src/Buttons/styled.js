import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 540px) {
        flex-basis: 100%;
    }
`;

export const StyledButton = styled.button`
    margin-left: 10px;
    background: transparent;
    border: none;
    color: hsl(221, 79%, 55%);
    transition: color 0.5s;

    @media (max-width: 540px) {
        flex-basis: 100%;
        margin: 20px 0px 0px 0px;
    }

    &:hover {
        color: hsl(221, 79%, 40%);
    }
    &:active {
        color: hsl(221, 79%, 30%);
    }
    &:disabled {
        color: gray;
    }
`;