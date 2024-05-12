import Chai from "./chai"
//in case of making this same chai file by create-react-app we can use extension .js
//but here in vite we need to use .jsx extension along with chai file since it has its own configuration
//This tells us the difference between library and framework

function App() {
  const username="Chai aur Code"//if we have to treat it like variable then use curly braces

  return (
   // <h1> React sikhe with Vite(quick in french) | AS </h1>
    //before using tag name chai why did we delete/commented out h1 tag,
    //here comes the concept of .jsx file ,because the rule is we can return only 
    //one html element in .jsx file, so inorder to return more than on html
    //tags enclose them all in one div tag or we can also use <> </> tag(called as fragment in react)


  // <chai/> //if we use tag chai with lowercase letter it won't be recognised in the browser
  //so if we want to render a react component start its name with uppercase letter

  //{username} is evaluated js expression not javascript
  <>
  <Chai/>
  <h1>Chai and react || {username}</h1> 
  <p>test para</p>
  </>
  
  )
}

export default App


//Let's see that if we can create a fn in app.jsx and render that fn in main.jsx 
//so similarily can we render app fn directly inside app.jsx 