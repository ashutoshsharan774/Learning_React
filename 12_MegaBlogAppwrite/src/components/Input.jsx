import React,{useId} from 'react'

// In React, forwardRef is a utility function that allows you to pass a ref through a component to one of its children. This is particularly useful when you need to directly interact with a DOM element or a child component’s instance that is nested inside another component
// Input is a functional component that forwards its ref to the input element.
//example of forwardref: suppose our input field(wahi i/p field we are gonna use for email, password and many more ) is defined separately and out login page is somewhere else but i/p field ki state ka reference login component ko dena hoga na that is where we need to pass reference
//Basically hm input field ke liye alag component bana de rhe h
const Input=React.forwardRef( function Input({
    label,
    type="text",//default mei text type toh ha hi
    className='',//similar to what we did in button component
    ...props

},ref){//jo bhi use krega ref bhi pass krega
    const id=useId()//har bar ek unique id generate hogi
    
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'
            htmlFor={id}>
                {label}
            </label>}
            <input  
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none
                 focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref} //jo user se ref liya usko pass kr do aur yaha se state k access liya jyega aur parent component ko diya jyega(tabhi toh input mei jo fill ho rha h wo hoga like onClick onChange)
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input
