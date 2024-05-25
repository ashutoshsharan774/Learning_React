//Mehanism ki kis tarah se pages ko ya routes ko protect krte ha
//Layout is basically a protected container

import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({ //conditionally render krenge ki ky uske children ko render krna h ni krna h
    children,authentication=true
}) {
    const navigate=useNavigate()
    const [loader,setLoader]=useState(true)
    //ask authStatus se ki logged in ho ni ho
    //// Using useSelector to extract data from the Redux store state
    //In this case, state => state.auth.status is the selector function, which extracts the auth.status value from the Redux store state.
/*
The auth.status value is then available for use in the component, and any time the auth.status value in the Redux store changes, this component will automatically re-render to reflect the updated value.
*/

    const authStatus=useSelector(state=>state.auth.status)//visit store and then go to authSlice to check status

    useEffect(()=>{
            //TODO: make it more easy
             // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false




        if(authentication && authStatus!==authentication){
            navigate('/login')//aapko is case mei login pr aana chahiye kyuki aap login ho hi ni
        }else if(!authentication && authStatus!==authentication ){
            navigate('/')
        }
            setLoader(false)
    },[authStatus,navigate,authentication])//dependecy array mei se kisi mei bhi change ho re-render

    return loader?<h1>Loading..</h1>:<>{children}</>
}


