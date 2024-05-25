import React from 'react'
//container accepts properties as a children(children is just a name) 
//container is just a box , sirf height width basically styling define krte ha
//common practice ha
//Ab suppose kro we need only 80%width of container in all elements so we shift (slight change) container and it will reflect in all elements
function Container({children}) {
    return (
        <div className='w-full max-w-7xl mx-auto px-4 '>{children}</div>
    )
}

export default Container
