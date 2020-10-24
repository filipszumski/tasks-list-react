import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectHideDone, selectAreTasksEmpty, selectIsEveryTaskDone } from "../tasksSlice";
import { Wrapper, Button } from "./styled";
import { toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
    const dispatch = useDispatch();
    const hideDone = useSelector(selectHideDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

    return (
        <Wrapper>
            {areTasksEmpty || (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        disabled={isEveryTaskDone}
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