import React from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

//Header mei logout kb display hoga only when koi login ho therfore create a component of logoutbtn in header folder
function Header() {

    const authstatus=useSelector((state)=> state.auth.status) //state mei se nikalna pdega ki  authenticated hai ki ni ha 
    const navigate=useNavigate() //Use the useNavigate hook in your components to navigate to different routes.


     // useNavigate is a hook provided by the react-router-dom library, used for programmatic navigation in React applications. It allows you to navigate to different routes within your application without having to use a Link component.

    //  The navItems array contains objects with path and label properties. Each object represents a navigation item.
    const navItems=[{
        name:'Home',
        slug:'/',//url bhi de skte ha instead of slug
        active:true
       
    },{name: "Login",
    slug: "/login",
    active: !authstatus, //active depends on  authStatus
    },
    {
        name: "Signup",
      slug: "/signup",
      active: !authstatus,

    },
    {
        name: "All Posts",
      slug: "/all-posts",
      active: authstatus,

    },
    {
        name: "Add Post",
      slug: "/add-post",
      active: authstatus, 
    }







]

    return (
        // The <header> tag represents the introductory content or a set of navigational links for a section, typically containing headings, logos, or other relevant introductory elements.
        <header className='py-3 shadow bg-gray-500'>
            <Container>
                {/*The <nav> element is used to wrap the navigation links, providing semantic meaning to the navigation structure.
                 The <ul> and <li> elements are used to create a list of navigation items, which is a common and accessible pattern. */}
                <nav className='flex'> 
                    <div className='mr-4'>
                        <Link to='/'> {/*href ke andar wrap kr diya  */}
                            <Logo width='70px'/>

                            </Link>
                    </div>
                    {/*lists jais jaha bhi multiple same type of html elements use honge waha keys dena hota h */}
                    {/*navigate mei parameter pass krna hoga ki kaha navigate krna h */}
                    <ul className='flex ml-auto'>
                        {navItems.map((item)=> 
                            item.active ? (    
                              <li keys={item.name}>
                                <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'                                                   
                                    onClick={()=> navigate(item.slug)}                          
                                >{item.name}</button>
                              </li>  
                            ):null

                        )} 
                        
                        {authstatus && (
                            <li>
                                <LogoutBtn/>
                            </li>
                        )}
                    </ul>
                    {/*handling logout btn , the syntax says ki agar authStatus true hoga tabhi && ke aage k chiz display hoga, in this case agar authenticated ho then Logoutbtn do else ni*/}
                    {/*navitem ke andar har ek item milega */}



                </nav>
            </Container>

        </header>
    )
}
//Logout show krna h ya ni that will be conditonally rendered i.e check if user is logged in then only show logout button
export default Header
