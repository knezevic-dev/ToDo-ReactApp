import React, { useState } from "react";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

let nextId = 1;
const initialTodos = [{ id: 0, title: "ToDo Test", done: true }];

//because of the error I've got the functions are exported at the top like this, not in the bottom!

export default function ToDo() {
    const [todos, setTodos] = useState(initialTodos);

    function addToDo(title) {
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false,
            },
        ]);
    }

    function editToDo(nextTodo) {
        setTodos(
            todos.map((todo) => {
                if(todo.id === nextTodo.id) {
                    return nextTodo;
                } else {
                    return todo;
                }
            })
        );
    }

    function deleteToDo(todoId) {
        setTodos(todos.filter((todo) => todo.id !== todoId));
    }

    function deleteAllToDo() {
        setTodos([]);
    }

    return (
        <>
        <div>
            <AddToDo onAddToDo={addToDo} />
            <ToDoList
                todos={todos}
                onChangeToDo={editToDo}
                onDeleteToDo={deleteToDo}
                onDeleteAllToDo={deleteAllToDo}
            />
        </div>
        </>
    );
};

// I will add in time more changes to this ToDo app :)
