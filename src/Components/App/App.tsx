import React from 'react';
import './App.css';
import {TodoLists} from '../TodoLists/TodoLists';
import {Button} from '../1_Common/Button/Button';
import {useAppDispatch} from '../../bll/store';
import {createTodoList} from '../../bll/thunk/todoLists-thunks';

function App() {
    const dispatch = useAppDispatch()

    const [title, setTitle] = React.useState('')

    const onChangeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    
    const onClickAddTitleHandler = () => {
      dispatch(createTodoList(title))
    }

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 30,
            maxWidth: 1850,
            margin: '0 auto'
        }}>
            <div style={{width: '100%'}}>
                <input value={title}
                       onChange={onChangeTitleHandler}/>
                <Button onClick={onClickAddTitleHandler}>Add</Button>
            </div>

            <TodoLists/>
        </div>
    );
}

export default App;
