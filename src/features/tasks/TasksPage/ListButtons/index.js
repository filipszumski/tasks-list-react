import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    selectHideDone,
    selectAreTasksEmpty,
    selectIsEveryTaskDone,
    toggleHideDone,
    setAllDone
} from "../../tasksSlice";
import { Wrapper } from "../Wrapper";
import { Button } from "../Button";

const ListButtons = () => {
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

export default ListButtons;