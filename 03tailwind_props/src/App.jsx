import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
//card ko ek alag component bana kr baar bar use kr skte ha 
//ho sakta h ki har ek card ko multiple times use kr rhe but usme name changes honge
//here props come into play

let myObj={
  userName:'Ashu',
  Age:'19'
}
//Similarily in cards we can pass array as well
let myArr=[1,2,3]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind text</h1> 
     <Card  username="Ashu" btntxt='Click me' />
     {/* <Card channel="chaiaurcode" someObj={myObj}/> */}
     <Card username='Gautam' btntxt='Visit me'/>
    
    </>
  )
}

export default App
