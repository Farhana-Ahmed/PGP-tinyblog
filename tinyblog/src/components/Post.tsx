import React from 'react'
import { IPost } from '../model'

import { Props } from './PostsList'

//title,paragraph,tags


const Post = ({title, tags}: IPost) => {
  // const mappedTags = tags.map((tag) => tag.concat(' '));
  // (tags.forEach(i => console.log(i)))
  // console.log(tags)
  return (
    <div>
     
     {/* <Sections /> */}
     {title}
    </div>
  )
}

export default Post