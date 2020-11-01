import React from 'react';
import Header from "../../common/Header";
import Form from "./Form";
import TasksList from "./TasksList";
import ListButtons from "./ListButtons";
import FormButtons from "./FormButtons";
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
          extraHeaderContent={<FormButtons />}
          body={<Form />}
        />
        <Section
          title="Lista zadań"
          extraHeaderContent={<ListButtons />}
          body={<TasksList />}
        />
      </Container>
    </ThemeProvider>
  );
}

export default Tasks;
