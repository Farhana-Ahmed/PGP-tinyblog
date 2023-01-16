import React from 'react'
import { Card } from 'react-bootstrap'
import { SectionEnum } from '../../sections'


const English = () => {
  return (
    <div>
         <Card style={{ width: "18rem", margin: "10px", height: "20rem", border:"solid"}} >
        <Card.Body>
      
          <Card.Title style={{textAlign:"center"}}>{SectionEnum.English }</Card.Title>
         
          </Card.Body>
        </Card>
    </div>
  )
}

export default English