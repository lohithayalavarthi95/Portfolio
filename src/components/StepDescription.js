import React from 'react'
import { Typography, Button } from 'antd'
const { Title } = Typography
function StepDescription ({
  titlename,
  subtitename,
  contenttext,
  listitem1,
  listitem2,
  Language1,
  Language2,
  Language3,
  Language4,
  Language5,
  Language6,
  Language7,
  Language8,
  Language9

}) {
  return (
    <div style={{ color: 'black' }}>
      <Title level={3}>{titlename}</Title>
      <p
        style={{
          fontSize: '18px',
          fontWeight: '300',
          lineHeight: '1.5',
          textTransform: 'none'
        }}
      >
        {subtitename}
      </p>
      <p>
        <strong style={{ fontSize: '17px' }}>{contenttext}</strong>
      </p>
      <ul>
        <li style={{ fontSize: '17px' }}>{listitem1}</li>
        <li style={{ fontSize: '17px' }}>{listitem2}</li>
      </ul>
      <p><strong style={{ fontSize: '17px' }}>Technologies :</strong></p>
      <Button
        style={{
          backgroundColor: '#bb1e1e',
          color: 'white',
          marginRight: '3px'
        }}
      >
        {Language1}
      </Button>
      <Button
        style={{
          backgroundColor: '#bb1e1e',
          color: 'white',
          marginRight: '3px'
        }}
      >
        {Language2}
      </Button>
      <Button
        style={{
          backgroundColor: '#bb1e1e',
          color: 'white',
          marginRight: '3px'
        }}
      >
        {Language3}
      </Button>
      <Button
        style={{
          backgroundColor: '#bb1e1e',
          color: 'white',
          marginRight: '3px'
        }}
      >
        {Language4}
      </Button>
      <Button
        style={{
          backgroundColor: '#bb1e1e',
          color: 'white',
          marginRight: '3px'
        }}
      >
        {Language5}
      </Button>
      <Button
        style={{
          backgroundColor: '#bb1e1e',
          color: 'white',
          marginRight: '3px'
        }}
      >
        {Language6}
      </Button>
      <Button
        style={{
          backgroundColor: '#bb1e1e',
          color: 'white',
          marginRight: '3px'
        }}
      >
        {Language7}
      </Button>
      <Button
        style={{
          backgroundColor: '#bb1e1e',
          color: 'white',
          marginRight: '3px'
        }}
      >
        {Language8}
      </Button>
      <Button
        style={{
          backgroundColor: '#bb1e1e',
          color: 'white',
          marginRight: '3px'
        }}
      >
        {Language9}
      </Button>
    </div>
  )
}

export default StepDescription
