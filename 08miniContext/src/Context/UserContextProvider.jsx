import React from 'react'
import UserContext from './UserContext'
import { useState } from 'react'

function UserContextProvider({children}) {
    // takes children as a prop, which represents the child components that will be wrapped by MyProvider.
    const [user,setUser]=useState(null)
    return (
        <>
    
            <UserContext.Provider value={{user,setUser }}> {/**This renders a UserContext.Provider component. UserContext.Provider is a special component that comes from the React.createContext API. It provides the state and setState to any components that are descendants of this provider. */}
             {/* we get a property i.e value inside provider to specify ki konsi value ko access de rhe ho
              Here we passed an object 
              This makes the state and the updater function available to any child components that consume this context.
              */}



                {children}
                {/**This is where the child components passed to UserContextProvider will be rendered. It allows UserContextProvider to wrap its children with the context provider. */}

            </UserContext.Provider>
            
        </>
        
    )
}

export default UserContextProvider

//In summary, this code defines a UserContextProvider component that uses React's Context API to provide state and a function to update that state to its child components. This pattern is useful for state management in larger React applications where state needs to be shared across many components.







