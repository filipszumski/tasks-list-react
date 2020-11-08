import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLocaleStorage } from "../dataFromLocaleStorage";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getDataFromLocaleStorage("tasks", []),
        hideDone: false,
        loading: false,
        error: false,
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
            const index = tasks.findIndex(task => task.id === taskId);

            tasks.splice(index, 1);
        },
        toggleHideDone: (state) => {
            const isAnyTaskDone = state.tasks.some(task => task.done);

            if (isAnyTaskDone) {
                state.hideDone = !state.hideDone;
            }
        },
        fetchExampleTasks: (state) => {
            state.loading = true;
        },
        fetchExampleTasksSuccess: (state, { payload: exampleTasks }) => {
            state.tasks = exampleTasks;
            state.loading = false;
        },
        fetchExampleTasksError: (state) => {
            state.loading = false;
            state.error = true;
        }
    }
});

export const {
    addNewTask,
    setAllDone,
    toggleTaskDone,
    removeTask,
    toggleHideDone,
    fetchExampleTasks,
    fetchExampleTasksSuccess,
    fetchExampleTasksError,
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectLoading = state => selectTasksState(state).loading;
export const selectError = state => selectTasksState(state).error;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(task => task.done);
export const getTaskById = (state, id) => selectTasks(state).find(task => task.id === id);
export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    } return tasks.filter(task => task.content.toUpperCase().includes(query.toUpperCase()));
};

export default tasksSlice.reducer;
