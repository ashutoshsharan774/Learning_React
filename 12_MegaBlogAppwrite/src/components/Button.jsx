//commonly design krlo button jaha bhi chahiye hoga use it
import React from 'react'

function Button({
    children , //bs name de diya kuch bhi de skte th name (basically buttontxt hai ki kis name btn display hogi)
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className='',//hm customize kr skte ha classname ko jaise hmne kiye ha bgcolor textcolor and className(user se bhi pass krwa skte h) dekar
    ...props//button ki ek property ha className but aur bhi attributes ho skte that is handled by spreading props

}) {
    return (
       <button className={`px-4 py-2 rounded-lg ${bgColor} ${className} ${textColor}`}
       {...props}>
        {children}
       </button>
        
    )
}

export default Button
 