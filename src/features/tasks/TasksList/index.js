import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, selectTasks, toggleTaskDone } from "../tasksSlice";
import { List, Item, Content, Button } from "./styled";

const TasksList = () => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();
    
    return (
        <List>
            {tasks.map((task) => (
                <Item
                    hidden={task.done && hideDone}
                    key={task.id}
                >
                    <Button
                        done
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content done={task.done}>
                        {task.content}
                    </Content>
                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        {`✖`}
                    </Button>
                </Item>
            ))}
        </List>
    );
}

export default TasksList;