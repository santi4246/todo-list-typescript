import React, { useRef } from "react";

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
    return <form onSubmit = {handleSubmit}>
        <div>
            <label htmlFor = "todo-text">Titulo: </label>
            <input type = "text" id = "todo-text" ref = {inputRef}></input>
        </div>
        <button type = "submit">Agregar</button>
    </form>
}

export default NewTodo;