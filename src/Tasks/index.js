import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
    <ul className="tasks">
        {tasks.map((task) => (
            <li
                className={`tasks__listItem ${task.done && hideDone ? "tasks__listItem--hidden" : ""}`}
                key={task.id}
            >
                <button className="tasks__button tasks__button--done">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`${task.done ? "tasks__listItemText--done" : ""}`}>
                    {task.content}
                </span>
                <button
                    className="tasks__button tasks__button--remove"
                    onClick={() => removeTask(task.id)}
                >
                    {`✖`}
                </button>
            </li>
        ))}
    </ul >
)

export default Tasks;