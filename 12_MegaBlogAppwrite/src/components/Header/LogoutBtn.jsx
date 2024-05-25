import React from 'react'
//Now after Logout we need to take an action kuch dispatch krna pdega so logout k liye store se slice(reducer) lana pdega and useDispatch bhi lana pdega
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/Auth'
import {logout} from '../../store/authSlice' //logout ki individual service bhi lani pdegi


function LogoutBtn() {
    const dispatch=useDispatch()
    const logouthandler=()=>{
        authService.logout().then(()=>{
           dispatch(logout()); //ab agar logout successfully ho gya so dispatch kr do so that store ke andar info updated rhe
        })      //logout apne aap mei ek promise ha in auth.js
    }
    return (
       <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
       onClick={logouthandler}>
        Logout
       </button>
    )
}

export default LogoutBtn
