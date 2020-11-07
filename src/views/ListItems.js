import React from 'react'
import { Typography } from 'antd'

const { Text, Paragraph, Title } = Typography

function ListItems ({ listItem1, listItem2, listItem3 }) {
  return (
    <div>
      <ul>
        {listItem1 && <li className='list-style-content'>{listItem1}</li>}
        {listItem2 && <li className='list-style-content'>{listItem2}</li>}
        {listItem3 && <li className='list-style-content'>{listItem3}</li>}
      </ul>
    </div>
  )
}

export default ListItems
