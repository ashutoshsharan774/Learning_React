import { useState } from 'react'
import './App.css'
import viteLogo from'/vite.svg'

import Addtodo from './components/Addtodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import {store} from './app/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
     <h1>Understanding concept of React Redux</h1>
     <Addtodo/>
     <Todos/>
    </Provider>
  )
}
//Wrap your React application with the Provider component to make the Redux store available to your React components.
//Provider ko context api ke tarah yaha vi value chahiye the diff is ki yaha we call it prop instead of value
export default App
