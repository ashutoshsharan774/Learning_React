import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import { TodoForm } from './components'
import TodoItem from './components/ToDoItem'

function App() {
  //the todos that come from context we will store it in a state
  const [todos,settodos]=useState([])

  //defining functionalities of methods in TodoContext provider
  const addTodo=(todo)=>{
    //basically ye ek todo hoga and it should go in todos array so 
    //we need to know the previous state of todos array ki unme konsi todos pahle se thi
    //to obtain previous todos we have a callback fire and then we keep previous todods along with thw new one
    settodos((prevtodos)=> [{id:Date.now(),...todo},...prevtodos])

  }

  const updateTodo=(id,todo)=>{
    settodos((prev)=> prev.map((prevTodo)=>(prevTodo.id===id
    ? todo: prevTodo)))   
    //aise isiliye likha becasue each todo is an object and each one has an id so basically we are comparing ids of prevtodo with updated id
    //explaination
    /*prev.map(eachval)=>({
      if(eachval.id===id){
        todo
      }
      else{
        eachval
      }
    }) */
  }

  const deleteTodo=(id)=>{
    settodos((prev)=>prev.filter((todo)=>todo.id!=id)) //jo hmari id se match ni krega wo array mei aayega and jo todo match kr gaya wo remove ho jyega array se
  }//filter method fires a callback function
  /*The filter method in JavaScript is a powerful tool for creating a new array with all elements that pass a test implemented by the provided function. This method does not mutate the array on which it is called. Instead, it returns a new array with the elements that satisfy the provided condition. */

  const toggleComplete=(id)=>{
    settodos((prev)=> prev.map((prevTodo)=>prevTodo.id===id ? {...prevTodo,completed:!prevTodo.completed }:prevTodo))//pahle sari values le lo and then completed ko overrride kr do
  }

//As our page is loaded there is possibility that we might have already added some todos so
//how to put those todos in todo array as page is loaded , so we use useEffect hook
  useEffect(()=>{
   const todos= JSON.parse( localStorage.getItem('todos'))

   if(todos && todos.length>0){//if these conditions are true then probably we r gonna set values
      settodos(todos)
   }
  },[])

  //jab values todos mei jaaye usi time I want them to be added in local storage

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])





//TodoProvider is providing values

  return (
    
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}> 
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              <TodoForm/>
                {/* Todo form goes here */} 
            </div>
            <div className="flex flex-wrap gap-y-3">

                {/*Loop and Add TodoItem here */}

                {todos.map((todo)=> (
                  <div key={todo.id}
                  className='w-full'>   
                    <TodoItem todo={todo}/>   {/*Passing todo prop */}
                  
                  </div>
                ))}
            </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
