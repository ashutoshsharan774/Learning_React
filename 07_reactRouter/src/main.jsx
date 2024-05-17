import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


/*
Guide for using outlet
Set Up Your Routes: Define your routes using the createBrowserRouter function. Some routes will have child routes, which will be rendered inside the Outlet component.

Create Layout Component: Create a layout component where the Outlet will be placed. This layout component can include shared UI elements like a header or a sidebar.

Use Outlet in Layout: Place the Outlet component inside your layout component. The nested routes will be rendered where the Outlet is placed.

Define Child Routes: Set up nested routes (child routes) in your route configuration.*/ 



//Use createBrowserRouter to define your routes. Each route is an object with a path and element (the component to render).
const router=createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        path:"",
        element:<Home/>//element or component to be rendered
      },
      {
        path:"about",
        element:<About/> //element to be rendered
      },
      {
        path:"contact-us",
        element:<Contact/>
      },
      {
        path:"user/:userid",
        element:<User/>//similar things happen in facebook aur insta field is same but on the basis of userid different interface/data for different users
      },
      {
        //ek aur property available ha i.e loader
        loader:githubInfoLoader,
        //jo github.jsx mei api call kra h uske badle loader mei hi api call kr skte ha toh jaise hi click krenge github pr wo pahle hi api fetch kr lega (in backend)
        path:"github",
        element:<Github/>
      }
    ]
  }
])

//Another way of using cretaebrowser and defining routes

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <router path='/' element={<Layout/>}>
//         <router path='' element={<Home/>}/>
//         <router path='about' element={<About/>}/>
//         <router path='contact-us' element={<Contact/>}/>
          
//     </router>
//   )
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)

/* In React Router v6.4 and later, RouterProvider is introduced to provide a more flexible and declarative way to configure and manage routing in your React applications. It allows you to define routes and their configurations using an object-based approach, and it can simplify the integration of data fetching, nested routes, and other advanced routing features.*/