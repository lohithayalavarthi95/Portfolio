import React from 'react'
import ContentHeader from './ContentHeader'
import { Steps, Divider, Typography } from 'antd'
import StepDescription from './StepDescription'

const { Step } = Steps
const { Title } = Typography

function Projects () {
  return (
    <>
      <ContentHeader headername='PROJECTS'>
        <p>
        <strong style={{ fontSize: '17px', color:'#000000' }}>A full-stack software engineer with over 3+ years of experience.
          Designed many web and mobile applications.</strong>
        </p>
        <Steps progressDot direction='vertical'>
         
          <Divider />
          <Step
            status='finish'
            title={<b style={{ fontSize: '17px' }}>Now</b>}
            description={
              <div style={{ color: 'black' }}>
                <p style={{ fontSize: '17px' }}>
                  Currently open to co-operation on new and existing projects.
                  Looking for a mentor, or a just full-stack developer willing
                  to join your team? Contact me. I will answer you in ~24 hours.
                </p>
              </div>
            }
          />
          <Step
            status='finish'
            title={<b>May 2020 to Aug 2020</b>}
            description={
              <StepDescription
                titlename='Distributed system to design class registration system'
                contenttext='Class registration system is an platform that lets you register courses and also can verify grading system'
                listitem1='Built the distributed system using Java, Java script, html, CSS, web services and provided a
                fault tolerant system'
                listitem2='Responsive web application'
                Language1 = 'Java'
                Language2 = 'JavaScript'
                Language3 = 'HTML'
                Language4 = 'CSS'
                
              />
            }
          />
           <Step
            status='finish'
            title={<b>Aug 2017 - Jun 2020</b>}
            description={
              <StepDescription
                titlename='India post payments bank, India'
                subtitename='MicroATM Application'
                contenttext='MicroATM Application is a web application can be used by business correspondence who can visit customer at their door step and serve financial transactions and do Banking Operations.'
                listitem1='Designed and implemented where the Assisted App user can Initiate /view the summary of
                accounts and the transactions'
                listitem2='Responsible for interacting with client to understand the requirements and support needs.'
                Language1 = 'ReactJS'
                Language2 = 'NodeJS'
                Language3 = 'MongoDb'
                Language4 = 'HTML'
                Language5 = 'CSS'
                Language6 = 'JavaScript'
                Language7 = 'AWS'
                Language8 = 'C++'
              />
            }
          />
          <Step
            status='finish'
            title={<b>Jan 2016 - Oct 2017</b>}
            description={
              <StepDescription
                titlename='Equitas bank, INDIA'
                subtitename='Corporate banking web app'
                contenttext='Corporate banking web app is a web application which is used by corporate to make transactions that are essential to corporate financing, investing and growth.'
                listitem1='Designed and Implemented Bank Admin where the admin of the bank has access to
                corporate registration and maintenance.'
                listitem2='Designed different modules in this app which helps corporate to do cash deposit, cash withdrawal, fund transfer and other operations.'
                Language1 = 'ReactJS'
                Language2 = 'NodeJS'
                Language3 = 'MongoDb'
                Language4 = 'HTML'
                Language5 = 'CSS'
                Language6 = 'JavaScript'
                Language7 = 'AWS'
                Language8 = 'C++'
              />
            }
          />
          <Step />
        </Steps>
      </ContentHeader>
    </>
  )
}

export default Projects
