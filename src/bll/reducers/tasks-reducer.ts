import {TaskStatuses, TaskType} from '../../types/types';

const tasksInitState: TasksInitStateType = {
    '1': [{
        id: '1',
        title: 'task First 1',
        todoListId: '1',
        status: TaskStatuses.New,
        description: 'non',
        order: 0,
        priority: 0,
        deadline: '',
        addedDate: '',
        startDate: ''
    }, {
        id: '2',
        title: 'task Second 1',
        todoListId: '1',
        status: TaskStatuses.Completed,
        description: 'non',
        order: 0,
        priority: 0,
        deadline: '',
        addedDate: '',
        startDate: ''
    }],
    '2': [{
            id: '1',
            title: 'task First 2',
            todoListId: '2',
            status: TaskStatuses.New,
            description: 'non',
            order: 0,
            priority: 0,
            deadline: '',
            addedDate: '',
            startDate: ''
        }, {
            id: '2',
            title: 'task Second 2',
            todoListId: '2',
            status: TaskStatuses.Completed,
            description: 'non',
            order: 0,
            priority: 0,
            deadline: '',
            addedDate: '',
            startDate: ''
        }, {
            id: '3',
            title: 'task Third 2',
            todoListId: '2',
            status: TaskStatuses.InProgress,
            description: 'non',
            order: 0,
            priority: 0,
            deadline: '',
            addedDate: '',
            startDate: ''
        }]
}

export const tasksReducer = (
    state: TasksInitStateType = tasksInitState, action: any): TasksInitStateType => {
    return state
}


// type

type TasksInitStateType = {
    [key: string]: TaskType[]
}