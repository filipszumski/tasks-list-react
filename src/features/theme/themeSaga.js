import { call, select, takeEvery } from "redux-saga/effects";
import { saveDataInLocaleStorage } from "../dataFromLocaleStorage";
import { toggleTheme, selectTheme } from "./themeSlice";

function* saveThemeInLocaleStorageHandler() {
    const theme = yield select(selectTheme)
    yield call(saveDataInLocaleStorage, theme, "theme");
};

export function* themeSaga() {
    yield takeEvery(toggleTheme.type, saveThemeInLocaleStorageHandler);
};