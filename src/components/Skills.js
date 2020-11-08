import React from 'react'
import ContentHeader from './ContentHeader'
import { Progress } from 'antd'

function Skills () {
  return (
    <ContentHeader headername='SKILLS'>
      ReactJS{' '}
      <Progress style={{ marginBottom: '20px' }} percent={100} size='small' />
      NodeJS{' '}
      <Progress style={{ marginBottom: '20px' }} percent={100} size='small' />
      JAVASCRIPT
      <Progress style={{ marginBottom: '20px' }} percent={100} size='small' />
      MongoDB
      <Progress style={{ marginBottom: '20px' }} percent={100} size='small' />
      CSS
      <Progress style={{ marginBottom: '20px' }} percent={100} size='small' />
      HTML
      <Progress style={{ marginBottom: '20px' }} percent={100} size='small' />
      JQuery
      <Progress style={{ marginBottom: '20px' }} percent={75} size='small' />
      Java
      <Progress style={{ marginBottom: '20px' }} percent={100} size='small' />
      AJAX
      <Progress style={{ marginBottom: '20px' }} percent={65} size='small' />
      C++
      <Progress style={{ marginBottom: '20px' }} percent={70} size='small' />
      MySQL
      <Progress style={{ marginBottom: '20px' }} percent={100} size='small' />
      Python
      <Progress style={{ marginBottom: '20px' }} percent={80} size='small' />
    </ContentHeader>
  )
}

export default Skills
