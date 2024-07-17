import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

const AccordionComponent = ({ data }) => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        {
          data?.map(({ heading, body }, index) => {
            return <Accordion.Item key={`ai_${index}`} eventKey={index} >
              <Accordion.Header>{heading}</Accordion.Header>
              <Accordion.Body>
                {body}
              </Accordion.Body>
            </Accordion.Item>
          })
        }
      </Accordion>
    </div>
  )
}


export default AccordionComponent
