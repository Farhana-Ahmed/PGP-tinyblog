import { useState, useEffect } from "react";
import { IPost } from "../model";
import db from "../db/mockdata.json";
import PostsList from "./PostsList";

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  let tags: string[] = ["american", "english", "love", "magical", "mystery"];
  useEffect(() => {
    const getData = () => {
      const data = db;
      setPosts(data.posts);
    };
    getData();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      {/* <h1>Tiny Blog</h1> */}
      {tags.map((tag, index) => (
        <PostsList posts={posts} tag={tag} key={index} />
      ))}
    </div>
  );
};

export default Home;
