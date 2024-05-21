import React, { useState } from 'react'
import { useTodo } from '../context';

function TodoItem({ todo }) {//this todo is the prop that we have passed

    const [isTodoEditable,setIsTodoEditable]=useState(false)
    //edit click krne pr state change hogi so for that
    const [todoMsg,setTodoMsg]=useState(todo.todo)
    const editTodo=()=>{
        //updateTodo ko kya parameters chahiye ,1st one is id, second is entire todo object therfore spread kr lenge existing values ko and sirf ek property update kr li
        updateTodo(todo.id,{...todo,todo:todoMsg})
        //after updating todo now isEditable should be set to false
        setIsTodoEditable(false)
    }
    const toggleCompleted=()=>{
        toggleComplete(todo.id)
    }



    //keep in check the functionalities for eg : if I mark my todo item as done its not editable , if it is marked as not done then it is editable so new input should come
    //therfore jo bhi functionalities chahiye extract from useTodo
    const {updateTodo,deleteTodo,toggleComplete}=useTodo()

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
