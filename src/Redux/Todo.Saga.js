import {delay, put, takeLatest} from 'redux-saga/effects';
import { ADD_TODO_START, DELETE_TODO_START, EDIT_TODO_START, UPDATE_TODO_START } from './Todo.Constants';
import { addTodoError, addTodoSuccess, deleteTodoError, deleteTodoSuccess, editTodoError, editTodoSuccess, updateTodoError, updateTodoSuccess } from './Todo.Actons';


//  destructuring-------|
function* sagaAddTodo({payload}){
    // now sending data in the next method we created... [addTodoSuccess]
    try {
        yield delay(1500)
        yield put(addTodoSuccess(payload));
    } catch (error) {
        yield put(addTodoError(error));
    }
}

function* sagaDeleteTodo({payload}){
    // now sending data in the next method we created... [deleteTodoSuccess]
    try {
        yield delay(400)
        yield put(deleteTodoSuccess(payload));
    } catch (error) {
        yield put(deleteTodoError(error));
    }
}

function* sagaEditTodo({payload}){
    try {
        yield put(editTodoSuccess(payload));
    } catch (error) {
        yield put(editTodoError(error));
    }
    
}

function* sagaUpdateTodo({payload}){
    try {
        yield delay(1000)
        yield put(updateTodoSuccess(payload));
    } catch (error) {
        yield put(updateTodoError(error));
    }
}



function* todoSaga(){
    yield takeLatest(ADD_TODO_START,sagaAddTodo);
    yield takeLatest(DELETE_TODO_START,sagaDeleteTodo);
    yield takeLatest(EDIT_TODO_START,sagaEditTodo);
    yield takeLatest(UPDATE_TODO_START,sagaUpdateTodo);
}

export default todoSaga;