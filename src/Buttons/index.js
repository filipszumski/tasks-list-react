import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (

    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button
                    className="buttons__button"
                    onClick={toggleHideDone}
                >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="buttons__button"
                    disabled={tasks.every((task) => task.done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div >

);

export default Buttons;