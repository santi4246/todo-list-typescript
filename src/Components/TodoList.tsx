import React from 'react';

interface TodoListProp {
    items: {
        id: string,
        text: string
    }[]
}

const TodoList: React.FC<TodoListProp> = (props) => {    
    return (
        <div>
            <ul>
                {
                    props.items.map(e => {
                        return <li key = {e.id}>{e.text}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default TodoList;