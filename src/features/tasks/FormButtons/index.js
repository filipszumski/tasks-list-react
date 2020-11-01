import React from "react";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice";
import { Wrapper, Button } from "./styled";

const FormButtons = () => {
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
                </Button>
        </Wrapper >

    )
};

export default FormButtons;