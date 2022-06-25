import React from 'react';
import {Button} from '../Button/Button';
import {Nullable} from '../../../types/types';


type AddItemFormPropsType = {
    addItem: (item: string) => void
}

export const AddItemForm: React.FC<AddItemFormPropsType> = ({addItem}) => {
    const [title, setTitle] = React.useState('')
    const [error, setError] = React.useState<Nullable<string>>(null)

    const onChangeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onAddHandler = () => {
        if (title.trim() !== '') {
            addItem(title)
            setTitle('')
        } else {
            setError('Title is required')
        }
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null)
        }
        if (e.key === 'Enter') {
            onAddHandler()
        }
    }

    return (
        <div style={{width: '100%', position: 'relative', paddingBottom: 26}}>
            <input value={title}
                   onChange={onChangeTitleHandler}
                   onKeyPress={onKeyPressHandler}
                   placeholder={'Title'}/>
            <Button onClick={onAddHandler}>Add</Button>
            {error && <div style={{position: 'absolute', bottom: 0, color: 'red'}}>{error}</div>}
        </div>
    );
};
