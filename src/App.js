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

const getInitialTasks = () => {
  const tasksFromLocalStorage = localStorage.getItem("tasks");

  return tasksFromLocalStorage
    ? JSON.parse(tasksFromLocalStorage)
    : []
};

const getInitialTheme = () => {
  const themeFromLocalStorage = localStorage.getItem("theme");

  return themeFromLocalStorage
    ? JSON.parse(themeFromLocalStorage)
    : basicTheme
};

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(getInitialTasks);
  const [theme, setTheme] = useState(getInitialTheme);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme => theme === basicTheme ? darkTheme : basicTheme)
  };

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    }));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [
      ...tasks,
      {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        content: newTaskContent,
        done: false,
      }
    ]);
  }

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
