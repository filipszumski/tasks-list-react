import React from "react";
import { StyledButtons, StyledButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (

    <StyledButtons>
        {tasks.length > 0 && (
            <>
                <StyledButton
                    className="buttons__button"
                    onClick={toggleHideDone}
                >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </StyledButton>
                <StyledButton
                    className="buttons__button"
                    disabled={tasks.every((task) => task.done)}
                    onClick={setAllDone}
                >
                    Ukończ wszystkie
                </StyledButton>
            </>
        )}
    </StyledButtons >

);

export default Buttons;