import {ADD_TASK, REMOVE_TASK, UPDATE_TASK, EDIT_TASK} from '../action/types'

const taskReducer=(state=[], action)=> {

    switch(action.type){

        case ADD_TASK :
            return [...state, action.payload]
        case REMOVE_TASK :
            return state.filter(el=> el.id !== action.payload)
        case UPDATE_TASK :
            return state.map(todo=>
                todo.id===action.payload ? {...todo, isDone : !todo.isDone} : todo)
        case EDIT_TASK :
        return state.map(el=> el.id===action.payload.id ? action.payload : el)
        default:
            return state
    }



}

export default taskReducer