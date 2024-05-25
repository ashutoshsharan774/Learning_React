import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/Auth.js'
import {login,logout} from './store/authSlice.js'
import './App.css'
import { Footer, Header } from './components/index.js'
import {Outlet} from 'react-router-dom'

function App() {
  //this is how we can render .env file's data and most of the times it doesn't get automatically updated so we need to run project again
 // console.log(import.meta.env.VITE_APPWRITE_URL);


 //jab bhi database se kuch puchna ho ,network se kuch puchna ho so its better to create loading state on basis of which we can do conditional rendering
 const [loading,setloading]=useState(true)
  const dispatch = useDispatch()
  //as soon as application is loaded take a useEffect hook and ask Service if logged in or not
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{//agar userData ni mila then state update lra denge ki logout ho aap
        dispatch(logout())
      }
    })
    .finally(()=>setloading(false))
  },[])


//conditional return
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          {/* todo Outlet */}<Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ):(null)

}

export default App
