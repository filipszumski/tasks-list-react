import React from "react";
import { StyledHeader, Button } from "./styled";


const Header = ({ title, toggleTheme }) => (
    <StyledHeader>
        <h1>{title}</h1>
        <Button onClick={() => toggleTheme()}>Zmień tło</Button>
    </StyledHeader>
);

export default Header;