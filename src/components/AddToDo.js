import React, { useState } from "react";

export default function AddToDo({ onAddToDo }) {
    const [title, setTitle] = useState("");

    return (
        <div>
            <input 
            placeholder="Add new ToDo... "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            /> 
            {title.length === 0 && <small>Type ToDo if you want to add</small>}
            <button 
                onClick={() => {
                    setTitle("");
                    onAddToDo(title);
            }}
            disabled={title.length === 0}
            >
                ➕Add ToDo
            </button>
        </div>
    );
};
