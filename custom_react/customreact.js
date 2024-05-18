function customRender(reactElement,container){
    //create a dom element and then inject it wherever we want

   /* const domElement =document.createElement
    (reactElement.type)
    domElement.innerHTML=reactElement.children

    //setAttribute will create a problem since here we need to set each attribute manually
    //therefore we need to find loop based solution

    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)*/

    //Modular code 
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
     for (const prop in reactElement.props) {
        if(prop ==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
     }
     container.appendChild(domElement)
}

//The html element that we have returned ,we trying to see how does react sees it after it is compiled(we have used this word loosely )
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}
//Since we are creating our own customized react library so we need to define a structure of how react sees things
//here we have defined type ,propoerties,children 

const mainContainer=document.getElementById('root')
//Now we need to render reactElement in root 
customRender(reactElement,mainContainer)//this asks parameters that(ky inject kare,kaha inject kare)

 