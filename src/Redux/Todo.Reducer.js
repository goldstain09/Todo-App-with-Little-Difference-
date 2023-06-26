
import { ADD_TODO_ERROR, ADD_TODO_START, ADD_TODO_SUCCESS, DELETE_TODO_ERROR, DELETE_TODO_START, DELETE_TODO_SUCCESS, EDIT_TODO_ERROR, EDIT_TODO_START, EDIT_TODO_SUCCESS, UPDATE_TODO_ERROR, UPDATE_TODO_START, UPDATE_TODO_SUCCESS } from "./Todo.Constants";

// getting values from local storage
const gettingVAlueLocalStorage = () => {
    let todos = JSON.parse(localStorage.getItem('todosLists'));
    
    if(todos){
        return todos
    }else{
        return ['This is one of my decent Projects',
        'A To-Do Application',
        'You can easily add, edit, & delete.',
        "& don't worry all these will not going anywhere after refreshing..."]
    }
}

// Initial state or values...
const Init = {
    error: '',
    loading: false,
    todosLists:gettingVAlueLocalStorage(),
    DataForEdit: { item: '', index: '' },
    Edit_is: false

}



const todoReducer = (state = Init, action) => {
    // we also use if also here but its easy to understand here... that's i feel :)
    switch (action.type) {
        case ADD_TODO_START:
        case DELETE_TODO_START:
        case EDIT_TODO_START:
        case UPDATE_TODO_START:
            return {
                ...state,
                loading: true,
                error: ''
            }
        // --------------------------------------------------------------


        case ADD_TODO_SUCCESS:
            let data = [...state.todosLists, action.payload]
            localStorage.setItem('todosLists', JSON.stringify(data));
            return {
                ...state,
                error: '',
                loading: false,
                todosLists: data
            }

        case DELETE_TODO_SUCCESS:
            let dataa = [...state.todosLists.filter((item, index) => item + index !== action.payload)]
            localStorage.setItem('todosLists', JSON.stringify(dataa));
            return {
                ...state,
                error: '',
                loading: false,
                todosLists: dataa
            }

        case EDIT_TODO_SUCCESS:
            return {
                ...state,
                error: '',
                loading: false,
                DataForEdit: { item: action.payload.item, index: action.payload.index },
                Edit_is: true
            }

        case UPDATE_TODO_SUCCESS:
            let dataaa;
            let value = state.todosLists.map((item, index) => {
                if (item + index === action.payload.unique_ID) {
                    return action.payload.item;
                }
                return item;
            })
            dataaa = [...value]
            localStorage.setItem('todosLists', JSON.stringify(dataaa));
            return {
                ...state,
                error: '',
                loading: false,
                DataForEdit: { item: '', index: '' },
                Edit_is: false,
                todosLists: dataaa

            }


        // --------------------------------------------------------------
        case ADD_TODO_ERROR:
        case DELETE_TODO_ERROR:
        case EDIT_TODO_ERROR:
        case UPDATE_TODO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            default:
            return state;
    }
}

export default todoReducer;


 