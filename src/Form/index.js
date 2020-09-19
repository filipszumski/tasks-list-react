import React, { useState } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <StyledForm
            onSubmit={onFormSubmit}
        >
            <Input
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={(event) => setNewTaskContent(event.target.value)}
                required
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    )
};

export default Form;