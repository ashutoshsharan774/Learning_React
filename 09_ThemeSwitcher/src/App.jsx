
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeButton'
import Card from './components/Card'

function App() {
 //jo buttons aa rhe unke liye thora work needs to be done
 
 const [themeMode,setThemeMode]=useState('light')

 //jo values provide kre ha unke name k hi method/useState hooks banao wo functionalities apne aap un methods mei chali jyegi
//  (functionality define ho rahi h)
 const lightTheme=()=>{
    setThemeMode('light')
 }
 const darkTheme=()=>{
  setThemeMode('dark')
 }
 //actual change in a theme
 useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)
 },[themeMode])
 //themeMode meri dependency ha jaise jaise themeMode change hoga useEffect wapas run hoga

  return (
    <>
    {/*kya kya values ka acess milega from themeprovider ye batana hoga */}
  <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto 
        flex justify-end mb-4">
            {/* Theme button*/} <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
            {/*Card */}  <Card/>
        </div>
    </div>
</div>
</ThemeProvider>   


    </>
  )
}

export default App
