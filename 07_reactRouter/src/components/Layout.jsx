//We created this because we want that header and footer remains same throughout even if we switch from Home to About to Contact US
//we can perform all this operation inside app.js as well
// Guide for using outlet
// Set Up Your Routes: Define your routes using the createBrowserRouter function. Some routes will have child routes, which will be rendered inside the Outlet component.

// Create Layout Component: Create a layout component where the Outlet will be placed. This layout component can include shared UI elements like a header or a sidebar.

// Use Outlet in Layout: Place the Outlet component inside your layout component. The nested routes will be rendered where the Outlet is placed.

// Define Child Routes: Set up nested routes (child routes) in your route configuration.*/ 


import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
//The Outlet component in React Router DOM is a powerful feature that allows for nested routing. 
// It acts as a placeholder where nested routes will be rendered.
//Header Footer is gonna remain same , Outlet jaha likha hoga /use hoga that will change according to need

function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout
