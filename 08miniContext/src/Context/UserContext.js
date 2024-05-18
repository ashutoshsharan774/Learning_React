// The Context API in React is a powerful tool for managing state globally across a component tree without the need to pass props down manually at every level. It is particularly useful for themes, user authentication, and other data that needs to be accessed by many components.
//Context API is a state management solution in React that helps pass data between components in an organized way.
// Context API simplifies state management across components

import React from 'react'

const UserContext=React.createContext()
// Step 1: First, create a context using React.createContext(). This will create a context object.


//Step 2: Provide Context Value:
// Wrap your component tree with a context provider. The provider component uses the value prop to pass down the data.
// Or we can say, use the Provider component of the created context to wrap the part of your component tree that needs access to the context values. The Provider component takes a value prop that will be available to all components within the tree that are wrapped by this provider.




export default UserContext