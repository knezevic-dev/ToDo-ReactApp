import React, { useState } from "react";

export default function ToDoItem({ todo, onChange, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);

    let todoContent;

    if(isEditing) {
        todoContent = (
            <>
            <input 
                value={todo.title}
                onChange={(e) => {
                onChange({
                    ...todo,
                    title: e.target.value,
                });
            }}
            />
            <button 
                className="button-save"
                onClick={() => setIsEditing(false)}
                disabled={todo.title.length === 0}
                >
                    ✔️Save
            </button>
            </>
        );
    } else {
        todoContent = (
            <>
            {todo.title}
            <button 
            className="button-edit"
            onClick={() => setIsEditing(true)}>📝Edit</button>
            </>
        );
    }
    return (
        <label>
            <input 
                type="checkbox"
                checked={todo.done}
                onChange={(e) => {
                    onChange({
                        ...todo,
                        done: e.target.checked,
                    });
                }}
                />
                {todoContent}
                <button onClick={() => onDelete(todo.id)}>❌Delete</button>
                {todo.title.length === 0 && <p>ToDo cannot be empty!</p>}
        </label>
    );
};