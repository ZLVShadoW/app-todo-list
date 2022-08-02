import styles from './EditableTitle.module.css'

import React, {useState} from 'react';
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
    const [first, setFirst] = useState(true)

    const onChangeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onEditHandler = () => {
        setEditMode(!editMode)

        if (value.trim() === '' || value.trim() === title) {
            setValue(title)
        }
    }

    const callOnEditHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onEditHandler()
        }
    }

    const onBlurHandle = () => {
        //setTimeout необходим, т.к. конфликт между onBlur и onClick
        setTimeout(onEditHandler, 100)
    }

    React.useEffect(() => {
        if (!first && !editMode && value.trim() !== '' && value !== title) {
            onChangeTitle(value.trim())
        } else {
            setFirst(false)
        }
    }, [editMode])

    return (
        <div className={styles.title}>
            {editMode
                ? <input className={styles.inp}
                         value={value}
                         autoFocus
                         onChange={onChangeValueHandler}
                         onKeyPress={callOnEditHandler}
                         onBlur={onBlurHandle}
                />
                : <Tag>{title}</Tag>
            }

            <Button onClick={onEditHandler}>Edit</Button>
        </div>
    );
};
