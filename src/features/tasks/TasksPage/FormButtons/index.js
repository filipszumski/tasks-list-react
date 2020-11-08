import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";
import { Wrapper } from "../Wrapper";
import { Button } from "../Button";
import { selectLoading, selectError } from "../../tasksSlice";

const FormButtons = () => {
    const dispatch = useDispatch();
    const loadingState = useSelector(selectLoading);
    const errorState = useSelector(selectError);

    return (
        <Wrapper >
            {loadingState === false ?
                <>
                    <Button onClick={() => dispatch(fetchExampleTasks())} error={errorState}>
                        {errorState === true ?
                            <>Wystąpił błąd, spróbuj ponownie</> :
                            <>Pobierz przykładowe zadania</>}
                    </Button>
                </> :
                loadingState === true && (
                    <>
                        <Button disabled >
                            <>Ładowanie...</>
                        </Button>
                    </>
                )}

        </Wrapper >

    )
};

export default FormButtons;