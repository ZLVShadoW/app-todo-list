export type TodoListType = {
    id: string
    addedDate: string
    order: number
    title: string
}

export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3
}

export type TaskType = {
    description: string
    title: string
    status: TaskStatuses
    priority: number //
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}