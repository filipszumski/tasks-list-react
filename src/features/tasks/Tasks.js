import React from 'react';
import Header from "../../common/Header";
import Form from "./Form";
import TasksList from "./TasksList"; 
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Container from "../../common/Container";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../GlobalStyle";
import { useTasks } from "../../useTasks";
import { useTheme } from "../../useTheme";
import {useHideDone} from "../../useHideDone";

function Tasks() {

  const [
    theme,
    toggleTheme,
  ] = useTheme();

  const [
    tasks,
    addNewTask,
    setAllDone,
    removeTask,
    toggleTaskDone
  ] = useTasks();

const [
  hideDone,
  toggleHideDone,
] = useHideDone(tasks);

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
            <TasksList
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

export default Tasks;
