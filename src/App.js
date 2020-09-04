import React, { useState } from 'react';
import Header from "./Header";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const [tasks, setTasks] = useState([
    { id: 1, content: "przjeć na Reacta", done: false },
    { id: 2, content: "zjeść obiad", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />
        }
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
          />
        }
      />
    </Container>
  );
}

export default App;
