import React from "react";
import { IPost } from "../model";
import Post from "./Post";
import Home from "./Home";
import { SectionEnum } from "../sections";

export interface Props {
  posts: IPost[];
}
//may be put checking tags here
const PostList = ({ posts }: Props) => {

  const getTags = () => {
    const tags = posts.map(post => post.tags);
  let finalTags;
for(let i =0;i < tags.length ; i++) {
finalTags= tags[i]
return (finalTags[0])

}
return finalTags;
  }
getTags()
  return (
    <div>
      
      {posts.map((post, index) => (
          getTags() === SectionEnum.American ?
       
        <Post
          title={post.title}
          body={post.body}
          tags={post.tags}
          key={index}
        /> 
      
      :null
      ))}
    </div>
  );
};

export default PostList;
