import React from 'react';
import { List, Button, Icon } from 'semantic-ui-react';
import "../App.css";

interface TodoListProp {
    items: {
        id: string,
        text: string
    }[]
    onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProp> = (props) => {    
    return (
        <div className = 'container'>
            <List>
                {
                    props.items.map(e => {
                        return <List.Item key = {e.id}>
                            <Button onClick = {props.onDeleteTodo.bind(null, e.id)} circular size = 'mini' icon><Icon color = 'red' name = "cancel" /></Button>
                            {e.text}
                            </List.Item>
                    })
                }
            </List>
        </div>
    );
}

export default TodoList;