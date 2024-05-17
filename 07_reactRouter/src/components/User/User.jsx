import React from 'react'
import { useParams } from 'react-router-dom'
/*
Sure! The useParams hook in React Router DOM is used to access the parameters from the current route. 
These parameters are usually part of the URL and are defined in the route path. For example, 
if you have a route like /users/:userId, the userId part of the URL is a parameter that you can access using useParams.
*/
function User() {
    const {userid}=useParams()
    return (
        <div className='bg-gray-600 text-white p-4 text-2xl'>User:{userid}</div>
    )
}

export default User
