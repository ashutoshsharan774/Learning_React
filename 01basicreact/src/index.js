import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
/*
React basically creates its own dom(virtual dom) and compares it with main dom and we change only certain elements in main dom 
When we go in package.json we find react-scripts in dependecies section also along with react and react-dom so from backdoor(internally) this 
react script only loads this js file in index.html
*/
root.render(
    // After you trigger a render, React calls your components to figure out what to display on screen. “Rendering” is React calling your components.
    //  On initial render, React will call the root component. 
    // For subsequent renders, React will call the function component whose state update triggered the render.
  
    <App />
 
);

