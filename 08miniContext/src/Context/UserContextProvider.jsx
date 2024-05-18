import React from 'react'
import UserContext from './UserContext'
import { useState } from 'react'

function UserContextProvider({children}) {
    const [user,setUser]=useState(null)
    return (
        <>
    
            <UserContext.Provider value={{user,setUser }}> 
             {/* we get a property i.e value inside provider to specify ki konsi value ko access de rhe ho
              Here we passed an object */}
                {children}
            </UserContext.Provider>
            
        </>
        
    )
}

export default UserContextProvider
