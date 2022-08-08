import {TodoListInitStateType} from '../../types/todoLists-type';
import {TodoListType} from '../../../types/types';
import {todoListsReducer} from '../todoLists-reducer';
import {addTodoList, setTodoLists} from '../../actions/todoLists-actions';

let startState: TodoListInitStateType

beforeEach(() => {
    startState = [
        {id: '1', title: 'todoList 1', order: 0, filter: 'ALL', addedDate: ''},
        {id: '2', title: 'todoList 2', order: 0, filter: 'ACTIVE', addedDate: ''},
        {id: '3', title: 'todoList 3', order: 0, filter: 'COMPLETED', addedDate: ''},
    ]
})

test('todoLists should be added', () => {
    const todoLists: TodoListType[] = [
        {id: '5', title: 'todoList 5', order: 0, addedDate: ''},
        {id: '6', title: 'todoList 6', order: 0, addedDate: ''},
        {id: '7', title: 'todoList 7', order: 0, addedDate: ''},
    ]

    const endState = todoListsReducer(startState, setTodoLists(todoLists));

    expect(endState.length).toBe(3)
    expect(endState[0].filter).toBe('ALL')
})

test('new todoList should be added', () => {
    const newTodoList: TodoListType = {
        id: '5',
        title: 'todoList 5',
        order: 0,
        addedDate: ''
    }
    const endState = todoListsReducer(startState, addTodoList(newTodoList))

    expect(endState.length).toBe(4)
    expect(endState[0].title).toBe('todoList 5')
})