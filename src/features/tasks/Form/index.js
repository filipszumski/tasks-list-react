import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addNewTask } from "../tasksSlice";
import { StyledForm, Input, Button } from "./styled";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        dispatch(addNewTask({
            content: newTaskContent,
            id: nanoid(),
            done: false,
        }));

        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm
            onSubmit={onFormSubmit}
        >
            <Input
                ref={inputRef}
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