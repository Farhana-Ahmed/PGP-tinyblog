import React, { useState } from "react";
import { IPost } from "../model";
import Post from "./Post";
export interface Props {
  posts: IPost[];
  tag: string;
}

const PostsList = ({ posts, tag }: Props) => {
  const [visible, setVisible] = useState<Boolean>(false);
  const filteredPosts = posts.filter((post) =>
    post.tags?.includes(tag.toLowerCase())
  );
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "show") {
      setVisible((prev) => !prev);
    } else {
      setVisible(false);
    }
  };
  return (
    <div className="max-w-md mx-auto bg-blue rounded-xl shadow-md overflow-hidden md:max-w-2xl m-10 justify-center bg-orange-100 ">
      <div className="md:flex justify-center">
        <div className="p-8 pb-16 m-10 justify-center">
         
          <div className=" tracking-wide text-sm text-green-500 font-semibold justify-center text-4xl">
            {tag}
            
          </div>
          <select onChange={handleChange} >
            <option value="show">show</option>
            <option value="hide">hide</option>
          </select>
            {visible ? (
              filteredPosts.map((post, index) => (
                <Post
                  title={post.title}
                  body={post.body}
                  tags={post.tags}
                  key={index}
                />
              ))
            ) : (
              <></>
            )}
        </div>
      </div>
    </div>
  );
};

export default PostsList;
