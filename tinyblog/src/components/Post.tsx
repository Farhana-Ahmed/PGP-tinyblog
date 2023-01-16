import React from 'react'
import { IPost } from '../model'
import { Props } from './PostsList'

//title,paragraph,tags


const Card = ({title}: IPost) => {
  return (
    <div>
     {title}
    </div>
  )
}

export default Card