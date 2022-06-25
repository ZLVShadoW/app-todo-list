import React from 'react';
import {Button} from '../Button/Button';


type EditableTitlePropsType = {
    title: string
}

export const EditableTitle: React.FC<EditableTitlePropsType> = ({title}) => {
    const [editMode, setEditMode] = React.useState(false)
    const [value, setValue] = React.useState(title)

    const onChangeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onEditHandler = () => {
        setEditMode(!editMode)
    }

    return (
        <>
            {editMode
                ? <input value={value} onChange={onChangeValueHandler}/>
                : title
            }
            <Button onClick={onEditHandler}>Edit</Button>
        </>
    );
};
