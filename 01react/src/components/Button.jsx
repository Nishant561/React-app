import React from 'react'

function Button(props) {
    const {children ,toolTip} = props
  return (
    <div>
        {toolTip}
        <button>{children}
        
    </button>
    </div>
    
  )
}

export default Button
