import React from 'react';
import Header from "../../common/Header";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Container from "../../common/Container";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../GlobalStyle";
import { useTheme } from "../../useTheme";


function Tasks() {

  const [
    theme,
    toggleTheme,
  ] = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header
          title="Lista zadań"
          toggleTheme={toggleTheme}
        />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />
        <Section
          title="Lista zadań"
          extraHeaderContent={<Buttons />}
          body={<TasksList />}
        />
      </Container>
    </ThemeProvider>
  );
}

export default Tasks;
