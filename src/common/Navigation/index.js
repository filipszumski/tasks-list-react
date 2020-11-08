import React from "react";
import { toTasks, toAuthor } from "../../routes";
import {
    StyledNav,
    StyledList,
    StyledItem,
    StyledNavLink,
    Button
} from "./syled";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../features/theme/themeSlice";

export default () => {
    const dispatch = useDispatch();

    return (
        <StyledNav>
            <Button onClick={() => dispatch(toggleTheme())}>Zmień tło</Button>
            <StyledList>
                <StyledItem>
                    <StyledNavLink to={toTasks()}>Lista zadań</StyledNavLink>
                </StyledItem>
                <StyledItem>
                    <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
                </StyledItem>
            </StyledList>
        </StyledNav>
    )
};

