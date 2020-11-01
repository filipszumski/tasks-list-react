import { takeLatest, put, call } from "redux-saga/effects"
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setExampleTasks } from "./tasksSlice";


function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks)
        console.log(exampleTasks);
        yield put(setExampleTasks(exampleTasks))
    } catch (error) {
        console.error(error);
        call(alert, "Coś poszło nie tak!")
    }
}

export default function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}