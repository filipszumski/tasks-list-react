import styled from "styled-components";

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.frame};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
`;