import React from 'react'

function Button(props) {
  return (
    <>
         <button data-id={props.id} onClick={props.delete} className="text-3xl px-2 py-1 rounded-r-lg bg-green-800">{props.text}</button>
    
        </>
  )
}

export default Button
