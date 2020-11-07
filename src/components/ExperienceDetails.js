import React from 'react'
import ContentHeader from './ContentHeader'
import { Typography, Divider } from 'antd'
import ListItems from '../views/ListItems'
import ContentExp from './ContentExp'
import AiFillEdit from 'react-icons/ai'
const { Text, Paragraph, Title } = Typography

function ExperienceDetails () {
  return (
    <ContentHeader headername='EXPERIENCE'>
      <ContentExp
        title1={
          <>
            A{' '}
            <Text style={{ color: '#bb1e1e' }}>
              full-stack software engineer
            </Text>
        {' '}with over<Text type='danger'> 3+ years of experience. </Text>
          </>
        }
        title2={
          <>
            
              I have maintained, developed and launched multiple projects from
              scratch,carrying the development of its' back-end and front-end codebases.
          
            
          </>
        }
        title3={<>I can help you with all the sides of your project:</>}
        listItem1='verifying good UI/UX design.'
        listItem2='leading/co-developing the back-end and front-end.'
      />
      <Divider />
      <ContentHeader
        iconpresent
        marginLeftprop='10px'
        headername='IT SERVICE TECHNICIAN'
        
      >
        <ContentExp
          title1={
            <>
              An{' '}
              <Text style={{ color: '#bb1e1e' }}>
                IT service technician 
              </Text>
          {' '}currently working at CGI Inc with over<Text type='danger'> 7 months of experience. </Text>
            </>
          }
          listItem1='Responsible for handling large amount of incoming calls and assisting clients for IT-related Issues or requests.'
          listItem2='Using remote access to perform diagnostics, troubleshooting when needed.'
          listItem3='Diagnose and resolve technical hardware and software issues (printer, cell phone, web
            browser, etc.).'
          
          
        />
      </ContentHeader>
      <Divider />
      
      <ContentHeader
        iconpresent
        marginLeftprop='10px'
        headername='SOFTWARE ENGINEER'
      >
        <ContentExp
          title1={
            <>
              A{' '}
              <Text style={{ color: '#bb1e1e' }}>
                full-stack software engineer
              </Text>
          {' '}worked at I-Exceed Technologies Solutions Pvt. Ltd with over<Text type='danger'> 3+ years of experience. </Text>
            </>
          }
          listItem1='Handled, designed and Implemented web applications and delivered the application with
          the best quality driven and with best user experience for bank users.'
          listItem2='Responsible for interacting with client to understand the requirements and support needs.'
          listItem3='Developed Various applications using React Js, Redux ,ES6, NodeJS, Java, MongoDB.'
          listItem4='Involved in various phases of Software Development Life Cycle (SDLC) such as
          requirements gathering, modelling, analysis, design, development, and testing.'
          
          
        />
      </ContentHeader>
      <Divider />
    </ContentHeader>
  )
}

export default ExperienceDetails
