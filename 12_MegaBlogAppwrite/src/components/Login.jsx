import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'//we will deal login as authlogin in this file
import {Button,Input,Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/Auth'
import {useForm} from 'react-hook-form'


function Login() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {register,handleSubmit}=useForm()
    /*useForm is called to initialize the form. It provides methods like register, handleSubmit, and an object containing errors.
register is used to register input fields and their validation rules. (automatically, jo aapne values input field mei likhi ha uska state manage ni krna h,waha se apne aap value pick krega and at time of handleSubmit hote time saari values le lega )
handleSubmit is used to handle form submission. It takes a function ('onSubmit in this case || check form section ) that receives the form data if the validation passes. || handleSubmit ek method/event  h jo ki apna hota h ki mai is tarah form ko handle krunga (isiliye jo hmne login async fn banaya h uska name handleSubmit ni rkhna h kyuki handLeSubmit ab ek keyword kindof ban gya h)
The errors object is used to display validation error messages if the validation fails. */
    const[error,setError]=useState('')

    const login=async(data)=>{
        setError('')//sbse pahle error clean kr do
        try {
         const session=   await authService.login(data)
         if(session){
            const userData=await authService.getCurrentUser()     //userdata hmesha await se hi lenge
            if(userData) dispatch(authLogin(userData)) //jake authslice mei login dekho tab userdata smjh aayega     //dispatch is used to send actions that trigger state updates. 
            navigate('/')//ab user k login ho gya why to keep user here navigate kara do usko route pr (ab agar link use krte then click krna padta but in case of navigate programatically navigate kr jyega)
         }
            
        } catch (error) {
            setError(error.message)
        }
    }




    return (
        <div
        className='flex items-center justify-center w-full'
        >
            <div className={`mx-auto w-full max-w-lg
             bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100%'/>
                    </span>
                </div>
        <h2 className='text-center text-2xl font-bold leading-tight'>
            Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
            
                    Don&apos;t have any account?&nbsp;  
                    <Link
                        to="/signup"//go n check in header.jsx to understand better
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
            {error && <p className='text-red-600 mt-8 text-center'>
                {error}</p>}

                <form onSubmit={handleSubmit(login)}
                 className='mt-8'>
                    <div className='space-y-5'>
                        <Input 
                        label='Email:'
                        placeholder='Enter your email'
                        type='email'
                        {...register('email',{ //register mei sbse pahle key deni hoti here its email then we give object 
                            required:true,
                            validate:{
                                matchPattern:(value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)   //basically ye hm kr rhe h ki kis type k email valid ha(Email validation ke liye useform wale hook mei jakr validation section mei jaao) (this is ragex exp , for this go to ragexr)
                                ||"Email address must be valid address"
                            }
                        } )}//jitne bhi input fields banaoge har baar ...register likhna hoga (... se speread krte h value ni toh pata chala aur bhi koi  input field banaye waha override ho gya value)
                    
                        />

                        <Input 
                            label='Password:'
                            type='Password'
                            placeholder="Enter your password"
                            {...register('password',{
                                required:true,
                            })}
                        />
                       <Button
                        type='submit'
                        className='w-full'
                       >Sign in</Button>
                    </div>
                 </form>

            </div>

        </div>
    )
}

export default Login
