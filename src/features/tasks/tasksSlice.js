import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocaleStorage } from "./tasksLocaleStorage";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocaleStorage(),
        hideDone: false,
        exampleTasksFetchingState: "ready",
    },
    reducers: {
        addNewTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            };
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(task => task.id === taskId);

            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(task => task.id === taskId)

            tasks.splice(index, 1);
        },
        toggleHideDone: (state) => {
            const isAnyTaskDone = state.tasks.some(task => task.done)

            if (isAnyTaskDone) {
                state.hideDone = !state.hideDone;
            }
        },
        fetchExampleTasks: () => { },
        setExampleTasks: (state, { payload: exampleTasks }) => {
            state.tasks = exampleTasks;
        },
        setExampleTasksFetchingState: (state, { payload: value }) => {
            state.exampleTasksFetchingState = value;
        },
    }
});

export const {
    addNewTask,
    setAllDone,
    toggleTaskDone,
    removeTask,
    toggleHideDone,
    fetchExampleTasks,
    setExampleTasks,
    setExampleTasksFetchingState,
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectExampleTasksFetchingState = state => selectTasksState(state).exampleTasksFetchingState;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(task => task.done)

export default tasksSlice.reducer;
