import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLocaleStorage } from "../dataFromLocaleStorage";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: getDataFromLocaleStorage("theme", "jasny"),
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = (state.theme === "jasny") ? "ciemny" :"jasny";
        },
    },
});

export const {
    toggleTheme,
} = themeSlice.actions;

export const selecThemeState = state => state.theme;
export const selectTheme = state => selecThemeState(state).theme;

export default themeSlice.reducer;