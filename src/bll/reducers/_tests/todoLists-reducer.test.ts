import {TodoListInitStateType} from '../../types/todoLists-type';
import {TodoListType} from '../../../types/types';
import {todoListsReducer} from '../todoLists-reducer';
import {
    addTodoList, changeFilter,
    changeTodoList, clearData,
    removeTodoList,
    setTodoLists
} from '../../actions/todoLists-actions';

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

test('correct todoList should be updated', () => {
    const endState = todoListsReducer(startState, changeTodoList('2', 'new title'))

    expect(endState[1].title).toBe('new title')
    expect(endState[0].title).toBe('todoList 1')
})

test('correct todoList should be removed', () => {
    const endState = todoListsReducer(startState, removeTodoList('3'))

    expect(endState[0].title).toBe('todoList 1')
    expect(endState.length).toBe(2)
    expect(endState.some(el => el.id === '3')).toBeFalsy()
})

test('correct filter of todoList should be changed', () => {
    const endState = todoListsReducer(startState, changeFilter('2', 'COMPLETED'))

    expect(endState[1].filter).toBe('COMPLETED')
    expect(endState.filter(el => el.filter !== 'COMPLETED').length).toBe(1)
})

test('todoList should be empty array', () => {
    const endState = todoListsReducer(startState, clearData())

    expect(endState.length).toBe(0)
})