import {ADD_TASK, REMOVE_TASK, UPDATE_TASK, EDIT_TASK} from './types'

export const AddTask=(newTodo)=>{

    return {
        type: ADD_TASK,
        payload: newTodo
    }
}

export const EditTask=(taskUpdate)=>{

    return {

        type: EDIT_TASK,
        payload: taskUpdate
    }
}

export const RemoveTask=(id)=>{
    return {
        type: REMOVE_TASK,
        payload: id
    }
}

export const UpdateTask=(id)=>{
    return{
        type: UPDATE_TASK,
        payload:id 
    }
}