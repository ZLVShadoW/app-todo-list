import React from 'react';


type TaskPropsType = {
    title: string
}

export const Task: React.FC<TaskPropsType> = ({title}) => {
    return (
        <div>
            {title}
        </div>
    );
};
