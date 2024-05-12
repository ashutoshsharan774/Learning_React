import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}//Actually this syntax is easy but react ko ye samajh ni aata therefore it is parsed in tree like structure(object as we did in customreact.js) 
//this is done by bundler
/*
    In React, a bundler plays a crucial role in managing and optimizing your project's assets, including JavaScript files, CSS files, images, and more. 
    Bundlers like Webpack or Parcel bundle together various modules and assets into a single or multiple bundles that can be efficiently served to the browser.
 */

    /*const reactElement={
        type:'a',
        props:{
            href:'https://google.com',
            target:'_blank'
        },
        children:'Click me to visit google'
    }
    const anotherElement=(
        <a href="https://google.com" target='_blank'>Visit google</a>

    )*/

    const username="Ashu"


    //creating an element using react 
    //babel injects this 
//In the context of React.js, Babel is often used to transpile JSX (JavaScript XML) syntax into regular JavaScript, which browsers can understand. JSX allows developers to write HTML-like syntax within their JavaScript code, making it easier to create React components.




    const reactElement=React.createElement(
        'a' ,//1st parameter expected is tag
        {href:'https://google.com,',target:'_blank'},//2nd parameter
        'click me to visit google ---> ',//3rd parameter
        //evaluated expresssion i.e username likh do yaha 
        username
    )


ReactDOM.createRoot(document.getElementById('root')).render(
    /*In React, the .render() method is a fundamental part of the ReactDOM library, used to render React elements into the DOM (Document Object Model). ReactDOM provides the necessary methods for integrating React components into a web application by managing the DOM updates efficiently. */
  
   // <App /> //ye jsx ka syntax hai

   //reactElement (this won't work here because in customreact.js we made a function for it called custom render )
   //basically render jo reactdom ka function h that is expecting value of a certain kind , reactElement is customized by us
   // so jo bhi properties keys humne apne according banayi that won't execute in react
   


//    anotherElement

    reactElement   //here we are using react's render therefore we must abide by some of react's rules
    
  
)
//App is a function created in app.jsx and in that we returned an html element so now in main.jsx we rendered that app.jsx