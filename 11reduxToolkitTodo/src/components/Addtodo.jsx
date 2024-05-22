import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/Todo/TodoSlice'

function Addtodo() {
    const [input,setInput]=useState('');//input field mei initial value ky hoga when page is loaded and then further on changes ky changes honge that is determined by setInput method

    // In React-Redux, dispatch is a function provided by the Redux library to send actions to the Redux store. 
    // Actions are plain JavaScript objects that represent an intention to change the state. When you dispatch an action, it triggers the store's reducer function to determine how the state should be updated based on the action's type and payload
    const dispatch =useDispatch()

    const addTodoHandler =(e)=>{
        e.preventDefault()
        //dispatch ek reducer ko use krte hue store ke values mei changes krta ha either be it adding or deleting
        dispatch(addTodo(input)) //here 'input' is the value that we want to send ||  reducer import kiya and dispactch k through bhej diya 
        setInput('') //jab bhi todo ban gya h toh user ko acha ni lagega ki wo form waha fr field h toh usko clean kr do (suppose if next to do add kr reh toh waha input field clean hona chahiye na)
    }


    return (
    <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
    <input
        type="text"
        className='bg-gray-800 rounded border
        border-gray-700 focus:border-indigo-500
        focus:ring-2 focus-ring-indigo-900 text-base outline-none
        text-gray-100 py-1 px-3 leading-8 translation-colors duration-200 ease-in-out'
        placeholder='Enter a Todo...'
        value={input}
        onChange={(e)=> setInput(e.target.value)}
    />
    <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
    
    )
}

export default Addtodo
