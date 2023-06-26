import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import todoReducer from "./Todo.Reducer";
import todoSaga from "./Todo.Saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:todoReducer,
    middleware:[sagaMiddleware],
    devTools:true
})

sagaMiddleware.run(todoSaga);


export default store;