import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks } from "../tasksSlice";
import { Wrapper, Button } from "./styled";
import { toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
    const dispatch = useDispatch();
    const { tasks, hideDone } = useSelector(selectTasks);

    return (
        <Wrapper>
            {tasks.length > 0 && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        disabled={tasks.every((task) => task.done)}
                        onClick={() => dispatch(setAllDone())}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Wrapper >

    )
};

export default Buttons;