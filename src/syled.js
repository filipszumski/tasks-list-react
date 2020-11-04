import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 12px;
    background-color: ${({ theme }) => theme.colors.button};
`;

export const Button = styled.button`
    align-self: center;
    padding: 8px;
    margin-left: 12px;
    border-radius: 5px;
    border: none;
    background: ${({theme}) => theme.colors.sectionBackground};
    color: ${({theme}) => theme.colors.button};

    &:hover {
        filter: brightness(110%);
    }
    &:active {
        filter: brightness(120%);
    }
`;

export const StyledList = styled.ul`
padding-left: 0px;
margin: 0;
list-style: none;
display: flex;
justify-content: center;
`;

export const StyledItem = styled.li`
padding: 20px 10px 20px 10px;
`;

export const StyledLink = styled(NavLink)`
color: ${({ theme }) => theme.colors.buttonInside};
text-decoration: none;
`;
