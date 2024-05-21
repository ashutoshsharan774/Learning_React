//Card.jsx is basically child component

import React from 'react'

//In this case instead of using props.username or props.btntxt we destructured and directly wrote {username,btntxt} agar koi btntxt pass ni kara app.jsx then uski default value pass kr dete h 
function Card({username,btntxt='visit me'}){
//passed default value for btntxt --> agar btntxt mei jo value h wo pass ni hui then default value gets passed
    //function Card(props) -> a way of declaring props 
    //console.log(props.username) since props is an object

    console.log(username);
    //another way of declaring props is not using 'prop' word instead just use {channel}
    // console.log("props",props);//jb app.jsx mei card declare kiye toh jo bhi value lenge waha wahi appear ho jyegi console mein
    return(
        <div className="relative h-[400px] w-[300px] rounded-md">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{username}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
           {btntxt} →
          </button>
        </div>
      </div>
    )
}

export default Card