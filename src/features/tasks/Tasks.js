import React from 'react';
import Header from "../../common/Header";
import Form from "./Form";
import TasksList from "./TasksList";
import ListButtons from "./ListButtons";
import FormButtons from "./FormButtons";
import Section from "../../common/Section";
import Container from "../../common/Container";

function Tasks() {

  return (
      <Container>
        <Header
          title="Lista zadań"
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
  );
}

export default Tasks;
