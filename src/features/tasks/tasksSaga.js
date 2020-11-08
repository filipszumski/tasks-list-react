import { takeLatest, put, call, takeEvery, select, delay } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveDataInLocaleStorage } from "../dataFromLocaleStorage";
import {
    fetchExampleTasks,
    selectTasks,
    fetchExampleTasksSuccess,
    fetchExampleTasksError
} from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError());
        console.error(error);
    }
};

function* saveTasksInLocaleStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveDataInLocaleStorage, tasks, "tasks");
};

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocaleStorageHandler);
};