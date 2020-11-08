import { all } from "redux-saga/effects";
import { tasksSaga } from "./tasks/tasksSaga";
import { themeSaga } from "./theme/themeSaga";

export default function* rootSaga() {
    yield all([
        tasksSaga(),
        themeSaga(),
    ]);
};