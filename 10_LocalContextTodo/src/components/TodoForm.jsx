import React, { useState } from 'react'
import { useTodo } from '../context';

function TodoForm() {
    //state define krni h for individual todo
    const [todo,settodo]=useState("")
    const {addTodo}=useTodo ()//using help of usetodo we extract addtodo

    const add=(e)=>{
        e.preventDefault()

        if(!todo ) return

        addTodo({ todo,completed:false})//since addTodo fn mei objects pass kiye hue h therefore here also we pass objects
        //since app.jsx mei addTodo mei date.now() de rakha h toh here there is no need of that, if name of field and value is same
        //so instead of writing todo:todo we can just write todo
        settodo("")//clean up
    }
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                //wiring up of input with our state
                value={todo}
                onChange={(e)=> settodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


