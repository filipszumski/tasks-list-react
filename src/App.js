import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {Button} from "./syled";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";
import { StyledNav, StyledList, StyledItem, StyledLink } from "./syled";
import {useTheme} from "./useTheme";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
    const [
        theme,
        toggleTheme,
    ] = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter basename="/tasks-list-react">
                <StyledNav>
                <Button onClick={() => toggleTheme()}>Zmień tło</Button>
                    <StyledList>
                        <StyledItem>
                            <StyledLink to="/zadania">Lista zadań</StyledLink>
                        </StyledItem>
                        <StyledItem>
                            <StyledLink to="/autor">O autorze</StyledLink>
                        </StyledItem>
                    </StyledList>
                </StyledNav>
                <Switch>
                    <Route path="/zadania">
                        <Tasks />
                    </Route>
                    <Route path="/autor">
                        <Author />
                    </Route>
                    <Route path="/">
                        <Redirect to="/zadania" />
                    </Route>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )

};

export default App;