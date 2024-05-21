import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext'
//data bhejne ha and profile mei wahi username n data accept krna ha 

function Login() {
    const [username,staeUsername]=useState('');
    const [password,setUserpassword]=useState('');

    //how to fetch the value from UserContext --setUser UserContextProvider mei defined ha 
    const {setUser}=useContext(UserContext)




    const handleSubmit =(e)=>{
        e.preventDefault()
        setUser({username,password})

    }

    return (
        <div>
            <h2>Login</h2>
            <input type='text' 
            value={username} //value governed by username
            onChange={(e)=>staeUsername(e.target.value)}
            placeholder='username'/>
            {' '}
            <input type='text' 
            value={password} //this value will be governed by password
            onChange={(e)=>setUserpassword(e.target.value)}
            placeholder='password'/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
