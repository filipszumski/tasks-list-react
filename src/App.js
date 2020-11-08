import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./features/theme/GlobalStyle";
import TasksPage from "./features/tasks/TasksPage";
import AuthorPage from "./features/author";
import TaskPage from "./features/tasks/TaskPage";
import Navigation from "./common/Navigation";
import { toTask, toAuthor, toTasks } from "./routes";
import { useSelector } from "react-redux";
import { selectTheme } from "./features/theme/themeSlice";
import { basicTheme, darkTheme } from "./features/theme/theme";

const App = () => {
    const theme = useSelector(selectTheme);

    return (
        <ThemeProvider theme={theme === "jasny" ? basicTheme : darkTheme}>
            <GlobalStyle />
            <BrowserRouter basename="/tasks-list-react">
                <Navigation />
                <Switch>
                    <Route path={toTask()}>
                        <TaskPage />
                    </Route>
                    <Route path={toTasks()}>
                        <TasksPage />
                    </Route>
                    <Route path={toAuthor()}>
                        <AuthorPage />
                    </Route>
                    <Route>
                        <Redirect to={toTasks()} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
};

export default App;