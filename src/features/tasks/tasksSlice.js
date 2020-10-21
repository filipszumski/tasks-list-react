import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addNewTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            };
        },
        toggleTaskDone: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);

            state.tasks[index].done = !state.tasks[index].done;
        },
        removeTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload)

            state.tasks.splice(index, 1);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        }
    }
});

export const { addNewTask, setAllDone, toggleTaskDone, removeTask, toggleHideDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;
