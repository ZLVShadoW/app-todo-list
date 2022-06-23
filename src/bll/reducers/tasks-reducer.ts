const tasksInitState: TasksInitStateType = {
    task: 'tasks'
}

export const tasksReducer = (state: TasksInitStateType = tasksInitState, action: any): TasksInitStateType => {
  return state
}


// type

type TasksInitStateType = {
    task: string
}