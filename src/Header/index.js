import React from "react";
import { Wrapper, Button } from "./styled";


const Header = ({ title, toggleTheme }) => (
    <Wrapper>
        <h1>{title}</h1>
        <Button onClick={() => toggleTheme()}>Zmień tło</Button>
    </Wrapper>
);

export default Header;