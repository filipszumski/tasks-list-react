import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, selectHideDone, toggleTaskDone, selectTasksByQuery } from "../../tasksSlice";
import { List, Item, Content, Button, StyledLink } from "./styled";
import { useQueryParameter } from "../queryParameter";
import searchQueryParamName from "../searchQueryParamName";
import { toTask } from "../../../../routes";

const TasksList = () => {
    const query = useQueryParameter(searchQueryParamName);
    const tasks = useSelector((state) => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
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
                        <StyledLink to={toTask(task.id)}>{task.content}</StyledLink>
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
    )
};

export default TasksList;