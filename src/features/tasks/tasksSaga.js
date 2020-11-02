import { takeLatest, put, call, takeEvery, select, delay, all } from "redux-saga/effects"
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocaleStorage } from "./tasksLocaleStorage";
import { fetchExampleTasks, selectTasks, setExampleTasksFetchingState, setExampleTasks } from "./tasksSlice";


function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setExampleTasksFetchingState("loading"));
        yield delay(1000);
        yield all([
            put(setExampleTasks(exampleTasks)),
            put(setExampleTasksFetchingState("ready")),
        ]);
    } catch (error) {
        yield put(setExampleTasksFetchingState("loading"));
        yield delay(1000);
        yield put(setExampleTasksFetchingState("fail"));
    }
};

function* saveTasksInLocaleStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocaleStorage, tasks);
};

export default function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocaleStorageHandler);
};