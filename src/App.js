import React, { useEffect, useState } from 'react';
import Header from "./Header";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { darkTheme, basicTheme } from "./theme";
import { useTasks } from "./useTasks";

const getInitialTheme = () => {
  const themeFromLocalStorage = localStorage.getItem("theme");

  return themeFromLocalStorage
    ? JSON.parse(themeFromLocalStorage)
    : basicTheme
};

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  const [
    tasks,
    addNewTask,
    setAllDone,
    removeTask,
    toggleTaskDone
  ] = useTasks();

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme => theme === basicTheme ? darkTheme : basicTheme)
  };

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

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
          body={<Form addNewTask={addNewTask} />}
        />
        <Section
          title="Lista zadań"
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />
          }
          body={
            <Tasks
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
