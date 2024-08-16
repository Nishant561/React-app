import React from 'react'

function Button(props) {
  return (
    <>
        <button type={props.type} className='button'>
            Add Transaction
        </button>
    </>
  )
}

export default Button
