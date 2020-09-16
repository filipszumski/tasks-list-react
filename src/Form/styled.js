import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;

    @media (max-width: 540px) {
        grid-template-columns: 1fr
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: hsl(221, 79%, 60%);
    color: white;
    border: none;
    border-radius: 5px;
    transition: background 0.5s, transform 0.5s;

    &:hover {
        background: hsl(221, 79%, 55%);
        transform: scale(1.05);
    }
    &:active {
        background: hsl(221, 79%, 50%);
        transform: scale(1.05);
    }
`;