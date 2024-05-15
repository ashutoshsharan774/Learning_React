import { useState ,useCallback, useEffect,useRef} from 'react'
//kisi bhi chiz ka reference lena hota ha tab useref hook aata hai

function App() {
const [length,setLength]=useState(8)
const [numberAllowed,setnumberAllowed]=useState(false)//ya toh number lo in password or not
const [charAllowed,setcharAllowed]=useState(false)
const [password,setpassword]=useState("")//jab bhi page load ho apne aap ek random password aa jaye


//useref hook
const passwordRef=useRef(null) 


  const password_Generator= useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()-_=+[]{}~`"

    for(let i=1;i<=length;i++){
      let index=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(index);
    }
    setpassword(pass)
    
  },
    [length,numberAllowed,charAllowed,setpassword])

    const copyPasswordOnClipboard=useCallback(()=>{
      //since we are dealing in react therefore we can use directly window object
      //copy krne pr value select honi chahiye
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0,100);//for optimization ki itni value select krni hai
      window.navigator.clipboard.writeText(password)
    },[password])
  

    //to run password Generator function
    useEffect(()=>{
      password_Generator()
    },[length,numberAllowed,charAllowed,password_Generator])//callback fn and dependency array

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3
      my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py1 px-3'
            placeholder='Your Passcode'
            readOnly
            //useref ke liye reference hona chahiye , here input password field ka ref mil gya 
            ref={passwordRef} 

          />
          <button 
            //ref toh mil gya but copy button pr click krne pr kuch hona bhi toh chahiye
            onClick={copyPasswordOnClipboard}
          className='outline-none bg-blue-700 text-white px-3
          py-0.5 shrink-0 mx-1'> Copy </button>

        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
             />
             <label for='Length'>Length:{length}</label>

          </div>
          <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange={()=>{//callback fire kr diya
                  // In React, you can use the onChange event with a callback function to handle changes in form input elements.
                  setnumberAllowed((prev)=>!prev)
                }}
              />
             <label for='Numinput'>Numbers</label> 
          </div>

          <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                defaultChecked={charAllowed}
                id='charinput'
                onChange={()=>{//callback fire kr diya
                  // In React, you can use the onChange event with a callback function to handle changes in form input elements.
                  setcharAllowed((prev)=>!prev)//callback fire krke prev value ka access milta then we can revert it
                }}
              />
             <label for='charinput'>Characters</label> 
             </div>

        </div>
      </div>
    </>
  )
}

/* ***USE_CALLBACK HOOK ****** 
const memoizedCallback = useCallback(
  () => {
    // Function body
  },
  [dependencies] // Array of dependencies
);
If dependency changes then function will be recreated else memoized version of the function will be returned
>>>>>>>In our case we have to check for numbers,char which are states(dependecy), whenever their state changes from false to true or vice versa 
>>>>>>>>new created function will be returned or else memoized one,So while generating password we need to use useCallback function for an optimized sol


*/
//React memorizes (caches) this callback function between renders. If the dependencies haven't changed since the last render, React returns the memoized version of the callback function instead of creating a new one.
// So, in simple terms, useCallback is like putting your function in a box that React checks before deciding if it needs to create a new one. If the box hasn't changed (meaning the dependencies are the same), React reuses the function from the previous render. 
// This helps in optimizing performance by avoiding unnecessary function recreations.

//OnChange:You can use the onChange event to perform various actions, such as updating the state of a React component, validating user input, or triggering other JavaScript functions based on user input changes.





//Task is to make 'copy' button more clickable





export default App
