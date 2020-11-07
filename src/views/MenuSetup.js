import React from 'react'

function MenuSetup (props) {
  return (
    <div
      style={{
        width: '300px',
        marginLeft: '52px',
        marginTop: '60px'
      }}
    >
      {props.children}
    </div>
  )
}

export default MenuSetup
