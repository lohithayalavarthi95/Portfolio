import React from 'react'
import '../components/main.css'
import { List, Avatar, Divider } from 'antd'

function SocialStyling ({
  socialdescription,
  socailSitename,
  socialComponent: SocialDComponent,
  sociallink,
  classNameDes
}) {
  const data = [
    {
      title: 'Ant Design Title 1'
    }
  ]
  return (
    <>
      <p
        style={{ fontFamily: 'serif' }}
        className={classNameDes}
        onClick={() => {
          window.open(sociallink)
        }}
        target='_blank'
      >
        <p style={{ marginRight: '30px'  }}>{socailSitename}</p>

        <SocialDComponent style={{ marginRight: '10px', marginTop: '6px' }} />
        <p style={{ fontFamily: 'serif', cursor: 'pointer'}}>
          {socialdescription}
        </p>
      </p>
      <Divider />
    </>
  )
}

export default SocialStyling
