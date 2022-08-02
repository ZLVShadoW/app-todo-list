import {TasksInitStateType} from '../../types/tasks-type';
import {addTask, setTasks} from '../../actions/tasks-actions';
import {TaskStatuses, TaskType} from '../../../types/types';
import {tasksReducer} from '../tasks-reducer';

let startState: TasksInitStateType

beforeEach(() => {
    startState = {
        '1': []
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
            id: '2',
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

    expect(endState['1'].length).toBe(1)
    expect(endState['1'][0].title).toBe('task 1')
})