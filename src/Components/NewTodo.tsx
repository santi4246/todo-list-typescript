import React, { useRef } from "react";
import { Button, Form } from "semantic-ui-react";

interface propsTodo {
    onAddTodo: (text: string) => void
}

const NewTodo: React.FC<propsTodo> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = inputRef.current!.value;
        props.onAddTodo(enteredText);
    }
    return <Form onSubmit = {handleSubmit} className = "container">
        <Form.Field>
            <label htmlFor = "todo-text">Titulo: Aplicación Todo</label>
            <input type = "text" id = "todo-text" ref = {inputRef}></input>
        </Form.Field>
        <Button type = "submit">Agregar</Button>
    </Form>
}

export default NewTodo;