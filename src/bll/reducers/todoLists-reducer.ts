import {TodoListType} from '../../types/types';

const todoListsInitState: TodoListInitStateType = [
    {
        id: '1',
        title: 'first',
        addedDate: 'sdsdsd',
        order: 0
    },
    {
        id: '2',
        title: 'second',
        addedDate: 'sdsdsd',
        order: 0
    }
]

export const todoListsReducer = (
    state: TodoListInitStateType = todoListsInitState,
    action: any
): TodoListInitStateType => {
    return state
}


// type

type TodoListInitStateType = TodoListType[]