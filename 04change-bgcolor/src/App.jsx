import { useState } from 'react'
import './App.css'

function App() {
  //since we have to change color's state so we need to store it in a variable
  const [color,setColor]=useState("olive")
 
  return (
     <div className="w-full h-screen duration-200 "
     style={{backgroundColor: color}}
     >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl ">Bar:
          <button
            onClick={()=> setColor("red")}//The onClick event handler in React accepts a function as its argument. This function is called when the element is clicked

           className="outline-none px-4 py-1 
           rounded-xl text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>

          <button
          onClick={()=> setColor("green")}
           className="outline-none px-4 py-1 
           rounded-xl text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>

          <button
          onClick={()=> setColor("orange")}
           className="outline-none px-4 py-1 
           rounded-xl text-white shadow-lg"
          style={{backgroundColor: "orange"}}
          >Orange</button>

          <button
          onClick={()=> setColor("blue")}
           className="outline-none px-4 py-1 
           rounded-xl text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>



        </div>
      </div>
     </div>
  )
}
{/*way of writing inline CSS in react inorder to implement state*/}
export default App
