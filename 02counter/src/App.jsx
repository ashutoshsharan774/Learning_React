import { useState } from 'react'//hooks yaha se import hota hai, we can access multiple hooks 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//use state hook:This hook allows functional components to manage state. It returns a stateful value and a function to update it.
let [counter,setCounter]=useState(5) //braces mei default value kuch bhi rkh skte ho 

//So, when you write const [count, setCount] = useState(0);, you are declaring a state variable named count initialized to 0, and a function setCount to update its value. This pattern allows you to manage state within functional components in React.

//let counter=5 {const[counter ,] does the same thing initialization}

  const addValue=()=>{
    // console.log("Value added",Math.random());  just to check whether this statement is working or not
 
    //Here counter increases in the console but not on the page  i.e there is an issue of UI updation, here react comes into play 
    //what if counter ki value UI pr 5 jagah likhi hui ha so if we update at one place it should get updated everywhere 
    //if we would use classic js for this we'll have to select each element using dom which would make code look lengthy
    //So basically we can change data through js but updation of data on UI is controlled by React library,here "hooks " come into play

   // counter=counter+1
  //  setCounter(counter)
  //there are two ways 
 
   setCounter(counter+1)
//hidden callback fn of setCounter : setCounter(prevcounter=>prevcounter+1) || counter ka previous state lekar aata h then usmei increase krta ha



  //  if (counter>20) preventDefault();
  //  console.log("clicked",{counter})
  }

  const removeValue=()=>{
    counter=counter-1
    if(counter<0) preventDefault()
    setCounter(counter)//setCounter basically ye batata ha ki counter ka next value ky hoga
    console.log("clicked",{counter})
  }
  

  return (
    <>
      <h1>React with Sharan</h1>
      <h2>counter_value : {counter}</h2>

      <button
      onClick={addValue}//addValue is a method and we are passing only reference of that method because we want that method should be executed on clicking the button
      > Add_Value {counter} </button>
      <br/>
      <br/>
      <button
      onClick={removeValue}
      >Remove_Value {counter}</button>
      <p>Footer:{counter}</p>
    </>
  )
}

export default App




/*In React.js, hooks are functions that allow you to use state and other React features in functional components. They were introduced in React version 16.8 as a way to write more concise and readable code, especially in functional components.

Before hooks, state and other React features were only available in class components. With hooks, you can use state, context, lifecycle methods, and more in functional components without needing to convert them to class components. */