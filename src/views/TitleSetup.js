import React from 'react'

function TitleSetup (props) {
  return (
    <div
      style={{
        color: 'white',
        alignItems: 'center',
        width: '300px',
        marginLeft: '82px'
      }}
    >
      {props.children}
    </div>
  )
}

export default TitleSetup
