import React from "react";
import { IPost } from "../model";
import Post from "./Post";
import Home from "./Home";
import { SectionEnum } from "../sections";

export interface Props {
  posts: IPost[];
  tag:string
}
//may be put checking tags here
const PostsList = ({ posts,tag }: Props) => {
  const filteredPosts = posts.filter(post => post.tags?.includes(tag.toLowerCase()))

  return (
    <div>
      <section> <h1>{tag}</h1>
      {filteredPosts.map((post, index) =>
        // getTags() === SectionEnum.American ? (
          <Post
            title={post.title}
            body={post.body}
            tags={post.tags}
            key={index}
          />
        // ) : null
      )}
      </section>
    </div>
  );
};

export default PostsList;
