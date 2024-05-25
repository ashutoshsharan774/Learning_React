//jo select component th for dropdown 
import React,{useId} from 'react'

function Select({
    options,//options jin pr dropdown krwa kr select krna h(ek array ke form mei hi milta h options usually)
    label,
    className='',
    ...props

},ref) {
   const id=useId();



    return (
        <div className='w-full'>
          {label && <label htmlFor={id} className=''></label>} 
          <select 
          {...props}
          id={id}
          ref={ref}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none
           focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
          >
            {options?.map((option)=>(//agar option mei kuch h then only map lagao, value mei jo ha wahi server ko jyega when a particular option is selected
                <option key={option} value={option}>
                    {option}
                </option>


                ))}
            
            </select> 

        </div>
    )
}

export default React.forwardRef(Select)//this is also a syntax
