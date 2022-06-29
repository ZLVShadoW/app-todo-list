import styles from './EditableTitle.module.css'

import React from 'react';
import {Button} from '../Button/Button';


type EditableTitlePropsType = {
    title: string
    onChangeTitle: (newTitle: string) => void
    tag: React.ElementType
}

export const EditableTitle: React.FC<EditableTitlePropsType> = ({
    title,
    onChangeTitle,
    tag: Tag
}) => {
    const [editMode, setEditMode] = React.useState(false)
    const [value, setValue] = React.useState(title)

    const onChangeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onEditHandler = () => {
        setEditMode(!editMode)

        if (editMode && value.trim() !== '' && value !== title) {
            onChangeTitle(value.trim())
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
        <div className={styles.title}>
            {editMode
                ? <input value={value}
                         onChange={onChangeValueHandler}
                         onKeyPress={callOnEditHandler}/>
                : <Tag>{title}</Tag>
            }
            <Button onClick={onEditHandler}>Edit</Button>
        </div>
    );
};
