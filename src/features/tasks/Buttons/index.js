import React from "react";
import { Wrapper, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (

    <Wrapper>
        {tasks.length > 0 && (
            <>
                <Button
                    onClick={toggleHideDone}
                >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    disabled={tasks.every((task) => task.done)}
                    onClick={setAllDone}
                >
                    Ukończ wszystkie
                </Button>
            </>
        )}
    </Wrapper >

);

export default Buttons;