import { ADD_TODO_ERROR, ADD_TODO_START, ADD_TODO_SUCCESS, DELETE_TODO_ERROR, DELETE_TODO_START, DELETE_TODO_SUCCESS, EDIT_TODO_ERROR, EDIT_TODO_START, EDIT_TODO_SUCCESS, UPDATE_TODO_ERROR, UPDATE_TODO_START, UPDATE_TODO_SUCCESS } from "./Todo.Constants"


// ADD
export const addTodoStart = (inputData)=>{
    return {
        type:ADD_TODO_START,
        payload:inputData
    }
}

    //       both methods give same output...  

export const addTodoSuccess = (data) => ({
    type:ADD_TODO_SUCCESS,
    payload:data
    
})

export const addTodoError = (error) => ({
    type:ADD_TODO_ERROR,
    payload:error
    
})


// DELETE 
export const deleteTodoStart = (data) => ({
    type:DELETE_TODO_START,
    payload:data
})

export const deleteTodoSuccess = (data) => ({
    type:DELETE_TODO_SUCCESS,
    payload:data
})
export const deleteTodoError = (data) => ({
    type:DELETE_TODO_ERROR,
    payload:data
})

// EDIT 
export const editTodoStart = (item,index) => ({
    type:EDIT_TODO_START,
    payload:{
        item, index
    }
})

export const editTodoSuccess = (data) => ({
    type:EDIT_TODO_SUCCESS,
    payload:data
})
export const editTodoError = (data) => ({
    type:EDIT_TODO_ERROR,
    payload:data
})

// UPDATE
export const updateTodoStart = (item,unique_ID) => ({
    type:UPDATE_TODO_START,
    payload:{
        item,unique_ID 
    }
})

export const updateTodoSuccess = (data) => ({
    type:UPDATE_TODO_SUCCESS,
    payload:data
})
export const updateTodoError = (data) => ({
    type:UPDATE_TODO_ERROR,
    payload:data
})