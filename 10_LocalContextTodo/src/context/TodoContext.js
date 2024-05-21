//It(Context Api) is particularly useful for managing global state and can help avoid the "prop drilling" problem, where you pass props through multiple nested components that don't actually need them.


import { createContext,useContext } from "react";

export  const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false
        }
    ],
    //methods  define kar rhe h  and in methods ki functionalities will be defined in app.jsx
        addTodo:(todo)=>{},
        updateTodo:(id,todo)=>{},//update krne ke liye id bhi chahiye aur todo bhi needed ki konsa id aur konsa update
        deleteTodo:(id)=>{},
        toggleComplete:(id)=>{}
})//default value can be put so that context jab paheli baar bane toh ky values ho 

//Since we don't want to insert context in useContext repeatedly so useContext hook hii export kr dete ha

export const useTodo=()=>{
    return useContext(TodoContext)//ye export kr diya h toh in indes.js no need to import all propserties and methods , wo saare useContext hook se hi nikal jyenge. To use the context in a component, you can use the useContext hook 
}

export const TodoProvider=TodoContext.Provider//provider tp wrap component tree  