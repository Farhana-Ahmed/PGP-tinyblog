import React from 'react'
import { IPost } from '../model'
import Card from './Post'

export interface Props {
    posts: IPost[]
}

const CardList =({posts} : Props) => {

  return (
    <div>
      
      {posts.map(
        (post,index) => ( <Card title={post.title} body={post.body} tags={post.tags} key ={index}/>)
        
        )}

        {/* <Card title={posts.title}  /> */}
    </div>
  )
}

export default CardList