import {TasksInitStateType} from '../../types/tasks-type';
import {
    addTask,
    removeTask,
    setTasks,
    updateChangesTask
} from '../../actions/tasks-actions';
import {TaskStatuses, TaskType, UpdateDomainTaskModelType} from '../../../types/types';
import {tasksReducer} from '../tasks-reducer';


let startState: TasksInitStateType

beforeEach(() => {
    startState = {
        '1': [{
            todoListId: '1',
            id: '1',
            title: 'task 1 toto list 1',
            status: TaskStatuses.New,
            startDate: '',
            deadline: '',
            priority: 0,
            description: '',
            addedDate: '',
            order: 1
        },
            {
                todoListId: '1',
                id: '2',
                title: 'task 2 toto list 1',
                status: TaskStatuses.New,
                startDate: '',
                deadline: '',
                priority: 0,
                description: '',
                addedDate: '',
                order: 1
            }],
        '2': [{
            todoListId: '2',
            id: '1',
            title: 'task 1 toto list 2',
            status: TaskStatuses.New,
            startDate: '',
            deadline: '',
            priority: 0,
            description: '',
            addedDate: '',
            order: 1
        },
            {
                todoListId: '2',
                id: '2',
                title: 'task 2 toto list 2',
                status: TaskStatuses.New,
                startDate: '',
                deadline: '',
                priority: 0,
                description: '',
                addedDate: '',
                order: 1
            },
            {
                todoListId: '2',
                id: '3',
                title: 'task 3 toto list 2',
                status: TaskStatuses.New,
                startDate: '',
                deadline: '',
                priority: 0,
                description: '',
                addedDate: '',
                order: 1
            }],
    }
})

test('tasks should be added to todoList', () => {
    const tasks: TaskType[] = [
        {
            todoListId: '1',
            id: '2',
            title: 'task 1',
            status: TaskStatuses.New,
            startDate: '',
            deadline: '',
            priority: 0,
            description: '',
            addedDate: '',
            order: 1
        },
        {
            todoListId: '1',
            id: '5',
            title: 'task 2',
            status: TaskStatuses.New,
            startDate: '',
            deadline: '',
            priority: 0,
            description: '',
            addedDate: '',
            order: 1
        }
    ]
    const endState = tasksReducer(startState, setTasks('1', tasks))

    expect(endState['1'].length).toBe(2)
    expect(endState['1']).toBeDefined()
})

test('task should be added to todoList', () => {
    const task: TaskType = {
        todoListId: '1',
        id: '3',
        title: 'task 1',
        status: TaskStatuses.New,
        startDate: '',
        deadline: '',
        priority: 0,
        description: '',
        addedDate: '',
        order: 1
    }
    const endState = tasksReducer(startState, addTask(task))

    expect(endState['1'].length).toBe(3)
    expect(endState['1'][0].title).toBe('task 1')
    expect(endState['1'][2].title).toBe('task 2 toto list 1')
})

test('task should be removed from todoList', () => {

    const endState = tasksReducer(startState, removeTask('2', '1'))

    expect(endState['2'].length).toBe(2)
    expect(endState['2'][0].id).toBe('2')
    expect(endState['2'].every(el => el.id !== '1')).toBeTruthy()
})

test('task should be updated', () => {
    const data: UpdateDomainTaskModelType = {status: TaskStatuses.Completed}
    const endState = tasksReducer(startState, updateChangesTask('1', '2', data))

    expect(endState['1'][1].status).toBe(TaskStatuses.Completed)
    expect(endState['1'][1].title).toBe('task 2 toto list 1')
    expect(endState['1'].length).toBe(2)
})