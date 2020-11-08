import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./features/rootSaga";
import tasksReducer from "./features/tasks/tasksSlice";
import themeReducer from "./features/theme/themeSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        tasks: tasksReducer,
        theme: themeReducer,
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

