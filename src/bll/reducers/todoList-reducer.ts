const todoListsInitState: TodoListInitStateType = {
    todolist: 'todolist'
}

export const todoListReducer = (state: TodoListInitStateType = todoListsInitState, action: any): TodoListInitStateType => {
    return state
}


// type

type TodoListInitStateType = {
    todolist: string
}