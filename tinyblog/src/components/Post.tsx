import React from 'react'
import { Card } from 'react-bootstrap'
import { IPost } from '../model'
import { SectionEnum } from '../sections'

import { Props } from './PostsList'

//title,paragraph,tags


const Post = ({title, tags, body}: IPost) => {
 
  return (
    <div>
    <Card
        style={{
          width: "15rem",
          margin: "10px",
          height: "20rem",
          border: "solid",
        }}
      >
        <Card.Body>
        
          <Card.Title style={{ textAlign: "center" }}>
            {title}
          </Card.Title>
          <Card.Text>{body}</Card.Text>
          <Card.Footer>{tags}</Card.Footer>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Post