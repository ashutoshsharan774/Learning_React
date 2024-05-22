import { createSlice,nanoid } from "@reduxjs/toolkit";
//nanoid generates unique ids as we took date.now() in todocontext
//A reducer is a pure function that takes the current state and an action as arguments, and returns a new state. 
//A slice is a concept introduced by Redux Toolkit that represents a portion of the Redux state, along with the reducers and actions that pertain to it. It simplifies the process of creating reducers and actions by bundling them together.
//Redux Toolkit's createSlice function allows you to define the initial state, reducers, and actions in one place.

//Initial State can have objects as well as array, here we r taking an object
const initialState={
    todos:[{id:1,text:'Wassup'}]
}

// function sayHello(){
//     console.log("hello");
// } addTodo function mei bs iska referecne pass kr skte ha but we take other approach and create this function along with addTodo in reducer 

export const todoSlice=createSlice({
    name:'todo',
    //har slice ka ek initial state hota ha
    initialState,
    reducers: {//here come difference in syntax in context api and redux , in context we used to just declare functions overhere but in this case we define those methods here itself
        addTodo: (state,action)=>{
            const todo={    //since array mei objects push ho rhe h
                id:nanoid(),
                text:action.payload    //payload ek object ha
            }
            state.todos.push(todo)  //todos jo ki initialstate h usme push kra diya but in case of context api saare values state se nikalte phir spred krte and then add krte since waha state preserve ni rhti
        },  //syntax hai state and action ka access always available 
        //state: The current state of the slice.
        // action: The dispatched action, which contains the payload with the data to be passed (here data is text)
        // action: An object describing the change to be made, typically containing a type property and optionally a payload.

        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=> todo.id!== action.payload)
        },

    }
})

export const {addTodo,removeTodo}=todoSlice.actions//individual reducers ko aise hi export krna pdega because wo component mei kaam aayenge

export default todoSlice.reducer
//store.js needs to be  aware about all reducers , since it is a restrictive store ,it doesn't update value from any reducers , it only take and update values from registered reducers
