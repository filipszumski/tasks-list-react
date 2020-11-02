import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectExampleTasksFetchingState } from "../tasksSlice";
import { Wrapper, Button } from "./styled";

const FormButtons = () => {
    const dispatch = useDispatch();

    const exampleTasksFetchingState = useSelector(selectExampleTasksFetchingState);

    return (
        <Wrapper>
            { exampleTasksFetchingState === "ready" ?
                <>
                    <Button onClick={() => dispatch(fetchExampleTasks())}>
                        <>Pobierz przykładowe zadania</>
                    </Button>
                </>
                : exampleTasksFetchingState === "loading" ?
                    <>
                        <Button disabled>
                            <>Ładowanie...</>
                        </Button>
                    </>
                    : exampleTasksFetchingState === "fail" &&
                    <>
                        <Button
                            onClick={() => dispatch(fetchExampleTasks())}
                            errorState
                        >
                            <>Wystąpił błąd, spróbuj ponownie :)</>
                        </Button>
                    </>
            }
        </Wrapper >

    )
};

export default FormButtons;