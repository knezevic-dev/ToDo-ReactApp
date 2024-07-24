import ToDoItem from "./ToDoItem";

export default function ToDoList({ todos, onChangeToDo, onDeleteToDo, onDeleteAllToDo}) {
    let completedToDo = 0;

    todos.map((todo) => {
        if(todo.done) {
            completedToDo = completedToDo + 1;
        }
        return completedToDo;
    });

    return (
        <>
        {todos.length === 0 ? (
            <h5>No todos</h5>
        ) : (
            <h5>
                {completedToDo}
                {completedToDo === 1 ? "todo" : "todos"} completed,
                {""}
                {todos.length} {todos.length === 
                1 ? "todo" : "todos"} remaining
            </h5>
        )}
        <ol>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <ToDoItem 
                        todo={todo}
                        onChange={onChangeToDo}
                        onDelete={onDeleteToDo}
                        onDeleteAll={onDeleteAllToDo}
                    />
                </li>
            ))}
        </ol>
        <button onClick={() => onDeleteAllToDo()}>❌DeleteAll</button>
        </>
    );
}