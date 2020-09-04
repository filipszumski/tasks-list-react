import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="tasks">
        {tasks.map((task) => (
            <li
                className={`tasks__listItem ${task.done && hideDoneTasks ? "tasks__listItem--hidden" : ""}`}
                key={task.id}
            >
                <button className="tasks__button tasks__button--done">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`${task.done ? "tasks__listItemText--done" : ""}`}>
                    {task.content}
                </span>
                <button className="tasks__button tasks__button--remove">
                    {`✖`}
                </button>
            </li>
        ))}
    </ul >
)

export default Tasks;