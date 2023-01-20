import React, { useState } from "react";
import { IPost } from "../model";
import Filter from "./Filter";
import Post from "./Post";
export interface Props {
  posts: IPost[];
  tag: string;
}

const PostsList = ({ posts, tag }: Props) => {
  const [visible, setVisible] = useState<Boolean>(false);
  const [postsToshow, setPosts] = useState<IPost>({} as IPost);

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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPosts(postsToshow);
  };
  return (
    <div>
      
        {/* {tagFilter === 'all' ? {filteredPosts}: null} */}
    <div className="max-w-md mx-auto bg-blue rounded-xl shadow-md overflow-hidden md:max-w-2xl m-10 justify-center bg-orange-100 ">
      <div className="md:flex justify-center">
        <div className="p-8 pb-16 m-10 justify-center">
          <div className=" tracking-wide text-sm text-green-500 font-semibold justify-center text-4xl">
            <button onClick={handleClick}> {tag}</button>
          </div>
          <select
            onChange={handleChange}
            className="m-5 sbg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          >
            <option value="">Choose an option</option>
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
    </div>
  );
};

export default PostsList;
