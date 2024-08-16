import React, { createContext, useState } from 'react'

 const UserContext = createContext()

 const Context = (props)=>{
    const [user , setUser] = useState([
        {name:'nishant' , id: 1 , address:'kapan'},
        {name:'nisha' , id: 2 , address:'olanchunggola'},
    ])

    return(
        <UserContext.Provider value={{user , setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContext , Context}
