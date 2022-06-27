import React from 'react';
import {Button} from '../Button/Button';
import {useAppDispatch} from '../../../bll/store';
import {updateTodoList} from '../../../bll/thunk/todoLists-thunks';


type EditableTitlePropsType = {
    id: string
    title: string
}

export const EditableTitle: React.FC<EditableTitlePropsType> = ({id, title}) => {
    const dispatch = useAppDispatch()

    const [editMode, setEditMode] = React.useState(false)
    const [value, setValue] = React.useState(title)

    const onChangeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onEditHandler = () => {
        setEditMode(!editMode)

        if (editMode && value.trim() !== '' && value !== title) {
            dispatch(updateTodoList(id, value.trim()))
        }
        if (value.trim() === '') {
            setValue(title)
        }
    }

    const callOnEditHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onEditHandler()
        }
    }

    return (
        <>
            {editMode
                ? <input value={value}
                         onChange={onChangeValueHandler}
                         onKeyPress={callOnEditHandler}/>
                : title
            }
            <Button onClick={onEditHandler}>Edit</Button>
        </>
    );
};
