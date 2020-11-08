import React from 'react';
import Header from "../../../common/Header";
import Form from "./Form";
import TasksList from "./TasksList";
import ListButtons from "./ListButtons";
import FormButtons from "./FormButtons";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import Search from "./Search";

function TasksPage() {

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
        title="Wyszukiwarka"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={<ListButtons />}
        body={<TasksList />}
      />
    </Container>
  )
};

export default TasksPage;
