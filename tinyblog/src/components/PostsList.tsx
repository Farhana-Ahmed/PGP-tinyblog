import React from "react";
import { IPost } from "../model";
import Post from "./Post";
export interface Props {
  posts: IPost[];
  tag: string;
}

const PostsList = ({ posts, tag }: Props) => {
  const filteredPosts = posts.filter((post) =>
    post.tags?.includes(tag.toLowerCase())
  );

  return (
    <div>
      <section>
        <h1>{tag}</h1>
        {filteredPosts.map((post, index) => (
          <Post
            title={post.title}
            body={post.body}
            tags={post.tags}
            key={index}
          />
        ))}
      </section>
    </div>
  );
};

export default PostsList;
